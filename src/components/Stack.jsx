export default function Stack() {
  const stackCategories = [
    {
      title: '// Frontend',
      items: 'HTML5 · CSS3 · Tailwind CSS · JavaScript ES6+ · React.js · Bootstrap · Git'
    },
    {
      title: '// Backend',
      items: 'Node.js · Express.js · REST APIs · PHP · MySQL · PostgreSQL · MongoDB'
    },
    {
      title: '// Design',
      items: 'Figma · Adobe XD · Photoshop · Canva · Wireframing · Prototyping'
    },
    {
      title: '// IT / Ops',
      items: 'Windows Server · Active Directory · VMware · DNS/DHCP · VPN · PowerShell'
    }
  ]

  const stack = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
  ]

  return (
    <section id="stack" className="section">
      <div className="container">
        <p className="eyebrow reveal">Tech Stack</p>
        <h2 className="sh reveal" style={{ transitionDelay: '0.05s' }}>
          Tools I <em>build with.</em>
        </h2>
        <div className="stack-cats reveal" style={{ transitionDelay: '0.1s' }}>
          {stackCategories.map((category, index) => (
            <div key={index} className="stack-cat">
              <div className="stack-cat-title">{category.title}</div>
              <div className="stack-cat-items">{category.items}</div>
            </div>
          ))}
        </div>
        <div className="stack-grid reveal" style={{ transitionDelay: '0.15s' }} role="list">
          {stack.map((item) => (
            <div key={item.name} className="stack-card" role="listitem">
              <img
                className="stack-card-icon"
                src={item.icon}
                alt={`${item.name} logo`}
                loading="lazy"
                onError={(e) => { e.target.style.display = 'none' }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
