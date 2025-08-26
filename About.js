
function About() {
  const [openCat, setOpenCat] = React.useState(null);

  const skillsData = {
    "💻 Front-End Development": [
      { name: "HTML5", icon: "/image/html.png" },
      { name: "CSS3 / TailwindCSS", icon: "/image/css-3.png" },
      { name: "JavaScript (ES6+)", icon: "/image/javascript.png" },
      { name: "React.js", icon: "/image/atom.png" },
      { name: "Bootstrap", icon: "/image/bootstrap.png"},
      { name: "Git & GitHub", icon: "/image/github.png" },
    ],
    "🎨 UI/UX Design": [
      { name: "Figma", icon: "/image/figma.png" },
      { name: "Canva", icon: "/image/palette.png" },
      { name: "Photoshop", icon: "/image/photoshop.png" },
    ],
    "🛠 IT Support & Tools": [
      { name: "Windows OS Administration", icon: "/image/windows.png" },
      { name: "Networking Fundamentals", icon: "/image/web.png" },
      { name: "Microsoft Office", icon: "/image/office.png" },
      { name: "Basic Cybersecurity", icon: "/image/cyber-security.png" },
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 bg-transparent text-white font-poppins"
    >
      {/* Left: Profile Image */}
      <div className="flex-1 flex justify-center mb-10 lg:mb-0">
        <img
          src="/image/21-11858-380.png"
          alt="Balty"
          className="w-64 lg:w-80 rounded-2xl shadow-lg border border-white/10 glow-pulse"
        />
      </div>

      {/* Right: Text + Category Buttons */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight glow-text">
          About <span className="text-[#536983]">Me</span>
        </h2>
        <p className="mt-4 text-base lg:text-lg text-gray-300 leading-relaxed">
          I’m an IT professional focused on{" "}
          <span className="text-[#536983]">UI/UX</span>,{" "}
          <span className="text-[#536983]">Front-End</span>, and{" "}
          <span className="text-[#536983]">IT Support</span>.  I enjoy creating
          clean, intuitive, and user-friendly digital experiences that not only
          look great but also work seamlessly.
        </p>

          <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
          My goal is to merge creativity with technical expertise to craft
          designs and applications that make a real impact. I thrive in solving
          problems, collaborating with teams, and continuously learning new
          technologies to stay ahead in this fast-paced industry.
        </p>

        {/* Category Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {Object.keys(skillsData).map((cat) => (
            <div key={cat} className="relative group">
              <button
                onClick={() => setOpenCat(cat)}
                className="px-4 py-2.5 text-sm rounded-xl bg-[#536983]/60 border border-white/20 hover:bg-[#536983]/80 hover:shadow-[0_0_15px_#536983] transition"
              >
                {cat}
              </button>

              {/* Tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-black/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                View Skills for {cat.replace(/^[^\w]+/, "")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {openCat && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl mx-4 transform scale-95 animate-[scaleIn_0.25s_ease-out]"
            style={{
              animationName:
                "@keyframes scaleIn { from { transform: scale(0.95); } to { transform: scale(1); } }",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="text-lg font-semibold glow-text">{openCat}</h3>
              <button
                onClick={() => setOpenCat(null)}
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Close"
                title="Close"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

           {/* Skills Grid */}
<div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {skillsData[openCat].map((s, i) => (
    <div
      key={i}
      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-[#536983] hover:shadow-[0_0_15px_#536983] transition-all duration-300 "
    >
      <img
        src={s.icon}
        alt={s.name}
        className="w-8 h-8 object-contain"
      />
      <span className="text-sm">{s.name}</span>
    </div>
  ))}
</div>


            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setOpenCat(null)}
                className="px-4 py-2 text-sm rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:shadow-[0_0_12px_#536983] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


function About() {
  const [openCat, setOpenCat] = React.useState(null);

  const skillsData = {
    "💻 Front-End Development": [
      { name: "HTML5", icon: "/image/html.png" },
      { name: "CSS3 / TailwindCSS", icon: "/image/css-3.png" },
      { name: "JavaScript (ES6+)", icon: "/image/javascript.png" },
      { name: "React.js", icon: "/image/atom.png" },
      { name: "Bootstrap", icon: "/image/bootstrap.png"},
      { name: "Git & GitHub", icon: "/image/github.png" },
    ],
    "🎨 UI/UX Design": [
      { name: "Figma", icon: "/image/figma.png" },
      { name: "Canva", icon: "/image/palette.png" },
      { name: "Photoshop", icon: "/image/photoshop.png" },
    ],
    "🛠 IT Support & Tools": [
      { name: "Windows OS Administration", icon: "/image/windows.png" },
      { name: "Networking Fundamentals", icon: "/image/web.png" },
      { name: "Microsoft Office", icon: "/image/office.png" },
      { name: "Basic Cybersecurity", icon: "/image/cyber-security.png" },
    ],
  };

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 lg:px-20 bg-transparent text-white font-poppins"
    >
      {/* Left: Profile Image */}
      <div className="flex-1 flex justify-center mb-10 lg:mb-0">
        <img
          src="/image/21-11858-380.png"
          alt="Balty"
          className="w-64 lg:w-80 rounded-2xl shadow-lg border border-white/10 glow-pulse"
        />
      </div>

      {/* Right: Text + Category Buttons */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight glow-text">
          About <span className="text-[#536983]">Me</span>
        </h2>
        <p className="mt-4 text-base lg:text-lg text-gray-300 leading-relaxed">
          I’m an IT professional focused on{" "}
          <span className="text-[#536983]">UI/UX</span>,{" "}
          <span className="text-[#536983]">Front-End</span>, and{" "}
          <span className="text-[#536983]">IT Support</span>.  I enjoy creating
          clean, intuitive, and user-friendly digital experiences that not only
          look great but also work seamlessly.
        </p>

          <p className="text-sm lg:text-base text-gray-400 leading-relaxed">
          My goal is to merge creativity with technical expertise to craft
          designs and applications that make a real impact. I thrive in solving
          problems, collaborating with teams, and continuously learning new
          technologies to stay ahead in this fast-paced industry.
        </p>

        {/* Category Buttons */}
        <div className="mt-6 flex flex-wrap gap-3">
          {Object.keys(skillsData).map((cat) => (
            <div key={cat} className="relative group">
              <button
                onClick={() => setOpenCat(cat)}
                className="px-4 py-2.5 text-sm rounded-xl bg-[#536983]/60 border border-white/20 hover:bg-[#536983]/80 hover:shadow-[0_0_15px_#536983] transition"
              >
                {cat}
              </button>

              {/* Tooltip */}
              <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1 text-xs bg-black/80 text-white rounded-lg opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                View Skills for {cat.replace(/^[^\w]+/, "")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {openCat && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center">
          <div
            className="bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl w-full max-w-3xl mx-4 transform scale-95 animate-[scaleIn_0.25s_ease-out]"
            style={{
              animationName:
                "@keyframes scaleIn { from { transform: scale(0.95); } to { transform: scale(1); } }",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
              <h3 className="text-lg font-semibold glow-text">{openCat}</h3>
              <button
                onClick={() => setOpenCat(null)}
                className="p-2 rounded-lg hover:bg-white/10 transition"
                aria-label="Close"
                title="Close"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" d="M6 6l12 12M18 6l-12 12" />
                </svg>
              </button>
            </div>

           {/* Skills Grid */}
<div className="p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
  {skillsData[openCat].map((s, i) => (
    <div
      key={i}
      className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-3 hover:border-[#536983] hover:shadow-[0_0_15px_#536983] transition-all duration-300 "
    >
      <img
        src={s.icon}
        alt={s.name}
        className="w-8 h-8 object-contain"
      />
      <span className="text-sm">{s.name}</span>
    </div>
  ))}
</div>


            {/* Footer */}
            <div className="px-5 py-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setOpenCat(null)}
                className="px-4 py-2 text-sm rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:shadow-[0_0_12px_#536983] transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

