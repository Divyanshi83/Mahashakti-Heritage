import "./ContactUs.css";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

function ContactUs() {
  return (
    <section className="contact">

      <div className="contact-heading">
        <span>✦ CONTACT US</span>
        <h2>Let's Connect</h2>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-box">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Address</h3>
              <p>Jodhpur, Rajasthan, India</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 7851963016</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>info@mahashaktiheritage.com</p>
            </div>
          </div>

          <div className="info-box">
            <FaWhatsapp className="info-icon" />
            <div>
              <h3>WhatsApp</h3>
              <p>Chat With Us</p>
            </div>
          </div>

          <div className="info-box">
            <FaInstagram className="info-icon" />
            <div>
              <h3>Instagram</h3>
              <p>MAHA_SHAKTITEXTILE</p>
            </div>
          </div>

        </div>

        {/* Right Side */}

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="text"
            placeholder="Phone Number"
          />

          <textarea
            rows="6"
            placeholder="Write your message..."
          ></textarea>

          <button>
            Send Inquiry
          </button>

        </div>

      </div>

    </section>
  );
}

export default ContactUs;