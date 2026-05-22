import { useState, useEffect, useRef } from 'react'

export default function EasterEgg() {
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(1)
  const [keySequence, setKeySequence] = useState('')
  const canvasRef = useRef(null)
  const animationRef = useRef(null)

  useEffect(() => {
    const handleKeyPress = (e) => {
      setKeySequence(prev => {
        const newSeq = (prev + e.key).slice(-3).toLowerCase()
        console.log('Key sequence:', newSeq) // Debug log
        if (newSeq === 'bdc') {
          console.log('Easter egg activated!') // Debug log
          setVisible(true)
          setCount(prev => prev + 1)
          return ''
        }
        return newSeq
      })
    }

    const handleEscape = (e) => {
      console.log('Key pressed:', e.key, 'Visible:', visible) // Debug log
      if (e.key === 'Escape') {
        console.log('Closing easter egg') // Debug log
        setVisible(false)
      }
    }

    window.addEventListener('keypress', handleKeyPress)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keypress', handleKeyPress)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [visible])

  // Matrix rain effect
  useEffect(() => {
    if (!visible || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()'.split('')
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0f0'
      ctx.font = `${fontSize}px monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    animationRef.current = setInterval(draw, 33)

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
  }, [visible])

  const handleClose = () => {
    console.log('Close button clicked') // Debug log
    setVisible(false)
  }

  const handleBackgroundClick = (e) => {
    if (e.target.id === 'easter-egg' || e.target.id === 'matrix-canvas') {
      console.log('Background clicked') // Debug log
      setVisible(false)
    }
  }

  if (!visible) return null

  return (
    <div 
      id="easter-egg" 
      aria-hidden="true" 
      onClick={handleBackgroundClick}
      style={{ 
        position: 'fixed',
        inset: 0,
        zIndex: 100000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(4, 6, 12, 0.95)',
        backdropFilter: 'blur(12px)',
        cursor: 'pointer'
      }}
    >
      <canvas 
        ref={canvasRef} 
        id="matrix-canvas"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.18
        }}
      ></canvas>
      <div 
        className="ee-content" 
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          padding: '3rem',
          maxWidth: '480px',
          cursor: 'default'
        }}
      >
        <div className="ee-badge">// CHEAT CODE ACTIVATED</div>
        <h2 className="ee-title">You found it.</h2>
        <p className="ee-sub">
          Most people just scroll past.<br/>
          You typed <code>bdc</code> — respect.
        </p>
        <div className="ee-stats">
          <div className="ee-stat">
            <span>{count}</span>
            <small>times found</small>
          </div>
          <div className="ee-stat">
            <span>∞</span>
            <small>coffee consumed</small>
          </div>
          <div className="ee-stat">
            <span>01</span>
            <small>developer</small>
          </div>
        </div>
        <button 
          className="ee-close" 
          onClick={handleClose}
          onMouseDown={handleClose}
          onTouchStart={handleClose}
          aria-label="Close easter egg"
          style={{ 
            cursor: 'pointer',
            pointerEvents: 'all',
            position: 'relative',
            zIndex: 100001
          }}
        >
          Press ESC or click to close
        </button>
      </div>
    </div>
  )
}
