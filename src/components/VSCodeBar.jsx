import { useState, useEffect } from 'react'

export default function VSCodeBar() {
  const [line, setLine] = useState(142)
  const [col, setCol] = useState(18)

  useEffect(() => {
    const interval = setInterval(() => {
      setLine(prev => prev + Math.floor(Math.random() * 3) - 1)
      setCol(prev => Math.max(1, prev + Math.floor(Math.random() * 5) - 2))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id="vscode-bar" aria-hidden="true">
      <div className="vsb-left">
        <div className="vsb-item vsb-git">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
          <span>main</span>
        </div>
        <div className="vsb-item vsb-sync">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="1 4 1 10 7 10"/>
            <polyline points="23 20 23 14 17 14"/>
            <path d="M20.49 9A9 9 0 005.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 013.51 15"/>
          </svg>
          <span>0↓ 2↑</span>
        </div>
        <div className="vsb-item vsb-errors">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span>0</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '6px' }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <span>0</span>
        </div>
      </div>
      <div className="vsb-right">
        <div className="vsb-item"><span>portfolio.js</span></div>
        <div className="vsb-item"><span>JavaScript</span></div>
        <div className="vsb-item"><span>Ln {line}, Col {col}</span></div>
        <div className="vsb-item vsb-indent"><span>Spaces: 2</span></div>
        <div className="vsb-item vsb-encoding"><span>UTF-8</span></div>
        <div className="vsb-item vsb-prettier">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.571 23.429A.571.571 0 018 24H6.286a.571.571 0 01-.571-.571V.57A.571.571 0 016.286 0H8a.571.571 0 01.571.571v22.858zM18.286 7.429H12.57a.571.571 0 00-.571.571v1.714c0 .315.256.571.571.571h5.715a.571.571 0 00.571-.571V8a.571.571 0 00-.571-.571zm0 4.571H12.57a.571.571 0 00-.571.572V14.3c0 .315.256.57.571.57h5.715a.571.571 0 00.571-.57v-1.729a.571.571 0 00-.571-.571zm0-9.143H12.57A.571.571 0 0012 3.43v1.714c0 .315.256.571.571.571h5.715a.571.571 0 00.571-.571V3.43a.571.571 0 00-.571-.572z"/>
          </svg>
          <span>Prettier</span>
        </div>
        <div className="vsb-item vsb-live">
          <span className="vsb-live-dot"></span>
          <span>Live</span>
        </div>
      </div>
    </div>
  )
}
