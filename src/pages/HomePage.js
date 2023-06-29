import React from 'react';
import { useNavigate } from 'react-router-dom';

import './HomePage.css';
import backgroundImage from './background.jpg';


function HomePage() {
  const navigate = useNavigate();
  return (
    <div className='homepage-container' style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className='top-navbar'>
      <nav>
        <ul>    
          <li>
            <button className="button" onClick={() => { navigate('/') }}>Home</button>
          </li>
          <li>
            <button className="button" onClick={() => { navigate('/About') }}>About</button>
          </li>
          <li>
            <button className="button" onClick={() => { navigate('/Contact') }}>Contact</button>
          </li>
          <li>
            <button className="button" onClick={() => { navigate('/LogIn') }}>LogIn</button>
          </li>
          <li>
            <button className="button" onClick={() => { navigate('/SignUp') }}>SignUp</button>
          </li>
        </ul>
      </nav>
    </div>
    <div className='homepage-div1'>
        <h1>Welcome to Website Homepage</h1>
        <h1>
        Developer Biography
        </h1>
        <p>
          My name is Akash Matsagar <br/>
          I have created this website for study and development purpose<br/>
          I have study bsc in computer science<br/>
          now i am working as software developer at tata consultancy services<br/>
        </p>
        
      </div>
      <div className="homepage-div2">
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
          Donec placerat eleifend nibh, nec posuere arcu blandit quis.<br/>
          Phasellus ut tristique lorem. Vestibulum ante ipsum primis<br/>
          in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
          Pellentesque vel nibh ut urna fringilla cursus. Quisque id<br/>
          tincidunt turpis. In hac habitasse platea dictumst.<br/>
        </p>
      </div>
      <div className="homepage-div3">
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
          Donec placerat eleifend nibh, nec posuere arcu blandit quis.<br/>
          Phasellus ut tristique lorem. Vestibulum ante ipsum primis<br/>
          in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
          Pellentesque vel nibh ut urna fringilla cursus. Quisque id<br/>
          tincidunt turpis. In hac habitasse platea dictumst.<br/>
        </p>
      </div>
      <div className="homepage-div4s">
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
          Donec placerat eleifend nibh, nec posuere arcu blandit quis.<br/>
          Phasellus ut tristique lorem. Vestibulum ante ipsum primis<br/>
          in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
          Pellentesque vel nibh ut urna fringilla cursus. Quisque id<br/>
          tincidunt turpis. In hac habitasse platea dictumst.<br/>
        </p>
      </div>
      <div className="homepage-div5">
      <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
          Donec placerat eleifend nibh, nec posuere arcu blandit quis.<br/>
          Phasellus ut tristique lorem. Vestibulum ante ipsum primis<br/>
          in faucibus orci luctus et ultrices posuere cubilia Curae;<br/>
        </p>
      </div>
      
      <button className="button" onClick={() => { navigate('/About') }}>See About @Developer</button>
      </div>
  );
}

export default HomePage;
