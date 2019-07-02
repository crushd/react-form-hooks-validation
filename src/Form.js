import React, { useState } from "react";
import useForm from "./useForm";

const Form = () => {

    const { handleChange, handleSubmit, values } = useForm(submit);

    function submit() {
        console.log("Submitted successfully.");
    }

    return (
    <div>
        <form noValidate onSubmit={handleSubmit}>
            <div>
                <label>Email</label>
                <div>
                    <input 
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                    />
                    {/* // error message here */}
                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <input 
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={handleChange} 
                    />
                    {/* // error message here */}
                </div>
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
    );
};

// form element
// label and input for email
// label and input for password
// submit button

// handle changes
// handle submits

// handle errors
// show errors if there are errors

export default Form;