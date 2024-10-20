import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import './userprofileview.css';

const UserProfileView = () => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
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

export default UserProfileView;
