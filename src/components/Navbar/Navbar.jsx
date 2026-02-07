import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/favicon.png" alt="College Logo" />
        <span>Ajay Binay Institute of Technology</span>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="/">Home</a></li>

        <li
          onMouseEnter={() => toggleDropdown("about")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          About Us ▾
          {dropdown === "about" && (
            <ul className="dropdown">
              <li><a href="/vision">Vision & Mission</a></li>
              <li><a href="/administration">Administration</a></li>
              <li><a href="/accreditation">Accreditation</a></li>
            </ul>
          )}
        </li>

        <li
          onMouseEnter={() => toggleDropdown("academics")}
          onMouseLeave={() => toggleDropdown(null)}
        >
          Academics ▾
          {dropdown === "academics" && (
            <ul className="dropdown">
              <li><a href="/departments">Departments</a></li>
              <li><a href="/programs">Programs</a></li>
              <li><a href="/calendar">Academic Calendar</a></li>
            </ul>
          )}
        </li>

        <li><a href="/admissions">Admissions</a></li>
        <li><a href="/research">Research</a></li>
        <li><a href="/placements">Placements</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
