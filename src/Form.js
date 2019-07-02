import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validateLogin";
const Form = () => {

    const { handleChange, handleSubmit, values, errors } = useForm(submit, validate);

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
                        className={`${errors.email && "inputError"}`}
                        type="email" 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                    />
                    {errors.email && <p className="error">{errors.email}</p>}

                </div>
            </div>
            <div>
                <label>Password</label>
                <div>
                    <input 
                        className={`${errors.password && "inputError"}`}
                        type="password" 
                        name="password" 
                        value={values.password} 
                        onChange={handleChange} 
                    />
                    {errors.password && <p className="error">{errors.password}</p>}
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