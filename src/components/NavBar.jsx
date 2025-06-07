import "../styles/NavBar.css";
import hamburgerMenu from "../assets/icon-hamburger.svg";
import iconClose from "../assets/icon-close.svg";
import { useState, useEffect } from "react";

function NavBar({ setActiveSection }) {
  const [isClickedHamburger, setIsClickedHamburger] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handlerClickHamburger = () => {
    setIsClickedHamburger(!isClickedHamburger);
  };

  const handlerSection = (section) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsClickedHamburger(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`nav-bar ${isClickedHamburger ? "nav-bar-active" : ""} ${
        scrolled ? "nav-bar-color" : ""
      }`}
    >
      <div className="nav-bar-logo-container">
        <span>Frontend Developer</span>
      </div>

      <div className="nav-bar-hamburger-container">
        <img
          className={
            isClickedHamburger ? "nav-bar-close-icon" : "nav-bar-hamburger"
          }
          onClick={handlerClickHamburger}
          src={isClickedHamburger ? iconClose : hamburgerMenu}
          alt="menu"
        />
      </div>

      <div
        className={
          isClickedHamburger
            ? "nav-bar-list-container-active"
            : "nav-bar-list-container"
        }
      >
        <ul>
          {["home", "about", "skills", "projects", "contact"].map((section) => (
            <li key={section}>
              <a onClick={() => handlerSection(section)}>
                {section.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
