import axios from "axios";

const API_URL = "http://localhost:8000/api"

export const userServices = {
  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  },

  sendLoginOtp: async (mobile_number) => {
    const response = await axios.post(`${API_URL}/login_send_otp`, null, {
      params: { mobile_number }
    });
    return response.data;
  },

  verifyLoginOtp: async (mobile_number, otp) => {
    const response = await axios.post(`${API_URL}/login/verify_otp`, null, {
      params: { mobile_number, otp }
    });
    return response.data;
  },

  register: async (formData) => {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  },

  verifyOtpAndRegister: async (mobile_number, otp) => {
    const response = await axios.post(`${API_URL}/verify_otp_and_register`, {
      mobile_number: mobile_number.toString(),
      otp: otp.toString(),
    });
    return response.data;
  },
  forgotPassword: async (email) => {
    const response = await axios.post(`${API_URL}/forgot-password`, { email });
    return response.data;
  },
  
  resetPassword: async (email, otp, new_password) => {
    const response = await axios.post(`${API_URL}/reset-password`, { email, otp, new_password });
    return response.data;
  },
  logout: async (token) => {
    const response = await axios.post(`${API_URL}/logout`, {}, {
      params: { token }
    });
    return response.data;
  },
};