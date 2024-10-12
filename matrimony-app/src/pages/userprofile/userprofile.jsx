import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './userprofile.css';
const UserProfile = ({ userId }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch profile data from the backend
    const fetchProfile = async () => {
      try {
        // const response = await axios.get(`/api/profile/${userId}`);
        let response ={
            "data": [
                {
                    "profile_id" : 1,
                    "user_id" : 1,
                    "age" : 0,
                    "gender" : "string",
                    "height" : 0.0,
                    "complexion" : "string",
                    "body_type" : "string",
                    "marital_status" : "string",
                    "have_children" : true,
                    "diet" : "string",
                    "drink" : true,
                    "smoke" : "string",
                    "blood_group" : "string",
                    "specially_abled" : true,
                    "education" : "string",
                    "profession" : "string",
                    "religion" : "string",
                    "caste" : "string",
                    "location_residence" : "string",
                    "place_of_birth" : "string",
                    "date_of_birth" : "2024-10-10T17:38:42.501Z",
                    "manglik" : true
                }
            ]}
            
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching profile data');
        setLoading(false);
      }
    };
    fetchProfile();
  }, [userId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      <div className="profile-info">
        <h3>Basic Information</h3>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Height:</strong> {profile.height ? `${profile.height} cm` : 'Not provided'}</p>
        <p><strong>Complexion:</strong> {profile.complexion || 'Not provided'}</p>
        <p><strong>Body Type:</strong> {profile.body_type || 'Not provided'}</p>
        <p><strong>Marital Status:</strong> {profile.marital_status}</p>
        <p><strong>Have Children:</strong> {profile.have_children ? 'Yes' : 'No'}</p>
        <p><strong>Diet:</strong> {profile.diet}</p>
        <p><strong>Drink:</strong> {profile.drink ? 'Yes' : 'No'}</p>
        <p><strong>Smoke:</strong> {profile.smoke}</p>
        <p><strong>Blood Group:</strong> {profile.blood_group || 'Not provided'}</p>
        <p><strong>Specially Abled:</strong> {profile.specially_abled ? 'Yes' : 'No'}</p>

        <h3>Education & Profession</h3>
        <p><strong>Education:</strong> {profile.education}</p>
        <p><strong>Profession:</strong> {profile.profession}</p>

        <h3>Religion & Caste</h3>
        <p><strong>Religion:</strong> {profile.religion || 'Not provided'}</p>
        <p><strong>Caste:</strong> {profile.caste || 'Not provided'}</p>

        <h3>Location & Birth</h3>
        <p><strong>Location of Residence:</strong> {profile.location_residence || 'Not provided'}</p>
        <p><strong>Place of Birth:</strong> {profile.place_of_birth || 'Not provided'}</p>
        <p><strong>Date of Birth:</strong> {new Date(profile.date_of_birth).toLocaleDateString() || 'Not provided'}</p>
        <p><strong>Manglik:</strong> {profile.manglik ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default UserProfile;
