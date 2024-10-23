import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userServices } from "../../services/userServices";
import axios from "axios";
import './login.css';
import cross from '../../assets/cross.png';

const Login = ({ onClose, onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [error, setError] = useState("");
  const [loginMethod, setLoginMethod] = useState("email"); // New state for login method

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (loginMethod === "email") {
        const data = await userServices.login(email, password);
        localStorage.setItem("accessToken", data.access_token);
        localStorage.setItem("user_id", data.user_id);
        onLoginSuccess();
        onClose();
        window.location.href = '/profile';
        
      } else {
        const data = await userServices.sendLoginOtp(mobile);
        setOtpSent(true);
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = await userServices.verifyLoginOtp(mobile, otp);
      localStorage.setItem("accessToken", data.access_token);
      localStorage.setItem("user_id", data.user_id);
      onLoginSuccess();
      onClose();
      window.location.href = '/profile';
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred. Please try again.");
      setOtpSent(false);
    }
  };

  return (
    <div className="login-container">
          <div className="login-header">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <h2 style={{ flex: '0 0 85%' }}>Login</h2>
              <img src={cross} alt="Close" className="close-button" onClick={onClose} style={{ flex: '0 0 15%' }} />
            </div>
          </div>
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
        <div>
          <div className="modeSelectorContainer">
            <span onClick={() => setLoginMethod("email")} className='modeSelector'>Login with Email</span>
            <span onClick={() => setLoginMethod("otp")} className='modeSelector'>Login with OTP</span>
          </div>
          <form onSubmit={handleLogin}>
            {loginMethod === "email" ? (
              <>
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
                <button className="forgotPwdBtn" onClick={() => window.location.href = "/passwordreset"}>
                  Forget Password
                </button>
              </>
            ) : (
              <div>
                <label>Mobile Number</label>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
            )}
            <button type="submit">{loginMethod === "email" ? "Login" : "Send OTP"}</button>
          </form>
        </div>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;