import React from "react";
import RegistrationForm from './RegistrationForm';

import './SignUp.css';

function SignUp() {
    return(
        <div>
        <div className="signup-first-div">
            <h1>
                Register yourself here...!
            </h1>
        </div>
            <RegistrationForm />
        </div>
    );
}
export default SignUp;