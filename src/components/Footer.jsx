import "./Footer.css";

import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}

        <div className="footer-brand">

          <h2>Mahashakti Heritage
            A Brand By Mahashakti Textile
          </h2>

          <p>
            Celebrating the timeless beauty of Rajputi tradition through
            handcrafted poshaks, premium fabrics and royal elegance.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="#">Home</a>
          <a href="#">Collections</a>
          <a href="#">About</a>
          <a href="#">Contact</a>

        </div>

        {/* Collections */}

        <div className="footer-links">

          <h3>Collections</h3>

          <a href="#">Rajputi Poshak</a>
          <a href="#">Fabric</a>
          <a href="#">Transfer Material</a>
          <a href="#">Bridal Poshak</a>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            <FaPhoneAlt className="footer-icon" />
            +91 7851963016
          </p>

          <p>
            <FaEnvelope className="footer-icon" />
            info@mahashaktiheritage.com
          </p>

          <div className="footer-social">

            <FaInstagram />

            <FaWhatsapp />

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Mahashakti Heritage. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;