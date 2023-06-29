import React from "react";
import './Dashboard.css';
import LeftSidebar from "./LeftSidebar";

function Dashboard() {

  const username = "akash Matsagar";
  return (
    <>
      <LeftSidebar username={username} />
    </>
  );
}

export default Dashboard;
