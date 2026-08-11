import "./Login.css";
import loginImage from "../assets/loginn.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">

      {/* Left Side */}

      <div className="login-left">
        <img
          src={loginImage}
          alt="Mahashakti Heritage Login"
        />
      </div>

      {/* Right Side */}

      <div className="login-right">

        <div className="login-card">

          {/* Logo */}

          <img
            src={logo}
            alt="Mahashakti Heritage"
            className="login-logo"
          />

          {/* Heading */}

          <h1>Welcome Back</h1>

          <p>
            Sign in to continue your royal shopping experience.
          </p>

          {/* Email / Mobile */}

          <div className="input-group">

            <label>Email or Mobile Number</label>

            <input
              type="text"
              placeholder="Enter your email or mobile number"
            />

          </div>

          {/* Password */}

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
            />

          </div>

          {/* Forgot */}

          <Link to="/forgot-password" className="forgot-password">
             Forgot Password?
            </Link>

          {/* Login */}

          <button className="login-btn">
            Login
          </button>

          {/* Divider */}

          <div className="divider">
            <span>OR</span>
          </div>

          {/* Signup */}

          <div className="signup-link">

            Don't have an account?

            <Link to="/signup">
              <span>Create Account</span>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;