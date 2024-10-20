import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './userprofile.css';

const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem('user_id');
        const response = await axios.get(`http://localhost:8000/api/get_profile/${userId}`);
        setProfile(response.data);
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
      await axios.put(`http://localhost:8000/api/update_profile/${profile.profile_id}`, profile);
      alert('Profile updated successfully!');
      
      // Redirect to the home page after successful update
      window.location.href = '/';
      
    } catch (err) {
      alert('Error updating profile');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <h3>Basic Information</h3>
        <label htmlFor="age">Age:</label>
        <input id="age" name="age" value={profile.age} onChange={handleInputChange} placeholder="Enter your age" />
        
        <label htmlFor="gender">Gender:</label>
        <input id="gender" name="gender" value={profile.gender} onChange={handleInputChange} placeholder="Enter your gender" />
        
        <label htmlFor="height">Height (cm):</label>
        <input id="height" name="height" value={profile.height} onChange={handleInputChange} placeholder="Enter your height in cm" />
        
        <label htmlFor="complexion">Complexion:</label>
        <input id="complexion" name="complexion" value={profile.complexion} onChange={handleInputChange} placeholder="Enter your complexion" />
        
        <label htmlFor="body_type">Body Type:</label>
        <input id="body_type" name="body_type" value={profile.body_type} onChange={handleInputChange} placeholder="Enter your body type" />
        
        <label htmlFor="marital_status">Marital Status:</label>
        <input id="marital_status" name="marital_status" value={profile.marital_status} onChange={handleInputChange} placeholder="Enter your marital status" />
        
        <label htmlFor="have_children">Have Children:</label>
        <input id="have_children" name="have_children" value={profile.have_children} onChange={handleInputChange} placeholder="Do you have children?" />
        
        <label htmlFor="diet">Diet:</label>
        <input id="diet" name="diet" value={profile.diet} onChange={handleInputChange} placeholder="Enter your diet preferences" />
        
        <label htmlFor="drink">Drink:</label>
        <input id="drink" name="drink" value={profile.drink} onChange={handleInputChange} placeholder="Do you drink?" />
        
        <label htmlFor="smoke">Smoke:</label>
        <input id="smoke" name="smoke" value={profile.smoke} onChange={handleInputChange} placeholder="Do you smoke?" />
        
        <label htmlFor="blood_group">Blood Group:</label>
        <input id="blood_group" name="blood_group" value={profile.blood_group} onChange={handleInputChange} placeholder="Enter your blood group" />
        
        <label htmlFor="specially_abled">Specially Abled:</label>
        <input id="specially_abled" name="specially_abled" value={profile.specially_abled} onChange={handleInputChange} placeholder="Are you specially abled?" />

        <h3>Education & Profession</h3>
        <label htmlFor="education">Education:</label>
        <input id="education" name="education" value={profile.education} onChange={handleInputChange} placeholder="Enter your education" />
        
        <label htmlFor="profession">Profession:</label>
        <input id="profession" name="profession" value={profile.profession} onChange={handleInputChange} placeholder="Enter your profession" />

        <h3>Religion & Caste</h3>
        <label htmlFor="religion">Religion:</label>
        <input id="religion" name="religion" value={profile.religion} onChange={handleInputChange} placeholder="Enter your religion" />
        
        <label htmlFor="caste">Caste:</label>
        <input id="caste" name="caste" value={profile.caste} onChange={handleInputChange} placeholder="Enter your caste" />

        <h3>Location & Birth</h3>
        <label htmlFor="location_residence">Location of Residence:</label>
        <input id="location_residence" name="location_residence" value={profile.location_residence} onChange={handleInputChange} placeholder="Enter your location of residence" />
        
        <label htmlFor="place_of_birth">Place of Birth:</label>
        <input id="place_of_birth" name="place_of_birth" value={profile.place_of_birth} onChange={handleInputChange} placeholder="Enter your place of birth" />
        
        <label htmlFor="date_of_birth">Date of Birth:</label>
        <input id="date_of_birth" name="date_of_birth" value={profile.date_of_birth} onChange={handleInputChange} placeholder="Enter your date of birth" />
        
        <label htmlFor="manglik">Manglik:</label>
        <input id="manglik" name="manglik" value={profile.manglik} onChange={handleInputChange} placeholder="Are you manglik?" />

        <button onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
};

export default UserProfile;