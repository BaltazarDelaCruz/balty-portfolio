import { useEffect } from 'react'
import ThemeToggle from './components/ThemeToggle'
import CustomCursor from './components/CustomCursor'
import BackgroundCanvas from './components/BackgroundCanvas'
import Hero from './components/Hero'
import About from './components/About'
import TerminalBand from './components/TerminalBand'
import SpeedTest from './components/SpeedTest'
import SystemMonitor from './components/SystemMonitor'
import Services from './components/Services'
import Stack from './components/Stack'
import AuthFlow from './components/AuthFlow'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VSCodeBar from './components/VSCodeBar'
import EasterEgg from './components/EasterEgg'
import './index.css'

function App() {
  useEffect(() => {
    // Reveal animations
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -50px 0px' }
    )

    const watchReveal = () => {
      document.querySelectorAll('.reveal:not(.on)').forEach((el) => {
        revealObserver.observe(el)
      })
    }

    watchReveal()

    const mutationObserver = new MutationObserver(watchReveal)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    // Load external scripts
    const emailjsScript = document.createElement('script')
    emailjsScript.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js'
    emailjsScript.async = true
    document.body.appendChild(emailjsScript)

    const swalScript = document.createElement('script')
    swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11'
    swalScript.async = true
    document.body.appendChild(swalScript)

    return () => {
      revealObserver.disconnect()
      mutationObserver.disconnect()
      document.body.removeChild(emailjsScript)
      document.body.removeChild(swalScript)
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <ThemeToggle />
      <CustomCursor />
      <BackgroundCanvas />
      <EasterEgg />

      <div id="site">
        <main id="main-content">
          <Hero />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <About />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <TerminalBand />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <SpeedTest />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <SystemMonitor />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <Services />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <Stack />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <AuthFlow />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <FeaturedProject />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <Projects />
          <div className="hr" role="separator" aria-hidden="true" />
          
          <Contact />
        </main>
        
        <Footer />
      </div>

      <VSCodeBar />
    </>
  )
}

export default App
