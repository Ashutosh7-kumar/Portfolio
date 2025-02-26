import React, { useState, useEffect } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (sectionId) => {
    setIsOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['Hero', 'Skills', 'Resume', 'Project', 'Contact'];
      let currentSection = '';
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= window.innerHeight / 2) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">PORTFOLIO</div>

      {/* Hamburger Button */}
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>

      {/* Navbar Links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={() => handleNavigation("Hero")} className={activeSection === 'Hero' ? 'active' : ''}>Home</a></li>
        <li><a href="#services" onClick={() => handleNavigation("Skills")} className={activeSection === 'Skills' ? 'active' : ''}>Skills</a></li>
        <li><a href="#portfolio" onClick={() => handleNavigation("Resume")} className={activeSection === 'Resume' ? 'active' : ''}>Resume</a></li>
        <li><a href="#projects" onClick={() => handleNavigation("Project")} className={activeSection === 'Project' ? 'active' : ''}>Projects</a></li>
        <li><a href="#contact" onClick={() => handleNavigation("Contact")} className={activeSection === 'Contact' ? 'active' : ''}>Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
