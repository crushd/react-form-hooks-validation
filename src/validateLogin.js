export default function validateLogin(values) {

    let errors = {};

    //email
        //cant be blank
        if (!values.email) {
            errors.email = "Email address is required";
        } else if (!/\S+@\S+\.\S+/.test(values.email))  {
        //string needs to be email
            errors.email = "Email needs to be an email";
        }

    //password
        //cant be blank
        if (!values.password) {
            errors.password = "password is required";
        } else if (values.password.length < 10)  {
        // string needs to be more than 10 characters
            errors.password = "password needs to be at least 10 characters";
        }

    return errors;
}