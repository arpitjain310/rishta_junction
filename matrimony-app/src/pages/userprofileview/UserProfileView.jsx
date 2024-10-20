import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import './userprofileview.css';
import { profileServices } from '../../services/profileServices';

const UserProfileView = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="profile-container">
       <div className="profile-picture">
        <img src={profile.profile_picture || 'https://via.placeholder.com/150'} alt="Profile" />
        {/* <input type="file" name="profile_picture" onChange={handlepicChange} accept="image/*" /> */}
      </div>
      
      <h1>User Profile</h1>
      <div className="profile-info">
        <h3>Basic Information</h3>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Age:</strong> {profile.age}</p>
        <p><strong>Gender:</strong> {profile.gender}</p>
        <p><strong>Height:</strong> {profile.height ? `${profile.height} cm` : 'Not provided'}</p>
        <p><strong>Complexion:</strong> {profile.complexion || 'Not provided'}</p>
        <p><strong>Body Type:</strong> {profile.body_type || 'Not provided'}</p>
        <p><strong>Marital Status:</strong> {profile.marital_status}</p>
        {profile.marital_status !== "Single" && (
          <p><strong>Have Children:</strong> {profile.have_children}</p>
        )}
        <p><strong>Diet:</strong> {profile.diet}</p>
        <p><strong>Drink:</strong> {profile.drink}</p>
        <p><strong>Smoke:</strong> {profile.smoke}</p>
        <p><strong>Blood Group:</strong> {profile.blood_group || 'Not provided'}</p>
        <p><strong>Specially Abled:</strong> {profile.specially_abled}</p>

        <h3>Education & Profession</h3>
        <p><strong>Education:</strong> {profile.education}</p>
        <p><strong>Profession:</strong> {profile.profession}</p>
        <p><strong>Income:</strong> {profile.income}</p>

        <h3>Religion & Caste</h3>
        <p><strong>Religion:</strong> {profile.religion}</p>
        <p><strong>Caste:</strong> {profile.caste}</p>
        {profile.religion === "Hindu" && (
          <p><strong>Manglik:</strong> {profile.manglik}</p>
        )}

        <h3>Location & Birth</h3>
        <p><strong>Location of Residence:</strong> {profile.location_residence}</p>
        <p><strong>Place of Birth:</strong> {profile.place_of_birth}</p>
        <p><strong>Date of Birth:</strong> {profile.date_of_birth}</p>

        <h3>Family Information</h3>
        <p><strong>Father's Name:</strong> {profile.father_name}</p>
        <p><strong>Father's Occupation:</strong> {profile.father_occupation}</p>
        <p><strong>Mother's Name:</strong> {profile.mother_name}</p>
        <p><strong>Mother's Occupation:</strong> {profile.mother_occupation}</p>
        <p><strong>Number of Siblings:</strong> {profile.sibling_count}</p>
        <p><strong>Siblings Married:</strong> {profile.sibling_married}</p>
        <p><strong>Sibling Details:</strong> {profile.sibling_details}</p>
      </div>
    </div>
  );
};

export default UserProfileView;
