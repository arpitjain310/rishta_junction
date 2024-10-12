import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './login.css';
import cross from '../../assets/cross.png';

const Login = ({ onClose }) => {
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
        // Login with email and password
        const response = await axios.post("http://62.72.59.161/api/login", {
          email,
          password,
        });
      
        if (response.status === 200) {
          // Redirect to the homepage on successful login
          navigate("/");
        } else if (response.status === 400){
          setError(response.data.message)
          // setError("Login failed. Please check your credentials.");
        }

      } else {
        // Send mobile number to backend to generate OTP
        const response = await axios.post("http://62.72.59.161/api/login/send_otp", {
          mobile_number: mobile.toString(),
        });

        if (response.status === 200) {
          // OTP has been sent, ask user to input OTP
          setOtpSent(true);
        } else {
          setError("Failed to send OTP. Please try again.");
        }
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data.message)
      // setError("An error occurred. Please try again.");
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Verify OTP from backend
      const response = await axios.post("http://62.72.59.161/api/login/verify_otp", {
        mobile,
        otp,
      });

      if (response.status===200) {
        // Redirect to the homepage on successful OTP verification
        navigate("/");
      } else if(response.status === 400){
        setError(response.data.message)
        setOtpSent(false); // Reset OTP flow if failed
      }
    } catch (err) {
      setError(err.response.data.message);
      setError("An error occurred. Please try again.");
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