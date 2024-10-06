import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    religion: "",
    caste: "",
    income: "",
    education: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // API call to register the user
      const response = await axios.post("/api/register", formData);

      if (response.data.success) {
        // Redirect to login on successful registration
        navigate("/login");
      } else {
        setError("Registration failed. Please check your input.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>

      <form onSubmit={handleSubmit}>
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
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Religion</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Caste</label>
          <input
            type="text"
            name="caste"
            value={formData.caste}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Income</label>
          <input
            type="text"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Education</label>
          <input
            type="text"
            name="education"
            value={formData.education}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
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

        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
