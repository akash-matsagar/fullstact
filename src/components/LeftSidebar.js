import React from 'react';
import { Link } from 'react-router-dom';
import profilePicture from './profile-picture.png';
import './LeftSidebar.css'; 


const LeftSidebar = ({ username }) => {
  return (
    <div className="left-sidebar">
      <img src={profilePicture} alt="" className="profile-picture"/>
      <h2 className="username">{ username }</h2>
      <ul className="navigation-links">
        <li><Link to="/UserHome">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/Aboutuser">About</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/documents">Documents</Link></li>
      </ul>
      <div>
      </div>
    </div>
  );
};

export default LeftSidebar;
