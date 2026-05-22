import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const cursor = document.createElement('div')
    cursor.id = 'cur'
    cursor.className = 'cur'
    document.body.appendChild(cursor)

    const cursorRing = document.createElement('div')
    cursorRing.id = 'cur-r'
    cursorRing.className = 'cur-r'
    document.body.appendChild(cursorRing)

    let mx = 0, my = 0, rx = 0, ry = 0
    let rafId

    const updateCursor = (e) => {
      mx = e.clientX
      my = e.clientY
    }

    const animateCursor = () => {
      rx += (mx - rx) * 0.11
      ry += (my - ry) * 0.11
      
      cursor.style.transform = `translate(${mx}px, ${my}px)`
      cursorRing.style.transform = `translate(${rx}px, ${ry}px)`
      
      rafId = requestAnimationFrame(animateCursor)
    }

    document.addEventListener('mousemove', updateCursor, { passive: true })
    animateCursor()

    return () => {
      document.removeEventListener('mousemove', updateCursor)
      if (rafId) cancelAnimationFrame(rafId)
      cursor.remove()
      cursorRing.remove()
    }
  }, [])

  return null
}
