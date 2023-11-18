import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik' 
import { useAuthStore } from "../../Store/store";
// import {nameValidate, usernameValidate, passwordValidate} from '../../helper/validate'
import toast from 'react-hot-toast'
import {getUser} from '../../helper/helper'

const Recovery = () => {

  const navigate = useNavigate()
  const isLoading = false;
  const setEmail  = useAuthStore(state => state.setEmail)
  // const email  = useAuthStore(state => state.auth.email)

  


  
  // useEffect(() => {
  //   console.log(email) 
  //   }, [])

  const formik = useFormik({
    initialValues: {
     
        email: ''

    },
    validate: (values) => {
      const errors = {};
  
      // Validate the 'recovery' field
      if (!values.email) {
        errors.email = toast.error('Recovery email is required');
      } else if (values.email.length < 1) {
        errors.email = toast.error('EmailMust be more than 1');
      }
  
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      values = await Object.assign(values)
     let recovery= getUser(values)
      toast.promise( recovery, {
        loading: "Checking.....",
        success: <b> Email Found.......!</b>,
        error: <b> User Not Found </b>
      })
      setEmail(values.email)
      recovery.then(function() {navigate('/otp')})
   
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
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12"> Recovery Email  </h2>
        {/* <p className="text-light-3  smal-medium md:base-regular mt-2 "> To use Complex Trading enter your  details</p> */}


        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5 w-full mt-4">

         
          <div className="">
            {/* <label className="text-sm text-gray-600 font-normal">OTP</label> */}
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
          </div>

          <button className="shad-button_primary text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none text-center" type="submit">
            {isLoading ? (
              <div className="flex-center gap-2 text-center">
                <Loader /> Loading...

              </div>
            ) : "Submit"}
          </button>
          <p className="text-small-regular text-light-3  text-center ">
           <Link to="/sign-in" className="text-black font-bold ml-1 "> Back</Link>
          </p>
        </form>
      </div>
    </div>


  )
}

export default Recovery