export default function Services() {
  const services = [
    {
      number: '01',
      title: 'Fullstack Development',
      description: 'Building end-to-end web applications with React, Node.js, and modern databases. RESTful APIs, authentication, deployment pipelines — the whole stack.',
      tags: ['React', 'Node.js', 'APIs', 'Databases'],
      icon: 'M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16'
    },
    {
      number: '02',
      title: 'UI / UX Design',
      description: 'Designing purposeful interfaces in Figma — wireframes to high-fidelity prototypes. Design systems, accessibility, and handoff-ready assets.',
      tags: ['Figma', 'Prototyping', 'Design Systems'],
      icon: 'M4 6h16M4 10h16M4 14h16M4 18h16'
    },
    {
      number: '03',
      title: 'IT Support & Helpdesk',
      description: 'L1/L2 helpdesk, hardware repair, OS imaging, and software deployment. Fast diagnosis, minimal downtime, maximum uptime for your team.',
      tags: ['Windows Server', 'Active Directory', 'Remote Support'],
      icon: 'M2 3h20v14H2zM8 21h8M12 17v4'
    },
    {
      number: '04',
      title: 'Network & Infrastructure',
      description: 'LAN/WAN setup, VPN deployment, router/switch configuration, and network troubleshooting. Reliable, secure connectivity from the ground up.',
      tags: ['LAN/WAN', 'VPN', 'DNS/DHCP', 'Wi-Fi'],
      icon: 'M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20'
    },
    {
      number: '05',
      title: 'Cybersecurity & Backup',
      description: 'Security awareness, firewall management, antivirus/EDR deployment, and robust backup/recovery strategies to protect critical data and systems.',
      tags: ['Firewall', 'EDR', 'Backup', 'Recovery'],
      icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    },
    {
      number: '06',
      title: 'Systems Administration',
      description: 'Windows Server administration, Active Directory, Group Policy, and user account management. Keeping your environment healthy, updated, and compliant.',
      tags: ['Windows Server', 'AD', 'GPO'],
      icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'
    }
  ]

  return (
    <section id="services" className="section" aria-labelledby="services-heading">
      <div className="container">
        <p className="eyebrow reveal">What I Do</p>
        <h2 id="services-heading" className="sh reveal" style={{ transitionDelay: '0.05s' }}>
          End-to-end <em>expertise</em><br/>on demand.
        </h2>
        <div className="svc-grid" role="list">
          {services.map((service, index) => (
            <article 
              key={service.number}
              className="svc-card reveal hover-lift card-3d" 
              style={{ transitionDelay: `${0.07 * index}s` }}
              role="listitem"
            >
              <div className="svc-num" aria-hidden="true">{service.number}</div>
              <div className="svc-icon pulse-on-hover" aria-hidden="true">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={service.icon}/>
                  {service.number === '04' && <circle cx="12" cy="12" r="10"/>}
                </svg>
              </div>
              <h3 className="svc-title">{service.title}</h3>
              <p className="svc-desc">{service.description}</p>
              <div className="svc-tags hover-glow" role="list" aria-label="Technologies used">
                {service.tags.map((tag) => (
                  <span key={tag} className="svc-tag" role="listitem">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
