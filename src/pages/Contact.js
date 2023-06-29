import React from "react";
 
import { Link } from "react-router-dom";

import './Contact.css';
function Contact() {
    return(
        <div className="firstdiv">
        <div>
        <h1>Mobile Number</h1>
            <h2>9975504203</h2>
        </div>
        <div>
            <h1>
                Email
            </h1>
            <h2>
                akashmatsagaram30@gmail.com
            </h2>
        </div>
        <button>
        <Link to="/">Back To Homepage</Link>    
        </button>
            
        </div>
    );
}
export default Contact;