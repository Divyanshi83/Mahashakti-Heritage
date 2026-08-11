import "./ForgotPassword.css";
import forgotImage from "../assets/loginn.png"; // Same mannequin image
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="forgot-page">

      {/* Left Image */}
      <div className="forgot-left">
        <img src={forgotImage} alt="Mahashakti Heritage" />
      </div>

      {/* Right Side */}
      <div className="forgot-right">

        <div className="forgot-card">

          <img
            src={logo}
            alt="Logo"
            className="forgot-logo"
          />

          <h1>Forgot Password</h1>

          <p>
            Enter your registered email address. We'll send you an OTP to reset your password.
          </p>

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          <button className="forgot-btn">
            Send OTP
          </button>

          <div className="back-login">
            Remember your password?
            <Link to="/login">
              <span> Login</span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ForgotPassword;