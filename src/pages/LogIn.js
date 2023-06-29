import React, { useState } from 'react';
import axios from 'axios';

import { Link,useNavigate } from 'react-router-dom';

import './LogIn.css'; 
const LogIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // it is a hook used to navigate through pages we can use useHistory as well
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // i have create a object with userdata we can get our data in this object by calling backend api
    const userData = {
      username: username,
      password: password
    };

    // we are sending a username to the backend and validate username and password using api
    axios.post('http://localhost:8888/api/login', userData)

    // getting thhe response from backend to the response object
      .then(response => {
        // adding logic here to handle respoonse from backend
        console.log(response.data);
        // Add any additional logic here, such as storing the authentication token
        console.log("success");

      alert('Logged in successfully.');
      console.log("user logged in succesfully");
        navigate('/Dashboard');
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
        alert("Failed to Login")
      });
  };

  return (
    <div className="form-container">
      <div className="signup-first-div">
            <h1>
                Login Userself here...!
            </h1>
            </div>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Username:</label>
          <input
            type="text"
            className="input-field"
            placeholder="Enter Username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <hr/> 
        <h3 style={{ textAlign: 'center' }}>Not Registered Yet..?</h3>
        <button>
        <Link to="/SignUp">Back to Registration</Link>
        </button>
      </form>
    </div>
  );
};

export default LogIn;
