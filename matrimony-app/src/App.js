import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './pages/search/search';
import Login from './pages/login/login.jsx';
import LandingPage from './pages/landingpage/landingpage';
import Terms from './components/Terms.jsx';
import ComingSoon from './pages/comingsoon/comingsoon.jsx';
import Register from './pages/register/register.jsx';
import UserProfile from './pages/userprofile/userprofile.jsx';
import AdminPage from './pages/admin/admin.jsx';
import Support from './pages/support/support.jsx';
import UserProfileView from './pages/userprofileview/UserProfileView.jsx';
import PasswordReset from './pages/passwordreset/passwordreset.jsx';

const RishtaJunction = () => {
  return (
    <Router>
      <div className='RishtaJunction'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/userprofile/:userId" element={<UserProfileView />} />
            <Route path="/passwordreset" element={<PasswordReset />} />
            <Route path="/search" element={<Search />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default RishtaJunction;
