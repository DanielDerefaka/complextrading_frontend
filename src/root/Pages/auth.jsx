import { jwtDecode } from "jwt-decode";

export const AuthJwt = () => {

    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("Cannot Find Token")
    let decode = jwtDecode(token)
    const {username, name, email} = decode
    return {username, name, email};
    
    
    }