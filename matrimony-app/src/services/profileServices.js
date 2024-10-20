import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const profileServices = {
  getProfile: async (userId) => {
    const response = await axios.get(`${API_URL}/get_profile/${userId}`);
    return response.data;
  },

  updateProfile: async (profileId, profileData) => {
    const response = await axios.put(`${API_URL}/update_profile/${profileId}`, profileData);
    return response.data;
  },

  searchProfiles: async (searchCriteria) => {
    const response = await axios.get(`${API_URL}/profiles/filter`, { params: searchCriteria });
    return response.data;
  },

  createMatch: async (userId, profileId) => {
    const response = await axios.post(`${API_URL}/create_match`, { userId, profileId });
    return response.data;
  },

  submitSupportRequest: async (formData) => {
    const response = await axios.post(`${API_URL}/support-request`, formData);
    return response.data;
  },
};