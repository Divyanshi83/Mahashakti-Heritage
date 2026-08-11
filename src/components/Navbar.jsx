import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">

      <div className="logo">
        <img src={logo} alt="Mahashakti Heritage" />
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Collections</li>
        <li>Custom Poshak</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <Link to="/login">
        <button className="navbar-login-btn">
          Login
        </button>
      </Link>

    </header>
  );
}

export default Navbar;