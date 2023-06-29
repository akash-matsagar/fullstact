import React from 'react';

import LeftSidebar from '../../components/LeftSidebar'

function Courses() {
  const username="akash Matsagar";
  return (
    <div className="container">
    <div>
    <LeftSidebar username={username} />
      </div>
      <div className="main-content">
        <h1>Welcome {username}</h1>
        <p>you have purchased below courses</p>
      </div>
    </div>
  );
}

export default Courses;

