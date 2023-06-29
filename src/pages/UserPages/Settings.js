import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
function Settings() {
  const username="akash Matsagar";
  return (
    <div className="container">
    <div>
    <LeftSidebar username={username} />
      </div>
      <div className="main-content">
        <h1>Welcome {username}</h1>
        <p>do the needfull settings in below</p>

      </div>
      
    </div>
  );
}

export default Settings;


