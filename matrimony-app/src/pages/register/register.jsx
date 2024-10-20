import React, { useState } from "react";
import { userServices } from "../../services/userServices";
import './register.css';
import back from '../../assets/back.svg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    looking_for: "",
    mobile_number: "",
  });
  const [otpData, setOtpData] = useState({
    otp: "",
    isVerified: false,
    verificationError: "",
  });

  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await userServices.register(formData);
      setStep(3);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "An error occurred. Please try again.");
    }
  };

  const handleOtpVerification = async () => {
    try {
      const response = await userServices.verifyOtpAndRegister(formData.mobile_number, otpData.otp);
      setOtpData({ ...otpData, isVerified: true });
      
      // Store user id and access token in localStorage
      localStorage.setItem('user_id', response.user_id);
      localStorage.setItem('accessToken', response.access_token);
      window.location.href = '/profile';
    } catch (err) {
      console.error(err);
      setOtpData({ ...otpData, verificationError: "An error occurred during verification. Please try again." });
    }
  };

  const generatePassword = () => {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    let password = ''
    for (let i = 0; i < 7; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    if (!/[a-zA-Z]/.test(password)) {
      password = 'a' + password.slice(1)
    }
    if (!/\d/.test(password)) {
      password = password.slice(0, -1) + '1'
    }
    handleChange({ target: { name: 'password', value: password } })
  };

  return (
    <div className="register-container">
      <div className="register-container-heading">
        <h2>Create your matrimony account</h2>
      </div>

      {step === 2 && (
        <div className="registerBackBtncontainer" onClick={handleBack}>
          <img src={back} className="registerBackBtn" alt="" />
          <div className="registerBackText">
            Back
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="otp-verification">
          {otpData.isVerified ? (
            <div className="otpverifiedsection">
              <p>OTP verified successfully!</p>
              <p>Redirecting to home page...</p>
            </div>
          ) : (
            <>
              <h3>Enter OTP sent to your mobile</h3>
              <input
                type="text"
                value={otpData.otp}
                onChange={(e) => setOtpData({ ...otpData, otp: e.target.value })}
                placeholder="Enter OTP"
              />
              <button className="submit-otp-btn" onClick={handleOtpVerification}>Verify OTP</button>
              {otpData.verificationError && <p className="error-text">{otpData.verificationError}</p>}
            </>
          )}
        </div>
      )}

      {step !== 3 && (
        <form onSubmit={step === 1 ? handleNext : handleSubmit}>
          {step === 1 ? (
            <>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <label>Looking a match for</label>
                  <select name="looking_for" value={formData.looking_for} onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="Myself">Myself</option>
                    <option value="Brother">Brother</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Son">Son</option>
                    <option value="Sister">Sister</option>
                    <option value="Friend">Friend</option>
                  </select>
                </div>
                <div style={{ width: '48%' }}>
                  <label>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label>Mobile</label>
                <input
                  type="text"
                  name="mobile_number"
                  value={formData.mobile_number}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="next-btn">Next</button>
            </>
          ) : (
            <>
              <div>
                <label>Password</label>
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  pattern="^(?=.*\d)(?=.*[a-zA-Z]).{5,}$"
                  title="Password must be at least 5 characters long and contain at least 1 number"
                />
              </div>
              <div className="submitPwdBtn">
                <button type="button" className="generatePwdButton" onClick={generatePassword}>Generate a Password</button>

                <button type="submit" className="register-btn">Register</button>
              </div>

            </>
          )}
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;