import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [nav, setNav] = useState(false);

  const toggleMenu = () => {
    setNav(!nav);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 bg-black text-white fixed w-full top-0 z-50">

      {/* Logo */}
      <h1 className="text-2xl font-bold cursor-pointer">
        My Portfolio
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8">

        <li>
          <Link to="about" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            About
          </Link>
        </li>

        <li>
          <Link to="skills" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Skills
          </Link>
        </li>

        <li>
          <Link to="projects" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Projects
          </Link>
        </li>

        <li>
          <Link to="certificates" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Certificates
          </Link>
        </li>

        <li>
          <Link to="certifications" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Certifications
          </Link>
        </li>

        <li>
          <Link to="achievements" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Achievements
          </Link>
        </li>

        <li>
          <Link to="resume" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Resume
          </Link>
        </li>

        <li>
          <Link to="contact" smooth duration={500} offset={-80} spy activeClass="text-blue-400"
            className="cursor-pointer hover:text-blue-400 transition">
            Contact
          </Link>
        </li>

      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer z-50" onClick={toggleMenu}>
        {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      {/* Mobile Menu */}
      <ul className={
        nav
          ? "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center gap-10 text-2xl"
          : "hidden"
      }>

        <li>
          <Link onClick={closeMenu} to="about" smooth duration={500}>About</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="skills" smooth duration={500}>Skills</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="projects" smooth duration={500}>Projects</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="certificates" smooth duration={500}>Certificates</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="certifications" smooth duration={500}>Certifications</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="achievements" smooth duration={500}>Achievements</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="resume" smooth duration={500}>Resume</Link>
        </li>

        <li>
          <Link onClick={closeMenu} to="contact" smooth duration={500}>Contact</Link>
        </li>

      </ul>

    </nav>
  );
}

export default Navbar;