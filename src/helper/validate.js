import toast from 'react-hot-toast'


export async function nameValidate(values) {
    const errors = nameVerify({}, values);

    return errors
}


// validate name 

function nameVerify(error = {}, values){
    if(!values.name){
        error.name = toast.error("Name Required.....")
    }else if(values.name.includes('')){
        error.name = toast.error('Invalid Name')
    }

    return error;
    
}


// Username 
export async function UsernameValidate(values) {
    const errors = usernameVerify({}, values);

    return errors
}


// validate Username 

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error("Username Required.....")
    }else if(values.username.includes('')){
        error.username = toast.error('Invalid Username')
    }

    return error;
}

// Password
export async function PasswordValidate(values) {
    const errors = passwordVerify({}, values);

    return errors
}


// validate password

function passwordVerify(error = {}, values){
    if(!values.password){
        error.password = toast.error("Password Required.....")
    }else if(values.password.includes('')){
        error.password = toast.error('Invalid Password')
    }

    return error;
}


// Email 
export async function EmailValidate(values) {
    const errors = emailVerify({}, values);

    return errors
}


// validate email 

function emailVerify(error = {}, values){
    if(!values.email){
        error.email = toast.error("Email Required.....")
    }else if(values.email.includes('')){
        error.email = toast.error('Invalid Email')
    }

    return error;
}