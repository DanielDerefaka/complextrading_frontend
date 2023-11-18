import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik' 
// import {nameValidate, usernameValidate, passwordValidate} from '../../helper/validate'
import toast from 'react-hot-toast'
// import {useAuthStore} from '../../Store/store'
import {registerUser} from '../helpers/helper'


const SignupAdmin = () => {
  const isLoading = false;
const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      username: '',
      name: '',
      email: '',
      password: ''

    },
    validate: (values) => {
      const errors = {};
  
      // Validate the 'username' field
      if (!values.username) {
        errors.username = toast.error('Username is required');
      } else if (values.username.length < 3) {
        errors.username = toast.error('Username must be at least 3 characters long');
      }
  
      // Validate the 'name' field
      if (!values.name) {
        errors.name = toast.error('Name is required');
      } else if (values.name.length < 3) {
        errors.name = toast.error('Name must be at least 3 characters long');
      }
  
      // Validate the 'email' field
      if (!values.email) {
        errors.email = toast.error('Email is required');
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = toast.error('Invalid email address');
      }
  
      // Validate the 'password' field
      if (!values.password) {
        errors.password = toast.error('Password is required');
      } else if (values.password.length < 6) {
        errors.password = toast.error('Password must be at least 6 characters long');
      }
  
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values)
     let register= registerUser(values)
      toast.promise( register, {
        loading: "Creating.....",
        success: <b> Register Sucessfully.......!</b>,
        error: <b> Could not Regsiter User</b>
      })

      register.then(function() {navigate('/sign-in')})
    }
  })




  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}>
      </Toaster>

      <div className="sm:w-420 flex-center flex-col ">
        <div className="flex-center flex-row">
          <img src="/assets/images/favicon.png" alt="logo" className="w-[50px]" />
          <h2 className="font-bold font-inter"> Complex Trading </h2>
        </div>
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12"> Admin Create Account   </h2>
        {/* <p className="text-light-3  smal-medium md:base-regular mt-2 "> To use Complex Trading enter your  details</p> */}


        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 w-full mt-4">

          <div className="">
            <label className="text-sm text-gray-600 font-normal">Name</label>
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="text"
              name="name"
             {...formik.getFieldProps('name')}
              
            />
          </div>
          <div className="">
            <label className="text-sm text-gray-600 font-normal">Username</label>
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="text"
              name="username"
              {...formik.getFieldProps('username')}
              
            />
          </div>
          <div className="">
            <label className="text-sm text-gray-600 font-normal">Email</label>
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
          </div>
          <div className="">
            <label className="text-sm text-gray-600 font-normal">Password</label>
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="password"
              name="password"
              {...formik.getFieldProps('password')}
            />
          </div>

          <button className="shad-button_primary text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none text-center" type="submit">
            {isLoading ? (
              <div className="flex-center gap-2 text-center">
                <Loader /> Loading...

              </div>
            ) : "Sign Up"}
          </button>
          <p className="text-small-regular text-light-3  text-center ">
            Already have an account <Link to="/admin/sign-in" className="text-black font-bold ml-1 "> Log In</Link>
          </p>
        </form>
      </div>
    </div>


  )
}

export default SignupAdmin