import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate  } from 'react-router-dom';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // it is a hook used for navigating through pages..
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  //this is a handle submit function which will work on when the submit event occures
  const handleSubmit = (e) => {
    e.preventDefault();

    // i have created a object my data which i need to send my backend api
    const userData = {
      username: username,
      password: password
    };

    // i am sending a post request with my userData object contain username and password
    // i have installed axios library for making front end and backend connection and have used @Crossorigin annotation to the backend
    axios.post('http://localhost:8888/api/register', userData)
      .then(response => {
        // the response i am getting from backend is contain in a response object
        console.log(response.data);

        //i am adding a logic here for handling response getting from backend
        if(response.data==='Success'){
          console.log("i got success response from backend so data stored successfully.");
          alert('User created successfully.');
          navigate('/login');
        }
        else if(response.data==='Fail'){
          alert("Username already exists ")
        }else{
          alert("Something went Wrong");
        }
      })
      .catch(error => {
        // if any error occured i can handle that logic here..
        console.error(error);
        console.log("error occurred while saving");
        // i can add additional error handling logic below
      });

  };

  return (
    <div className="form-container">
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
        <button type="submit">Sign Up</button>
        <hr/> 
        <h3 style={{ textAlign: 'center' }}>Already Registered..?</h3>
        <button>
          <Link to="/login">Back to Login</Link>
        </button>
        <hr/>
        <button>
          <Link to="/">Back to homepage</Link>
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
