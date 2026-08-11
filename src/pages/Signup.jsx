import "./Signup.css";
import signupImage from "../assets/loginn.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup-page">

      {/* Left Image */}

      <div className="signup-left">
        <img src={signupImage} alt="Royal Heritage" />
      </div>

      {/* Right Side */}

      <div className="signup-right">

        <div className="signup-card"> 

          <img
            src={logo}
            alt="Mahashakti Heritage"
            className="signup-logo"
          />

          <h1>Create Your Account</h1>

          <p>
            Join Mahashakti Heritage and experience timeless royal elegance.
          </p>

          {/* Full Name */}

          <div className="input-group">

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />

          </div>

          {/* Email */}

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

          </div>

          {/* Mobile */}

          <div className="input-group">

            <label>Mobile Number</label>

            <input
              type="tel"
              placeholder="Enter your mobile number"
            />

          </div>

          {/* Password */}

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Create a password"
            />

          </div>

          {/* Confirm Password */}

          <div className="input-group">

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm your password"
            />

          </div>

          <button className="signup-btn">
            Create Account
          </button>

          <div className="divider">
            <span>OR</span>
          </div>

          <div className="login-link">

            Already have an account?

            <Link to="/login">
              <span> Login</span>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;