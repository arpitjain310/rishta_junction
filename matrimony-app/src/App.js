import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './pages/profile/profile';
import Search from './pages/search/search';
import Login from './pages/login/login.jsx';
import LandingPage from './pages/landingpage/landingpage';
import Terms from './components/Terms.jsx';
import ComingSoon from './pages/comingsoon/comingsoon.jsx';
import Register from './components/register.jsx';
import UserProfile from './pages/userprofile/userprofile.jsx';

const RishtaJunction = () => {
  return (
    <Router>
      <div className='RishtaJunction'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/profile" element={<Profile />} /> */}
            {/* <Route path="/search" element={<Search />} /> */}
            <Route path="/terms" element={<Terms />} />
          
            {/* <Route path="/userprofile" element={<UserProfile />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default RishtaJunction;
