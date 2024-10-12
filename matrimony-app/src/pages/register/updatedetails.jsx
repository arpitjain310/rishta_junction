import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './register.css';

const UpdateDetails = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    heightInFeet: "",
    heightInInches: "",
    height: "",
    complexion: "",
    body_type: "",
    marital_status: "",
    have_children: false,
    diet: "",
    drink: false,
    smoke: "",
    blood_group: "",
    specially_abled: false,
    education: "",
    profession: "",
    religion: "",
    caste: "",
    location_residence: "",
    place_of_birth: "",
    date_of_birth: "",
    manglik: false,
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Convert height from feet and inches to cm
  const convertHeightToCm = (feet, inches) => {
    const totalInches = parseInt(feet || 0) * 12 + parseInt(inches || 0);
    return totalInches * 2.54;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Convert height to cm before submitting
    const convertedHeight = convertHeightToCm(formData.heightInFeet, formData.heightInInches);
    const updatedFormData = {
      ...formData,
      height: convertedHeight,  // Replace height with the cm value
    };
      try {
        const response = await axios.post("http://62.72.59.161/api/register", updatedFormData);
        console.log(response);
        if (response.status === 200) {
          alert("Registration successful");
          navigate("/login");
        } else {
          setError("Registration failed. Please check your input.");
        }
      } catch (err) {
        console.error(err);
        setError(err.response?.data?.message || "An error occurred during registration.");
      }
    };

  return (
    <div className="register-container">
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={formData.username}
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
            pattern="^(?=.*\d)(?=.*[a-zA-Z]).{5,}$"
            title="Password must be at least 5 characters long and contain at least 1 number"
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

        {/* Gender Dropdown */}
        <div>
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Height Fields */}
        <div>
          <label>Height</label>
          <input
            type="number"
            name="heightInFeet"
            value={formData.heightInFeet}
            onChange={handleChange}
            placeholder="Feet"
            required
          />
          <input
            type="number"
            name="heightInInches"
            value={formData.heightInInches}
            onChange={handleChange}
            placeholder="Inches"
            required
          />
        </div>

        {/* Body Type Dropdown */}
        <div>
          <label>Body Type</label>
          <select name="body_type" value={formData.body_type} onChange={handleChange}>
            <option value="">Select Body Type</option>
            <option value="Slim">Slim</option>
            <option value="Athletic">Athletic</option>
            <option value="Average">Average</option>
            <option value="Heavy">Heavy</option>
          </select>
        </div>

        {/* Marital Status Dropdown */}
        <div>
          <label>Marital Status</label>
          <select name="marital_status" value={formData.marital_status} onChange={handleChange} required>
            <option value="">Select Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>

        {formData.marital_status && formData.marital_status !== "Single" && (
          <div>
            <label>Have Children from previous marriage</label>
            <select
              name="have_children"
              value={formData.have_children}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        )}

        {/* Diet Dropdown */}
        <div>
          <label>Diet</label>
          <select name="diet" value={formData.diet} onChange={handleChange} required>
            <option value="">Select Diet</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Smoke Dropdown */}
        <div>
          <label>Smoke</label>
          <select name="smoke" value={formData.smoke} onChange={handleChange}>
            <option value="">Do you Smoke?</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Occasionally">Occasionally</option>
          </select>
        </div>

        {/* Blood Group Dropdown */}
        <div>
          <label>Blood Group</label>
          <select name="blood_group" value={formData.blood_group} onChange={handleChange}>
            <option value="">Select Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Education Dropdown */}
        <div>
          <label>Education</label>
          <select name="education" value={formData.education} onChange={handleChange} required>
            <option value="">Select Education Level</option>
            <option value="High School">High School</option>
            <option value="Bachelor's">Bachelor's</option>
            <option value="Master's">Master's</option>
            <option value="PhD">PhD</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Religion Dropdown */}
        <div>
          <label>Religion</label>
          <select name="religion" value={formData.religion} onChange={handleChange} required>
            <option value="">Select Religion</option>
            <option value="Hindu">Hindu</option>
            <option value="Muslim">Muslim</option>
            <option value="Christian">Christian</option>
            <option value="Sikh">Sikh</option>
            <option value="Jain">Jain</option>
            <option value="Buddhist">Buddhist</option>
            <option value="Jewish">Jewish</option>
            <option value="Zoroastrian">Zoroastrian</option>
            <option value="Bahai">Baha'i</option>
            <option value="Atheist">Atheist</option>
            <option value="Agnostic">Agnostic</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Caste Dropdown */}
        <div>
          <label>Caste</label>
          <select name="caste" value={formData.caste} onChange={handleChange}>
            <option value="">Select Caste</option>
            {formData.religion === "Hindu" && (
              <>
                <option value="Brahmin">Brahmin</option>
                <option value="Kshatriya">Kshatriya</option>
                <option value="Kayastha">Kayastha</option>
                <option value="Maratha">Maratha</option>
                <option value="Jat">Jat</option>
                <option value="Rajput">Rajput</option>
                <option value="Bania">Bania</option>
                <option value="Reddy">Reddy</option>
                <option value="Agarwal">Agarwal</option>
                <option value="Khatri">Khatri</option>
                <option value="Vellalar">Vellalar</option>
                <option value="Nair">Nair</option>
                <option value="Lingayat">Lingayat</option>
                <option value="Yadav">Yadav</option>
                <option value="Kurmi">Kurmi</option>
                <option value="Gujjar">Gujjar</option>
                <option value="Scheduled Caste">Scheduled Caste</option>
                <option value="Scheduled Tribe">Scheduled Tribe</option>
                <option value="Patel">Patel</option>
                <option value="Chettiar">Chettiar</option>
                <option value="Mudaliar">Mudaliar</option>
                <option value="Pillai">Pillai</option>
                <option value="Iyer">Iyer</option>
                <option value="Iyengar">Iyengar</option>
                <option value="Thevar">Thevar</option>
                <option value="Naidu">Naidu</option>
                <option value="Raju">Raju</option>
                <option value="Gounder">Gounder</option>
                <option value="Vanniyar">Vanniyar</option>
                <option value="Nadar">Nadar</option>
                <option value="Kallar">Kallar</option>
                <option value="Marwari">Marwari</option>
                <option value="Sindhi">Sindhi</option>
                <option value="Jatav">Jatav</option>
                <option value="Meena">Meena</option>
                <option value="Maurya">Maurya</option>
                <option value="Saini">Saini</option>
                <option value="Other">Other</option>
              </>
            )}
            {formData.religion === "Muslim" && (
              <>
                <optgroup label="Sunni">
                  <option value="Sunni-Syed">Syed</option>
                  <option value="Sunni-Sheikh">Sheikh</option>
                  <option value="Sunni-Pathan">Pathan</option>
                  <option value="Sunni-Mughal">Mughal</option>
                  <option value="Sunni-Qureshi">Qureshi</option>
                  <option value="Sunni-Ansari">Ansari</option>
                  <option value="Sunni-Malik">Malik</option>
                  <option value="Sunni-Lodhi">Lodhi</option>
                  <option value="Sunni-Chaudhary">Chaudhary</option>
                  <option value="Sunni-Abbasi">Abbasi</option>
                  <option value="Sunni-Rizvi">Rizvi</option>
                  <option value="Sunni-Kazmi">Kazmi</option>
                  <option value="Sunni-Zaidi">Zaidi</option>
                  <option value="Sunni-Farooqui">Farooqui</option>
                  <option value="Sunni-Usmani">Usmani</option>
                  <option value="Sunni-Hashmi">Hashmi</option>
                  <option value="Sunni-Alvi">Alvi</option>
                  <option value="Sunni-Mirza">Mirza</option>
                  <option value="Sunni-Shamsi">Shamsi</option>
                  <option value="Sunni-Bohra">Bohra</option>
                  <option value="Sunni-Khoja">Khoja</option>
                  <option value="Sunni-Meman">Meman</option>
                  <option value="Sunni-Shaikh Siddiqui">Shaikh Siddiqui</option>
                  <option value="Sunni-Nadvi">Nadvi</option>
                  <option value="Sunni-Dehlvi">Dehlvi</option>
                  <option value="Sunni-Naimi">Naimi</option>
                  <option value="Sunni-Khan">Khan</option>
                  <option value="Sunni-Chishti">Chishti</option>
                  <option value="Sunni-Barelvi">Barelvi</option>
                  <option value="Sunni-Pirzada">Pirzada</option>
                  <option value="Sunni-Awan">Awan</option>
                  <option value="Sunni-Ghauri">Ghauri</option>
                  <option value="Sunni-Siddiqui">Siddiqui</option>
                  <option value="Sunni-Salafi">Salafi</option>
                  <option value="Sunni-Niazi">Niazi</option>
                  <option value="Sunni-Jafri">Jafri</option>
                  <option value="Sunni-Samarqandi">Samarqandi</option>
                  <option value="Sunni-Bangash">Bangash</option>
                  <option value="Sunni-Mahdavi">Mahdavi</option>
                  <option value="Sunni-Gujjar">Gujjar</option>
                  <option value="Sunni-Durrani">Durrani</option>
                  <option value="Sunni-Afridi">Afridi</option>
                  <option value="Sunni-Shah">Shah</option>
                  <option value="Sunni-Zuberi">Zuberi</option>
                  <option value="Sunni-Other">Other</option>
                </optgroup>
                <optgroup label="Shia">
                  <option value="Shia-Syed">Syed</option>
                  <option value="Shia-Rizvi">Rizvi</option>
                  <option value="Shia-Kazmi">Kazmi</option>
                  <option value="Shia-Zaidi">Zaidi</option>
                  <option value="Shia-Jafri">Jafri</option>
                  <option value="Shia-Naqvi">Naqvi</option>
                  <option value="Shia-Abidi">Abidi</option>
                  <option value="Shia-Bukhari">Bukhari</option>
                  <option value="Shia-Tabatabai">Tabatabai</option>
                  <option value="Shia-Tirmizi">Tirmizi</option>
                  <option value="Shia-Mousavi">Mousavi</option>
                  <option value="Shia-Qummi">Qummi</option>
                  <option value="Shia-Hashmi">Hashmi</option>
                  <option value="Shia-Shamsi">Shamsi</option>
                  <option value="Shia-Mirza">Mirza</option>
                  <option value="Shia-Alvi">Alvi</option>
                  <option value="Shia-Asadi">Asadi</option>
                  <option value="Shia-Musavi">Musavi</option>
                  <option value="Shia-Najafi">Najafi</option>
                  <option value="Shia-Qazwini">Qazwini</option>
                  <option value="Shia-Shirazi">Shirazi</option>
                  <option value="Shia-Isfahani">Isfahani</option>
                  <option value="Shia-Karbala'i">Karbala'i</option>
                  <option value="Shia-Sistani">Sistani</option>
                  <option value="Shia-Khomeini">Khomeini</option>
                  <option value="Shia-Hakimi">Hakimi</option>
                  <option value="Shia-Sabzwari">Sabzwari</option>
                  <option value="Shia-Aqeel">Aqeel</option>
                  <option value="Shia-Dilkash">Dilkash</option>
                  <option value="Shia-Mutahhari">Mutahhari</option>
                </optgroup>
                <option value="Sufi">Sufi</option>
                <option value="Other">Other</option>
              </>
            )}
            {formData.religion === "Christian" && (
              <>
                <option value="Catholic">Catholic</option>
                <option value="Protestant">Protestant</option>
                <option value="Orthodox">Orthodox</option>
                <option value="Anglican">Anglican</option>
                <option value="Baptist">Baptist</option>
                <option value="Lutheran">Lutheran</option>
                <option value="Methodist">Methodist</option>
                <option value="Pentecostal">Pentecostal</option>
                <option value="Presbyterian">Presbyterian</option>
                <option value="Evangelical">Evangelical</option>
                <option value="Seventh-day Adventist">Seventh-day Adventist</option>
                <option value="Jehovah's Witness">Jehovah's Witness</option>
                <option value="Mormon">Mormon</option>
                <option value="Coptic">Coptic</option>
                <option value="Assyrian">Assyrian</option>
                <option value="Non-denominational">Non-denominational</option>
                <option value="Other Christian">Other Christian</option>              </>
            )}
            {formData.religion === "Sikh" && (
              <>
                <option value="Jatt">Jatt</option>
                <option value="Khatri">Khatri</option>

              </>
            )}

            {formData.religion === "Jain" && (
              <>
                <option value="Digambar">Digambar</option>
                <option value="Shvetambar">Shvetambar</option>
                <option value="Sthanakvasi">Sthanakvasi</option>
                <option value="Terapanthi">Terapanthi</option>
                <option value="Other Jain">Other Jain</option>
              </>
            )}

            {(formData.religion === "Jain" ||
              formData.religion === "Buddhist" ||
              formData.religion === "Jewish" ||
              formData.religion === "Zoroastrian" ||
              formData.religion === "Bahai" ||
              formData.religion === "Atheist" ||
              formData.religion === "Agnostic" ||
              formData.religion === "Other") && (
                <option value="Not Applicable">Not Applicable</option>
              )}
          </select>
        </div>
        
          {/* Manglik (only for Hindu) */}
          {formData.religion === "Hindu" && (
          
          <div>
            <label>Manglik</label>
            <select
              name="manglik"
              value={formData.manglik}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        )}
        
        {/* Location of Residence */}
        <div>
          <label>Location of Residence</label>
          <input
            type="text"
            name="location_residence"
            value={formData.location_residence}
            onChange={handleChange}
            required
          />
        </div>

        {/* Place of Birth */}
        <div>
          <label>Place of Birth</label>
          <input
            type="text"
            name="place_of_birth"
            value={formData.place_of_birth}
            onChange={handleChange}
            required
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="date_of_birth"
            value={formData.date_of_birth}
            onChange={handleChange}
            required
          />
        </div>

      

        <button type="submit" className="register-btn">Register</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default UpdateDetails;
