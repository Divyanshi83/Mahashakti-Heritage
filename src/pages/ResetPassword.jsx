import "./ResetPassword.css";
import resetImage from "../assets/loginn.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="reset-page">

      {/* Left Image */}
      <div className="reset-left">
        <img src={resetImage} alt="Mahashakti Heritage" />
      </div>

      {/* Right Side */}
      <div className="reset-right">

        <div className="reset-card">

          <img
            src={logo}
            alt="Mahashakti Heritage"
            className="reset-logo"
          />

          <h1>Create New Password</h1>

          <p>
            Your new password must be different from your previous password.
          </p>

          <div className="input-group">

            <label>New Password</label>

            <input
              type="password"
              placeholder="Enter new password"
            />

          </div>

          <div className="input-group">

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm new password"
            />

          </div>

          <Link to="/password-success">
            <button className="reset-btn">
        Update Password
            </button>
        </Link>

          <div className="back-login">
            <Link to="/login">
              Back to Login
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ResetPassword;