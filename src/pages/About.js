import React from 'react';
import './About.css';

import { Link } from 'react-router-dom';

function About() {

  return (
    <div className="about-container">
    
      <h2>This page indicates my full information</h2>
      <p>
        Hi, I'm Akash Matsagar. I am a passionate full-stack web developer with experience in React.js. I love creating interactive and dynamic user interfaces.
      </p>
      <p>
        I have knowledge of backend technologies such as Spring and related technologies. I also have experience working with both relational and NoSQL databases.
      </p>
      <h3>I have the following skills</h3>
      <ul>
        <li>C</li>
        <li>C++</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>PHP</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>J2SE</li>
        <li>Spring (All modules)</li>
      </ul>
      <h3>I have completed BSc in Computer Science and currently pursuing MCA.</h3>
      <p>I have completed 12th grade in the Science stream.</p>
      <h3>My Experience</h3>
      <p>1 year of experience in software development</p>
      <h3>Hobbies</h3>
      <ul>
        <li>Reading</li>
        <li>Working in the farm</li>
        <li>Playing cricket</li>
      </ul>
      <button>
        <Link to="/SignUp">Back to Registration</Link>
        </button>
        <hr/>
        <button>
        <Link to="/">Back to homepage</Link>
        </button>
    </div>
  );
}

export default About;
