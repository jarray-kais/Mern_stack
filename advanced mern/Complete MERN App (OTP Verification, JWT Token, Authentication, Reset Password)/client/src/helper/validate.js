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