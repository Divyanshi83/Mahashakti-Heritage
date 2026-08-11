import "./VerifyOTP.css";
import otpImage from "../assets/loginn.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function VerifyOTP() {
  return (
    <div className="otp-page">

      {/* Left Image */}
      <div className="otp-left">
        <img src={otpImage} alt="Mahashakti Heritage" />
      </div>

      {/* Right Side */}
      <div className="otp-right">

        <div className="otp-card">

          <img
            src={logo}
            alt="Mahashakti Heritage"
            className="otp-logo"
          />

          <h1>Verify OTP</h1>

          <p>
            Enter the 6-digit OTP sent to your registered email.
          </p>

          <div className="otp-boxes">

            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />
            <input type="text" maxLength="1" />

          </div>

          <Link to="/reset-password">
    <button className="otp-btn">
        Verify OTP
    </button>
</Link>

          <div className="resend">
            Didn't receive OTP?
            <span> Resend OTP</span>
          </div>

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

export default VerifyOTP;