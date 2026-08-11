import "./AdminLogin.css";
import adminImage from "../assets/loginn.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function AdminLogin() {
  return (
    <div className="admin-page">

      {/* Left Image */}
      <div className="admin-left">
        <img src={adminImage} alt="Mahashakti Heritage" />
      </div>

      {/* Right Side */}
      <div className="admin-right">

        <div className="admin-card">

          <img
            src={logo}
            alt="Mahashakti Heritage"
            className="admin-logo"
          />

          <h1>Admin Login</h1>

          <p>
            Secure access to Mahashakti Heritage Admin Panel.
          </p>

          {/* Email */}

          <div className="input-group">

            <label>Admin Email</label>

            <input
              type="email"
              placeholder="Enter admin email"
            />

          </div>

          {/* Password */}

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
            />

          </div>

          <div className="forgot-password">
            Forgot Password?
          </div>

          <button className="admin-btn">
            Login
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="login-link">
            Back to
            <Link to="/login">
              <span> Customer Login</span>
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;