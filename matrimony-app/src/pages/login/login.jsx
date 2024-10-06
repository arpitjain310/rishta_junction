import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setOtpSent(true);
      // Send email, password, and mobile to backend to generate OTP
      const response = await axios.post("/api/login", {
        email,
        password,
        mobile,
      });

      if (response.data.success) {
        // OTP has been sent, ask user to input OTP
        setOtpSent(true);
      } else {
        setError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Verify OTP from backend
      const response = await axios.post("/api/verify-otp", {
        email,
        otp,
      });

      if (response.data.success) {
        // Redirect to the homepage on successful OTP verification
        navigate("/");
      } else {
        setError("Invalid OTP. Please try again.");
        setOtpSent(false); // Reset OTP flow if failed
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>

      {otpSent ? (
        <form onSubmit={handleOtpVerification}>
          <div>
            <label>Enter OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verify OTP</button>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <div>
            <label>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label>Mobile Number</label>
            <input
              type="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <button type="submit">Send OTP</button>
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
