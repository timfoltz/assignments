import React, { useState } from 'react';

const UserForm = (props) => {
    const{inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div>
            <form className="form-group">
                <div>
                    <label htmlFor="firstName" >First Name</label>
                    <input name="firstName" type="text" onChange= { onChange } />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" type="text" onChange= { onChange } />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" onChange= { onChange } />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password" onChange= { onChange } />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input name="confirmPassword" type="password" onChange= { onChange } />
                </div>
            </form>
        </div>
    );
};

export default UserForm;