import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { useState } from "react";

function Navbar() {
  const [menuClick, setMenuClick] = useState(false);

  const handleMenuClick = () => {
    setMenuClick(!menuClick);
  };
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={Logo} alt="company-name" />
          </Link>
        </div>
        <ul className={menuClick ? "list-menu active" : "list-menu"}>
          <li className="list-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="list-item">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="list-item">
            <Link to="/faq" className="nav-link">
              Faq
            </Link>
          </li>
          <li className="list-item">
            <Link to="/Contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <div className="menu-bar" onClick={handleMenuClick}>
          {menuClick ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
