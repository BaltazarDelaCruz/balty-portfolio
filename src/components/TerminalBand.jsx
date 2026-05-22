import { useState, useEffect, useRef } from 'react'

export default function TerminalBand() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState([])
  const inputRef = useRef(null)

  const commands = {
    help: () => `Available commands:
<span class="tok">help</span> - Show this help message
<span class="tok">skills</span> - List my technical skills
<span class="tok">projects</span> - Show recent projects
<span class="tok">contact</span> - Get contact information
<span class="tok">experience</span> - Show work experience
<span class="tok">clear</span> - Clear terminal output
<span class="tok">whoami</span> - About me
<span class="tok">pwd</span> - Current location`,
    
    skills: () => `<span class="tok">Frontend:</span> React, JavaScript ES6+, HTML5, CSS3, Tailwind
<span class="tok">Backend:</span> Node.js, Express, PHP, REST APIs
<span class="tok">Database:</span> MySQL, PostgreSQL, MongoDB
<span class="tok">IT/Ops:</span> Windows Server, Active Directory, VMware, DNS/DHCP
<span class="tok">Design:</span> Figma, Adobe XD, Photoshop`,
    
    projects: () => `<span class="tok">Recent Projects:</span>
→ Reacture - Flutter learning app with AI tutor
→ Weather App - React + Leaflet.js dashboard
→ Currency Converter - Real-time exchange rates
→ Japanese Number Converter - Interactive quiz mode
→ Blog Platform - Responsive editorial design`,
    
    contact: () => `<span class="tok">Contact Information:</span>
<span class="tok">Email:</span> baltazardelacruz74@gmail.com
<span class="tok">GitHub:</span> github.com/BaltazarDelaCruz
<span class="tok">LinkedIn:</span> linkedin.com/in/baltazar-dela-cruz
<span class="tok">Location:</span> Philippines (Remote available)`,
    
    experience: () => `<span class="tok">Work Experience:</span>
<span class="tok">Fullstack Developer</span> - Building web applications
<span class="tok">IT Support Specialist</span> - Infrastructure & helpdesk
<span class="tok">Systems Administrator</span> - Windows Server, AD, GPO
<span class="tok">Network Technician</span> - LAN/WAN, VPN, DNS/DHCP`,
    
    whoami: () => `<span class="tok">Baltazar Dela Cruz</span>
IT Professional & Fullstack Developer
Bridging infrastructure and application development`,
    
    pwd: () => `<span class="tok">/home/baltazar/portfolio</span>`,
    
    clear: () => 'CLEAR'
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const cmd = input.trim().toLowerCase()
    
    if (!cmd) return
    
    if (commands[cmd]) {
      const result = commands[cmd]()
      if (result === 'CLEAR') {
        setOutput([])
      } else {
        setOutput(prev => [...prev, { cmd, result }])
      }
    } else {
      setOutput(prev => [...prev, { 
        cmd, 
        result: `<span class="tw">Command not found: ${cmd}</span>\nType <span class="tok">help</span> for available commands.` 
      }])
    }
    
    setInput('')
  }

  return (
    <div className="term-band" role="complementary" aria-labelledby="terminal-heading">
      <div className="term-inner">
        <div className="term-bar">
          <span className="term-dot" style={{ background: '#ff5f57' }} aria-hidden="true"></span>
          <span className="term-dot" style={{ background: '#ffbd2e' }} aria-hidden="true"></span>
          <span className="term-dot" style={{ background: '#28c840' }} aria-hidden="true"></span>
          <span id="terminal-heading" className="term-title">baltazar@bdc:~ $</span>
        </div>
        <div className="term-body" role="log" aria-label="Terminal output showing system status">
          <div><span className="tp">$ </span><span className="tc">whoami --verbose</span></div>
          <div className="to tok">✔ Baltazar Dela Cruz — IT Professional & Fullstack Developer</div>
          <div><span className="tp">$ </span><span className="tc">ping infrastructure --check</span></div>
          <div className="to tok">✔ Network: 1Gbps link stable | AD synced | VPN active</div>
          <div className="to tw">⚠ Firmware update scheduled: Sunday 02:00 UTC</div>
          <div><span className="tp">$ </span><span className="tc">npm run dev</span></div>
          <div className="to tok">✔ React 18 + Node.js server running on :3000</div>
          
          {output.map((item, index) => (
            <div key={index}>
              <div><span className="tp">$ </span><span className="tc">{item.cmd}</span></div>
              <div className="to" dangerouslySetInnerHTML={{ __html: item.result }} />
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="terminal-input-line">
            <span className="tp">$ </span>
            <input 
              ref={inputRef}
              type="text" 
              className="terminal-input" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Try: help, skills, projects, contact, clear"
              autoComplete="off"
            />
          </form>
        </div>
      </div>
    </div>
  )
}
