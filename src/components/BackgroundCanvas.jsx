import { useEffect, useRef } from 'react'

export default function BackgroundCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let W, H, particles = []
    let rafId

    const resize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
      generateParticles()
    }

    const generateParticles = () => {
      const count = Math.min(Math.floor(W * H / 15000), 100)
      particles = Array.from({length: count}, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 0.5 + 0.1,
        a: Math.random() * 0.3 + 0.04,
        va: (Math.random() - 0.5) * 0.003,
        vx: (Math.random() - 0.5) * 0.035,
        vy: (Math.random() - 0.5) * 0.025
      }))
    }

    const animate = () => {
      ctx.clearRect(0, 0, W, H)
      
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.a += p.va
        
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0
        
        if (p.a < 0.03 || p.a > 0.4) p.va *= -1
        
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.a * 0.22})`
        ctx.fill()
      }
      
      rafId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener('resize', resize)

    return () => {
      window.removeEventListener('resize', resize)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return <canvas ref={canvasRef} id="bg" />
}
