import toast from 'react-hot-toast'

/* validate login page username */
export async function usernameValidate(values){
    const errors = usernameVerify({},values)
    return errors
}
/* validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({},values)
    return errors
}

/** validate reset password  */
export async function resetPasswordValidation(values){
    const errors= passwordVerify({},values)

    if(values.password != values.confirm_pwd){
        errors.exist = toast.error('password not much')
    }
    return errors
}

/** validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({},values);
    passwordVerify(errors , values);
    emailVerify(errors,values);

    return errors
}

/**validate profile page */
export async function profileValidation(values){
    const error = emailVerify({},values)

    return error
}

/** validate password */
function passwordVerify(errors={},values){
    /* eslint-disable no-useless-escape */
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if(!values.password){
        errors.password=toast.error('password Required ...!')
    }
    //The includes() method returns true if a string contains a specified string.Otherwise it returns false.
    else if(values.password.includes(" ")){
        errors.password = toast.error('wrong password ...!')
}
    else if(values.password.length <4){
        errors.password=toast.error("Password must be more then 4 charachter")
    }
    else if(!specialChars.test(values.password)){
        toast.error("password must have special charachter")
    }
    return errors
}





/*validate username */
function usernameVerify(error ={},values){
    if(!values.username){
        error.username=toast.error('Username Required ...!')
    }
    //The includes() method returns true if a string contains a specified string.Otherwise it returns false.
    else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username ...!')

    }
    return  error
}
/**validate email */
function emailVerify(error ={},values){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(!values.email){
        error.email=toast.error('email Required ...!')
    }
    //The includes() method returns true if a string contains a specified string.Otherwise it returns false.
    else if(values.email.includes(" ")){
        error.email = toast.error('wrong email ...!')
    }
    else if(!emailRegex.test(values.email)){
        email.error=toast.error("Invalid email adress")
    }

    
    return  error
}