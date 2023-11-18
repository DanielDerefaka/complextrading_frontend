import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik' 
// import {nameValidate, usernameValidate, passwordValidate} from '../../helper/validate'
import toast from 'react-hot-toast'
import { resetPassword } from "../../helper/helper";
import { useAuthStore } from "../../Store/store";

const ForgotPassword = () => {
  const navigate = useNavigate()
  const { email} = useAuthStore(state => state.auth)
  const isLoading = false;

  const formik = useFormik({
    initialValues: {
     
        confirmpassword: '',
        password: ''

    },
    validate: (values) => {
      const errors = {};
  
      
  
      // Validate the 'password' field
      if (!values.password) {
        errors.password = toast.error('Password is required');
      } 
  


      // Validate the 'password' field
      if (!values.confirmpassword) {
        errors.confirmpassword = toast.error('Password is required');
      } 

      if(values.confirmpassword != values.password){
        errors = toast.error('Passwords Doesnt Match');
      }
  
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      let resetPromise = resetPassword( {email, password:values.password})
      toast.promise(resetPromise, {
        loading: 'Updating....!',
        success: <b> Reset Successful </b>,
        error: <b> Could not Reset Password</b>
      })
      
      resetPromise.then(function(){ navigate('/sign-in')})
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
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12"> Recovery Password  </h2>
        {/* <p className="text-light-3  smal-medium md:base-regular mt-2 "> To use Complex Trading enter your  details</p> */}


        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 w-full mt-4">

         
          <div className="">
            <label className="text-sm text-gray-600 font-normal">Password</label>
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="password"
              name="password"
              {...formik.getFieldProps('password')}
            />
          </div>

          <div className="">
            <label className="text-sm text-gray-600 font-normal">Confirm Password</label>
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="password"
              name="confirmpassword"
              {...formik.getFieldProps('confirmpassword')}
            />
          </div>

          <button className="shad-button_primary text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none text-center" type="submit">
            {isLoading ? (
              <div className="flex-center gap-2 text-center">
                <Loader /> Loading...

              </div>
            ) : "Forgot Password"}
          </button>
          <p className="text-small-regular text-light-3  text-center ">
           <Link to="/sign-in" className="text-black font-bold ml-1 "> Back</Link>
          </p>
        </form>
      </div>
    </div>


  )
}


export default ForgotPassword