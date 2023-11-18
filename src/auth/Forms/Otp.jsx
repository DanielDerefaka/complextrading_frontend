import { Link, useNavigate} from "react-router-dom";
import { useState, useEffect} from "react";
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik' 
// import {nameValidate, usernameValidate, passwordValidate} from '../../helper/validate'
import toast from 'react-hot-toast'
import { useAuthStore } from "../../Store/store";
import {verifyOTP, generateOTP} from '../../helper/helper'


const Otp = () => {
  const {email} = useAuthStore(state => state.auth)
  const [OTP, setOTP] = useState('')
  const isLoading = false;
  const navigate = useNavigate()

  useEffect(() => {
    generateOTP(email).then((OTP) => {
      if(OTP) return toast.success('OTP has been sent to your email');
      return toast.error('Error while generating Otp')
    })
  }, [email])
  


async function onSubmit(e){
  e.preventDefault();

 try {

  let {status} = await verifyOTP({email, code: OTP})
  if(status === 201){
    toast.success('Verify Sucessfully')
    navigate('/forgot-password')
  }
  
 } catch (error) {
  return toast.error('Wrong OTP! ')
 }
}


function resendOTP () {
  let sendPromise = generateOTP(email);
  toast.promise(sendPromise, {
    loading: 'Sending....!',
    success: <b> OTP has been sent to your email</b>,
    error: <b> Could not send OTP</b>
  })


  sendPromise.then(OTP => {
    console.log(OTP)
  })
}


  return (
    <div>
      <Toaster position="top-center" reverseOrder={false}>
      </Toaster>

      <div className="sm:w-420 flex-center flex-col ">
        <div className="flex-center flex-row">
          <img src="/assets/images/favicon.png" alt="logo" className="w-[50px]" />
          <h2 className="font-bold font-inter"> Complex Trading </h2>
        </div>
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12"> OTP VERIFICATION  </h2>
        {/* <p className="text-light-3  smal-medium md:base-regular mt-2 "> To use Complex Trading enter your  details</p> */}


      <form onSubmit={onSubmit} className="flex flex-col gap-5 w-full mt-4">

         
          <div className="">
            {/* <label className="text-sm text-gray-600 font-normal">OTP</label> */}
            <input
              className="shad-input font-inter w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-500 focus:bg-white"
              type="number"
              name="otp"
              placeholder="OTP"
              onChange={(e) => setOTP(e.target.value)}
            />
          </div>

          <button className="shad-button_primary text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none text-center" type="submit">
            {isLoading ? (
              <div className="flex-center gap-2 text-center">
                <Loader /> Loading...

              </div>
            ) : "Verify"}
          </button>
         
        </form>
        <div className="text-center py-4">
              <span className="text-gray-500">Cant get OTP? <button className="font-bold" onClick={resendOTP}>Resend Otp </button></span>
          </div>
          <p className="text-small-regular text-light-3  text-center ">
           <Link to="/sign-in" className="text-black font-bold ml-1 "> Back</Link>
          </p>
      </div>
    </div>


  )
}

export default Otp