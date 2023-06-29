import React from 'react';

import LeftSidebar from '../../components/LeftSidebar';
function Notifications() {
  const username="akash Matsagar";
  return (
    <div className="container">
    <div>
    <LeftSidebar username={username} />
      </div>
      <div className="main-content">
        <h1>Welcome {username}</h1>
        <p>Read the below notifications carefully</p>
      </div>
    </div>
  );
}

export default Notifications;


