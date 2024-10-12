import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css';
import back from './../assets/back.svg';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    looking_for: "",
    date_of_birth: "",
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
    console.log(formData);
    try {
      const response = await axios.post("http://62.72.59.161/api/register", formData);
      
      if (response.status === 200) {
        setStep(3); // Move to OTP verification step
      } else if (response.status === 400){
        setError(response.data.message)
      }
    } catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }
  };

  const handleOtpVerification = async () => {
    // setOtpData({ ...otpData, isVerified: true });
    
    try {
      const response = await axios.post("http://62.72.59.161/api/verify_otp_and_register", {
        mobile_number: formData.mobile_number.toString(),
        otp: otpData.otp.toString(),
      });
      
      if (response.status === 201) {
        setOtpData({ ...otpData, isVerified: true });
      } else {
        setOtpData({ ...otpData, verificationError: "OTP verification failed. Please try again." });
      }
    } catch (err) {
      console.error(err);
      setOtpData({ ...otpData, verificationError: "An error occurred during verification. Please try again." });
    }
  };

  return (
    <div className="register-container">
      <div className="register-container-heading">
        <h2>Create your matrimony account</h2>
      </div>
      
      {step === 2 && (
        <div className="registerBackBtncontainer" onClick={handleBack}>
        <img src={back}  className="registerBackBtn" alt="" />
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
              <button className="happyJourney" onClick={() => window.location.href = '/'}>Start your happy journey now</button>
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
              <button onClick={handleOtpVerification}>Verify OTP</button>
              {otpData.verificationError && <p className="error-text">{otpData.verificationError}</p>}
            </>
          )}
        </div>
      )}

      {step !== 3 && (
        <form onSubmit={step === 1 ? handleNext : handleSubmit}>
          {step === 1 ? (
            <>
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
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  pattern="^(?=.*\d)(?=.*[a-zA-Z]).{5,}$"
                  title="Password must be at least 5 characters long and contain at least 1 number"
                />
              </div>
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ width: '48%' }}>
                  <label>Gender</label>
                  <select name="gender" value={formData.gender} onChange={handleChange} required>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div style={{ width: '48%' }}>
                  <label>Date of Birth</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    value={formData.date_of_birth}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="register-btn">Register</button>
            </>
          )}
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;