import React from 'react';
import LeftSidebar from '../../components/LeftSidebar';
import './UserHome.css'; 

function UserHome() {
  const username="akash Matsagar";
  return (
    <div className="container">
    <div>
    <LeftSidebar username={username} />
      </div>
      <div className="main-content">
        <h1>Welcome {username}</h1>
        <p>This is your homepage</p>
      </div>
    </div>
  );
}

export default UserHome;
