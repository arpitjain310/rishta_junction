import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { profileServices } from '../../services/profileServices';
import './userprofile.css';

const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        const data = await profileServices.getProfile(userId);
        setProfile(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching profile data');
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = async () => {
    try {
      await profileServices.updateProfile(profile.profile_id, profile);
      alert('Profile updated successfully!');
      window.location.href = '/';
    } catch (err) {
      alert('Error updating profile');
    }
  };

  const handlepicChange = async () => {

  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">

      <div className="profile-picture">
        <img src={profile.profile_picture || 'https://via.placeholder.com/150'} alt="Profile" />
        {/* <input type="file" name="profile_picture" onChange={handlepicChange} accept="image/*" /> */}
      </div>
      

      <h1>User Profile Details</h1>
      <div className="profile-info">
        <h3>Basic Information</h3>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" value={profile.name || ''} onChange={handleInputChange} placeholder="Enter your name" />
        
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" value={profile.email || ''} onChange={handleInputChange} placeholder="Enter your email" />
        
        <label htmlFor="age">Age:</label>
        <input id="age" name="age" value={profile.age || ''} onChange={handleInputChange} placeholder="Enter your age" />
        
        <label htmlFor="gender">Gender:</label>
        <select name="gender" value={profile.gender || ''} onChange={handleInputChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        
        <label htmlFor="height">Height (cm):</label>
        <input id="height" name="height" value={profile.height || ''} onChange={handleInputChange} placeholder="Enter your height in cm" />
        
              <label htmlFor="complexion">Complexion:</label>
              <select name="complexion" value={profile.complexion || ''} onChange={handleInputChange}>
                <option value="">Select Complexion</option>
                <option value="Fair">Fair</option>
                <option value="Light">Light</option>
                <option value="Medium">Medium</option>
                <option value="Olive">Olive</option>
                <option value="Tan">Tan</option>
                <option value="Dark">Dark</option>
              </select>
        
        <label htmlFor="body_type">Body Type:</label>
        <select name="body_type" value={profile.body_type || ''} onChange={handleInputChange}>
          <option value="">Select Body Type</option>
          <option value="Slim">Slim</option>
          <option value="Athletic">Athletic</option>
          <option value="Average">Average</option>
          <option value="Heavy">Heavy</option>
        </select>
        
        <label htmlFor="marital_status">Marital Status:</label>
        <select name="marital_status" value={profile.marital_status || ''} onChange={handleInputChange} required>
          <option value="">Select Marital Status</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
          <option value="Divorced">Divorced</option>
          <option value="Widowed">Widowed</option>
        </select>
        
        {profile.marital_status && profile.marital_status !== "Single" && (
         <>
        <label htmlFor="have_children">Have Children:</label>
        <select name="have_children" value={profile.have_children || ''} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        </> 
          
        )}
        
        <label htmlFor="diet">Diet:</label>
        <select name="diet" value={profile.diet || ''} onChange={handleInputChange} required>
          <option value="">Select Diet</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Non-Vegetarian">Non-Vegetarian</option>
          <option value="Vegan">Vegan</option>
          <option value="Other">Other</option>
        </select>
        
        <label htmlFor="drink">Drink:</label>
        <select name="drink" value={profile.drink || ''} onChange={handleInputChange}>
          <option value="">Do you Drink?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        
        <label htmlFor="smoke">Smoke:</label>
        <select name="smoke" value={profile.smoke || ''} onChange={handleInputChange}>
          <option value="">Do you Smoke?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
          <option value="Occasionally">Occasionally</option>
        </select>
        
        <label htmlFor="blood_group">Blood Group:</label>
        <select name="blood_group" value={profile.blood_group || ''} onChange={handleInputChange}>
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
        
        <label htmlFor="specially_abled">Specially Abled:</label>
        <select name="specially_abled" value={profile.specially_abled || ''} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>

        <h3>Education & Profession</h3>
        <label htmlFor="education">Education:</label>
        <select name="education" value={profile.education || ''} onChange={handleInputChange} required>
          <option value="">Select Education Level</option>
          <option value="High School">High School</option>
          <option value="Bachelor's">Bachelor's</option>
          <option value="Master's">Master's</option>
          <option value="PhD">PhD</option>
          <option value="Other">Other</option>
        </select>
        
        <label htmlFor="profession">Profession:</label>
        <input id="profession" name="profession" value={profile.profession || ''} onChange={handleInputChange} placeholder="Enter your profession" />
        
        <label htmlFor="income">Income:</label>
        <input id="income" name="income" value={profile.income || ''} onChange={handleInputChange} placeholder="Enter your income" />

        <h3>Religion & Caste</h3>
        <label htmlFor="religion">Religion:</label>
        <select name="religion" value={profile.religion || ''} onChange={handleInputChange} required>
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
        
        
          <label>Caste</label>
          <select name="caste" value={profile.caste} onChange={handleInputChange}>
            <option value="">Select Caste</option>
            {profile.religion === "Hindu" && (
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
            {profile.religion === "Muslim" && (
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
            {profile.religion === "Christian" && (
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
            {profile.religion === "Sikh" && (
              <>
                <option value="Jatt">Jatt</option>
                <option value="Khatri">Khatri</option>

              </>
            )}

            {profile.religion === "Jain" && (
              <>
                <option value="Digambar">Digambar</option>
                <option value="Shvetambar">Shvetambar</option>
                <option value="Sthanakvasi">Sthanakvasi</option>
                <option value="Terapanthi">Terapanthi</option>
                <option value="Other Jain">Other Jain</option>
              </>
            )}

            {(profile.religion === "Jain" ||
              profile.religion === "Buddhist" ||
              profile.religion === "Jewish" ||
              profile.religion === "Zoroastrian" ||
              profile.religion === "Bahai" ||
              profile.religion === "Atheist" ||
              profile.religion === "Agnostic" ||
              profile.religion === "Other") && (
                <option value="Not Applicable">Not Applicable</option>
              )}
          </select>
        
          {profile.religion === "Hindu" && (
          <>
            <label htmlFor="manglik">Manglik:</label>
            <select name="manglik" value={profile.manglik || ''} onChange={handleInputChange}>
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </>
        )}

        <h3>Location & Birth</h3>
        <label htmlFor="location_residence">Location of Residence:</label>
        <input id="location_residence" name="location_residence" value={profile.location_residence || ''} onChange={handleInputChange} placeholder="Enter your location of residence" />
        
        <label htmlFor="place_of_birth">Place of Birth:</label>
        <input id="place_of_birth" name="place_of_birth" value={profile.place_of_birth || ''} onChange={handleInputChange} placeholder="Enter your place of birth" />
        
        <label htmlFor="date_of_birth">Date of Birth:</label>
        <input type="date" id="date_of_birth" name="date_of_birth" value={profile.date_of_birth || ''} onChange={handleInputChange} />
        
       

        <h3>Family Information</h3>
        <label htmlFor="father_name">Father's Name:</label>
        <input id="father_name" name="father_name" value={profile.father_name || ''} onChange={handleInputChange} placeholder="Enter your father's name" />
        
        <label htmlFor="father_occupation">Father's Occupation:</label>
        <input id="father_occupation" name="father_occupation" value={profile.father_occupation || ''} onChange={handleInputChange} placeholder="Enter your father's occupation" />
        
        <label htmlFor="mother_name">Mother's Name:</label>
        <input id="mother_name" name="mother_name" value={profile.mother_name || ''} onChange={handleInputChange} placeholder="Enter your mother's name" />
        
        <label htmlFor="mother_occupation">Mother's Occupation:</label>
        <input id="mother_occupation" name="mother_occupation" value={profile.mother_occupation || ''} onChange={handleInputChange} placeholder="Enter your mother's occupation" />
        
        <label htmlFor="sibling_count">Number of Siblings:</label>
        <input id="sibling_count" name="sibling_count" value={profile.sibling_count || ''} onChange={handleInputChange} placeholder="Enter number of siblings" />
        
        <label htmlFor="sibling_married">Siblings Married:</label>
        <select name="sibling_married" value={profile.sibling_married || ''} onChange={handleInputChange}>
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        
        <label htmlFor="sibling_details">Sibling Details:</label>
        <textarea id="sibling_details" name="sibling_details" value={profile.sibling_details || ''} onChange={handleInputChange} placeholder="Enter details about your siblings"></textarea>

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default UserProfile;
