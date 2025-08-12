import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          MyPortfolio
        </a>

        {/* Menu Items */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li><a href="#education" onClick={closeMenu}>Education</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>

        {/* Hamburger Icon */}
        <div className="nav-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
