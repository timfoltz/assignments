import React, { useState } from 'react';

const UserForm = (props) => {
    const{inputs, setInputs} = props;
    const[firstNameError, setFirstNameError] = useState("");
    const[lastNameError, setLastNameError] = useState("");
    const[emailError, setEmailError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[confirmPasswordError, setConfirmPasswordError] = useState("");
    

    

    // const onChange = e => {
    //     setInputs({
    //         ...inputs,
    //         [e.target.name]: e.target.value
    //     });
    // };
    const handleFirstName = (e) => {
        if(e.target.value === ""){
            setFirstNameError("")
        }
        else if(e.target.value.length <2) {
            setFirstNameError("First name must have at least 2 characters!")
        }
        else{
            setFirstNameError("")
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    const handleLastName = (e) => {
        if(e.target.value === ""){
            setFirstNameError("")
        }
        else if(e.target.value.length <2) {
            setLastNameError("Last name must have at least 2 characters!")
        }
        else{
            setLastNameError()
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    const handleEmail = (e) => {
        if(e.target.value === ""){
            setFirstNameError("")
        }
        else if(e.target.value.length <5) {
            setEmailError("Email must have at least 5 characters!")
        }
        else{
            setEmailError()
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    const handlePassword = (e) => {
        if(e.target.value === ""){
            setFirstNameError("")
        }
        else if(e.target.value.length <8) {
            setPasswordError("Password must have at least 8 characters!")
        }
        else{
            setPasswordError()
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    const handleConfirmPassword = (e) => {
        if(e.target.value === ""){
            setFirstNameError("")
        }

        else if(e.target.value !== inputs.password) {
            setConfirmPasswordError("Passwords must match!")
        }
        else{
            setConfirmPasswordError()
        }
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    }
    return (
        <div>
            <form className="form-group">
                <div>
                    <label htmlFor="firstName" >First Name</label>
                    <input required name="firstName" type="text" onChange= {handleFirstName} />
                    {
                        firstNameError ?
                        <p style={{color:'red'}}>{firstNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" type="text" onChange= { handleLastName } />
                    {
                        lastNameError ?
                        <p style={{color:'red'}}>{lastNameError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" onChange= { handleEmail} />
                    {
                        emailError ?
                        <p style={{color:'red'}}>{emailError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange= { handlePassword } />
                    {
                        passwordError ?
                        <p style={{color:'red'}}>{passwordError}</p>:
                        ''
                    }
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input name="confirmPassword" type="password" onChange= { handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p style={{color:'red'}}>{confirmPasswordError}</p>:
                        ''
                    }
                </div>
            </form>
        </div>
    );
};

export default UserForm;