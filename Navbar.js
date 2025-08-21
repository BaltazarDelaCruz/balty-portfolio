function Navbar() {
  const handleScrollClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => handleScrollClick("home")}
        >
          Balty.
        </div>

        {/* Resume Button with Glow */}
        <a
          href="https://www.canva.com/design/DAGv1zjLLU4/LMfKAsy4pjrsBb8TbGGA3A/view?utm_content=DAGv1zjLLU4&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h14a6242056"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#536983] text-white px-4 py-2 rounded-lg text-sm font-medium transition duration-300 shadow-md hover:shadow-[0_0_20px_#536983]"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
