import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import About from '../pages/About';
import Contact from '../pages/Contact';
import LogIn from '../pages/LogIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../components/Dashboard';
import UserHome from '../pages/UserPages/UserHome';
import Courses from '../pages/UserPages/Courses';
import Aboutuser from '../pages/UserPages/Aboutuser';
import Settings from '../pages/UserPages/Settings';
import Notifications from '../pages/UserPages/Notifications';
import Documents from '../pages/UserPages/Documents';


function HomePageRoutesContainer() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<HomePage />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/LogIn" element={<LogIn />} />
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/Dashboard" element={<Dashboard />} />
        <Route exact path="/UserHome" element={<UserHome />} />
        <Route exact path="/Courses" element={<Courses />} />
        <Route exact path="/Aboutuser" element={<Aboutuser />} />
        <Route exact path="/Settings" element={<Settings />} />
        <Route exact path="/Notifications" element={<Notifications />} />
        <Route exact path="/Documents" element={<Documents />} />
      </Routes>
    </BrowserRouter>
  );
}

export default HomePageRoutesContainer;