import React, { useRef, useState } from 'react'
import "./NewAuthorForm.scss";
import { signUp } from '../../../services/sessionService';
import { useNavigate } from 'react-router-dom';
import {validateUsername, validatePassword, validateFirstName, validateLastName, validateGender} from '../../../services/validationsService';
const NewAuthorForm = () => {

    //used for loading while waiting for the server sign in request
    const [isLoading, setIsLoading] = useState(false);

    //all the needed fields
    const usernameRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const genderRef = useRef();
    const passwordRef = useRef();

    //used for page navigation
    const navigate = useNavigate();

    const onAddAuthorButtonClick = async () => {
        let username = usernameRef.current.value;
        let firstName = firstNameRef.current.value;
        let lastName = lastNameRef.current.value;
        let gender = genderRef.current.value;
        let password = passwordRef.current.value;

        //validating username
        let usernameValidationMessage = validateUsername(username);
        if(usernameValidationMessage !== null){
            alert(usernameValidationMessage);
            return;
        }

        //validating first name
        let firstNameValidationMessage = validateFirstName(firstName);
        if(firstNameValidationMessage !== null){
            alert(firstNameValidationMessage);
            return;
        }

        //validating last name
        let lastNameValidationMessage = validateLastName(lastName);
        if(lastNameValidationMessage !== null){
            alert(lastNameValidationMessage);
            return;
        }

        //validating gender (it will be a drop down list in the end)
        let genderValidationMessage = validateGender(gender)
        if(genderValidationMessage !== null){
            alert(genderValidationMessage);
            return;
        }
        
        //validating password
        let passwordValidationMessage = validatePassword(password);
        if(passwordValidationMessage !== null){
            alert(passwordValidationMessage);
            return;
        }

        //TODO: replace console.log callback with setToken function
        setIsLoading(true);
        let signUpSuccessful = await signUp(username, firstName, lastName, gender, password);
        setIsLoading(false);

        if(signUpSuccessful){
            alert("Author was added successfuly!");
            navigate("/");
        } else{
            alert("Author was not created.");
        }
    }

    return (
        <div className='new-author-form'>
            {/* Username */}
            <label htmlFor='username'>Username</label>
            <input type="text" placeholder='Username' id='username' ref={usernameRef} />
            
            {/* First Name */}
            <label htmlFor='firstName'>First Name</label>
            <input type="text" placeholder='First Name' id='firstName' ref={firstNameRef} />

            {/* Last Name */}
            <label htmlFor='lastName'>Last Name</label>
            <input type="text" placeholder='Last Name' id='lastName' ref={lastNameRef} />

            {/* Gender */}
            <label htmlFor='gender'>Gender</label>
            <input type="text" placeholder='Your Gender' id='gender' ref={genderRef} />

            {/* Password */}
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Password' id='password' ref={passwordRef} />

            {/* Add Author button */}
            <button onClick={async () => onAddAuthorButtonClick()}>{isLoading ? "Loading.." : "Add Author"}</button>
        </div>
    )
}

export default NewAuthorForm