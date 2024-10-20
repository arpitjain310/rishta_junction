import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userServices } from '../../services/userServices';
import './passwordreset.css';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [message, setMessage] = useState('');
    const [showOtpForm, setShowOtpForm] = useState(false);
    const navigate = useNavigate();

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        try {
            const response = await userServices.forgotPassword(email);
            setMessage(response.message);
            setShowOtpForm(true);
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword.length < 5 || !/[a-zA-Z]/.test(newPassword)) {
            setMessage('Password must be at least 5 characters long and contain at least 1 letter');
            return;
        }
        try {
            const response = await userServices.resetPassword(email, otp, newPassword);
            setMessage(response.message);
            window.location.href='/';
        } catch (error) {
            setMessage(error.response?.data?.message || 'An error occurred');
        }
    };

    return (
        <div className="password-reset-container">
            <h2>Password Reset</h2>
            {!showOtpForm && (
                <form onSubmit={handleForgotPassword}>
                    <h3>Forgot Password</h3>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        required
                    />
                    <button type="submit">Send OTP</button>
                </form>
            )}
            {showOtpForm && (
                <form onSubmit={handleResetPassword}>
                    <h3>Reset Password</h3>
                    <input
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        placeholder="Enter OTP"
                        required
                    />
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password (min 5 chars, 1 letter)"
                        required
                    />
                    <button type="submit">Reset Password</button>
                </form>
            )}
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default PasswordReset;