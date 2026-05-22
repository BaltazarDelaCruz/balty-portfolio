import { useState } from 'react'

export default function SpeedTest() {
  const [testing, setTesting] = useState(false)
  const [download, setDownload] = useState('—')
  const [upload, setUpload] = useState('—')
  const [ping, setPing] = useState('—')
  const [status, setStatus] = useState('Ready to test')

  const runTest = async () => {
    if (testing) return
    
    setTesting(true)
    setStatus('Testing...')
    setDownload('—')
    setUpload('—')
    setPing('—')

    // Simulate ping test
    await new Promise(resolve => setTimeout(resolve, 500))
    const pingValue = Math.floor(Math.random() * 30) + 10
    setPing(pingValue)
    setStatus('Measuring download speed...')

    // Simulate download test
    let dlSpeed = 0
    const dlInterval = setInterval(() => {
      dlSpeed += Math.random() * 20
      setDownload(Math.min(dlSpeed, 100).toFixed(1))
    }, 100)

    await new Promise(resolve => setTimeout(resolve, 2000))
    clearInterval(dlInterval)
    const finalDl = (Math.random() * 50 + 50).toFixed(1)
    setDownload(finalDl)
    setStatus('Measuring upload speed...')

    // Simulate upload test
    let ulSpeed = 0
    const ulInterval = setInterval(() => {
      ulSpeed += Math.random() * 10
      setUpload(Math.min(ulSpeed, 50).toFixed(1))
    }, 100)

    await new Promise(resolve => setTimeout(resolve, 2000))
    clearInterval(ulInterval)
    const finalUl = (Math.random() * 30 + 20).toFixed(1)
    setUpload(finalUl)
    
    setStatus('Test complete!')
    setTesting(false)
  }

  return (
    <div className="speedtest-band">
      <div className="container">
        <div className="speedtest-wrap">
          <div className="speedtest-left">
            <p className="eyebrow" style={{ marginBottom: '.5rem' }}>Network Diagnostics</p>
            <h3 className="speedtest-title">Internet <em>Speed Test</em></h3>
            <p className="speedtest-sub">Live connection check — because uptime matters.</p>
          </div>
          <div className="speedtest-right">
            <div className="speedtest-gauges">
              <div className="speedtest-gauge">
                <svg className="gauge-ring" viewBox="0 0 120 120" aria-hidden="true">
                  <circle className="gauge-track" cx="60" cy="60" r="50"/>
                  <circle 
                    className="gauge-fill" 
                    cx="60" cy="60" r="50"
                    style={{
                      strokeDashoffset: download === '—' ? 314 : 314 - (parseFloat(download) / 100 * 314)
                    }}
                  />
                </svg>
                <div className="gauge-inner">
                  <span className="gauge-val">{download}</span>
                  <span className="gauge-unit">Mbps</span>
                  <span className="gauge-lbl">Download</span>
                </div>
              </div>
              <div className="speedtest-gauge">
                <svg className="gauge-ring" viewBox="0 0 120 120" aria-hidden="true">
                  <circle className="gauge-track" cx="60" cy="60" r="50"/>
                  <circle 
                    className="gauge-fill gauge-fill-up" 
                    cx="60" cy="60" r="50"
                    style={{
                      strokeDashoffset: upload === '—' ? 314 : 314 - (parseFloat(upload) / 100 * 314)
                    }}
                  />
                </svg>
                <div className="gauge-inner">
                  <span className="gauge-val">{upload}</span>
                  <span className="gauge-unit">Mbps</span>
                  <span className="gauge-lbl">Upload</span>
                </div>
              </div>
              <div className="speedtest-gauge speedtest-gauge-sm">
                <div className="gauge-inner gauge-inner-sm">
                  <span className="gauge-val">{ping}</span>
                  <span className="gauge-unit">ms</span>
                  <span className="gauge-lbl">Ping</span>
                </div>
              </div>
            </div>
            <div className="speedtest-status">{status}</div>
            <button 
              className="speedtest-btn" 
              onClick={runTest}
              disabled={testing}
              aria-label="Run internet speed test"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              {testing ? 'Testing...' : 'Run Test'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
