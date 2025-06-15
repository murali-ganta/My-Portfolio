import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      href: "https://github.com/murali-ganta",
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/murali-ganta",
      icon: <FaLinkedin className="w-5 h-5" />,
      label: "LinkedIn",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = active;

      for (let i = 0; i < navLinks.length; i++) {
        const section = document.querySelector(navLinks[i].href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            currentSection = navLinks[i].href;
            break;
          }
        }
      }

      if (currentSection !== active) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active, navLinks]);

  const handleLinkClick = (href) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50
      bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500
      text-white
      transition-all duration-300 ease-in-out
    "
    >
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-3 flex items-center justify-between">
        <div className="font-bold text-white">
          <h1 className="initials-logo">MG</h1>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-8 font-medium nav-links items-center">
          {navLinks.map(({ label, href }) => (
            <li key={href} className="nav-item">
              <a
                href={href}
                onClick={() => handleLinkClick(href)}
                className={`hover:text-white relative py-1 transition ${
                  active === href
                    ? "font-bold after:block after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-white"
                    : "text-white/80"
                }`}
              >
                {label}
              </a>
            </li>
          ))}

          {/* Social Icons */}
          {socialLinks.map(({ href, icon, label }) => (
            <li key={label} className="ml-4">
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-white hover:text-gray-200 transition"
              >
                {icon}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-white"
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 shadow-md text-white">
          <ul className="flex flex-col space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => handleLinkClick(href)}
                  className={`block hover:text-white py-1 ${
                    active === href
                      ? "border-b-2 border-white font-bold"
                      : "text-white/80"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}

            {/* Social Icons */}
            <li className="flex space-x-6 mt-4 justify-center">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white hover:text-gray-200 transition"
                >
                  {icon}
                </a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
