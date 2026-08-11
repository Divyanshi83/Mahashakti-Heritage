import "./PasswordSuccess.css";
import successImage from "../assets/loginn.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

function PasswordSuccess() {
  return (
    <div className="success-page">

      {/* Left Image */}

      <div className="success-left">
        <img src={successImage} alt="Mahashakti Heritage" />
      </div>

      {/* Right Side */}

      <div className="success-right">

        <div className="success-card">

          <img
            src={logo}
            alt="Mahashakti Heritage"
            className="success-logo"
          />

          <FaCheckCircle className="success-icon" />

          <h1>Password Updated!</h1>

          <p>
            Your password has been updated successfully.
            You can now login with your new password.
          </p>

          <Link to="/login">
            <button className="success-btn">
              Go To Login
            </button>
          </Link>

        </div>

      </div>

    </div>
  );
}

export default PasswordSuccess;