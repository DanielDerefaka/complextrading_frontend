import axios from "axios";
import { jwtDecode } from "jwt-decode";

axios.defaults.baseURL = "http://localhost:8080";

// Make Api Request

// Sign Up
export async function registerUser(credentials) {
  try {
    const {
      data: { message },
      status,
    } = await axios.post(`/api/admin/register`, credentials);
    let { username, email } = credentials;
    //    send email
    if (status === 201) {
      await axios.post("/api/registerMail", {
        username,
        UserEmail: email,
        text: message,
      });
    }

    return Promise.resolve(message);
  } catch (error) {
    return Promise.reject({ error });
  }
}

// Login
export async function login({ email, password }) {
  try {
    if (email) {
      const { data } = await axios.post("/api/admin/login", { email, password });
      return Promise.resolve({ data });
    }
  } catch (error) {
    return Promise.reject({ error: "Password Doesnt Match" });
  }
}

//  Update User
export async function updateUser(response) {
  try {
    const token = await localStorage.getItem("token");
    const data = await axios.put("/api/updateuser", response, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return Promise.resolve({ data });
  } catch (error) {
    return Promise.reject({ message: "Couldnt update profile" });
  }
}

// Get User

export async function getUser({ email }) {
  try {
    if (email) {
      const { data } = await axios.get(`api/user/${email}`);

      return Promise.resolve({ data });
    } else {
      return Promise.reject({ error: "No Email " });
    }
  } catch (error) {
    return Promise.reject({ error: "No Email Found" });
  }
}

// GenerateOtp
export async function generateOTP(email) {
  let isEmailSent = false;

  try {
    if (isEmailSent) {
      return res.status(400).json({ message: "Email has already been sent" });
    }

    const {
      data: { code },
      status,
    } = await axios.get("api/generateOTP");

    //   Send mail with otp
    if (status === 201) {
      // const { data: { email } } = await getUser({ email });
      let text = `Your Password Recovery Otp is  ${code} . Verify and Recover Password`;
      let emailsent = await axios.post("api/registerMail", {
        username: "Daniel",
        UserEmail: email,
        text,
        subject: "Password Recovery Otp",
      });
      if (!emailsent)
        return Promise.reject({ error });
    }

    isEmailSent = true;
    return Promise.resolve({ message: "Otp Sent " });
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function verifyOTP({ email, code }) {
  try {
    const { data, status } = await axios.get("api/verifyOTP", {
      params: { code },
    });

    return { data, status };
  } catch (error) {
    return Promise.reject({ error: "Cannot Verify Otp" });
  }
}

export async function resetPassword({ email, password }) {
  try {
    const { data, status } = await axios.put("/api/resetPassword", {
      email,
      password,
    });
   return Promise.resolve({ data, status });
  } catch (error) {
    return Promise.reject({ error });
  }
}

export async function getUsername() {
  const token = localStorage.getItem("token");
  if (!token) return Promise.reject("Cannot Find Token");
  let decode = jwtDecode(token);
  return decode;
}
