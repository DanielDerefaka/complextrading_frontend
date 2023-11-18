import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthJwt } from "./auth";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
// import {nameValidate, usernameValidate, passwordValidate} from '../../helper/validate'
import toast from "react-hot-toast";
import { updateUser } from "../../helper/helper";

const Profile = () => {
  const { username, name, email } = AuthJwt();
  const isLoading = false;
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      name: "",
      password: "",
    },
    validate: (values) => {
      const errors = {};

      // // Validate the 'email' field
      // if (!values.email) {
      //   errors.email = toast.error("Email is required");
      // } else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      // ) {
      //   errors.email = toast.error("Invalid email address");
      // }

      // // Name
      // if (!values.name) {
      //   errors.name = toast.error("Name is required");
      // }
      // // Username
      // if (!values.username) {
      //   errors.username = toast.error("Username is required");
      // }

      // // Validate the 'password' field
      // if (!values.password) {
      //   errors.password = toast.error("Password is required");
      // } else if (values.password.length < 6) {
      //   errors.password = toast.error(
      //     "Password must be at least 6 characters long"
      //   );
      // }
      return errors;
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let signupPromise = updateUser(values);
      toast.promise(signupPromise, {
        loading: "Checking.....",
        success: <b> Update Sucessfully.......!</b>,
        error: <b> Update User Failed ...</b>,
      });

      signupPromise.then(res => {
        localStorage.removeItem("token");
        navigate('/sign-in')
      })
    },
  });
  return (
    <section className="relative">
      <Toaster position="left-right" reverseOrder={false}></Toaster>
      <p className="text-[25px]"> Profile</p>
      {/* <div className="bg-white py-[15%]  h-20 rounded-md "></div> */}
      <br />
      <div className="flex md:flex-row  gap-5 flex-col ">
        <div className="bg-white w-full md:w-[600px] p-5 rounded-md  h-full">
          <div className="flex gap-3">
            <img
              src="../assets/images/userimg.png"
              alt="logo"
              className=""
              width={70}
              height={70}
            />
            <div>
              <p className="justify-start font-bold text-[20px] "> {name} </p>
              <p className="text-[12px] md:text-[15px] ">{email}</p>
            </div>
          </div>
          <div className=" mt-5">
            <button className="bg-black text-white p-2  w-full rounded-md font-bold text-[16px] ">
              <img
                src="/assets/thread/profile_white.svg"
                alt="profile"
                className="justify-end flex absolute md:ml-20 ml-16"
                width={20}
                height={25}
              />
              <p> Account</p>
            </button>
          </div>
        </div>
        <div className="bg-white  w-full p-5 rounded-md">
          <form onSubmit={formik.handleSubmit}>
            <div className=" ">
              <div className="flex justify-between">
                <div>
                  <p className="font-bold md:text-[20px] text-[17px] mt-2"> Accout Setting </p>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-white border-2 border-black text-black p-1 mt-1  w-full rounded-full px-7 font-bold md:text-[16px] text-[12px]"
                  >
                    Save
                  </button>
                </div>
              </div>
              <div className="border-[1px] mt-4 border-gray-200" />

              {/* Form */}

              <div className="flex flex-col md:flex-row  mt-10 sm:gap-2 md:gap-7 ">
                <div class="mb-4">
                  <label
                    for="input"
                    class="block text-gray-700 text-[14px] mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...formik.getFieldProps("name")}
                    placeholder={name}
                    class="  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                  />
                </div>
                <div class="mb-4">
                  <label
                    for="input"
                    class="block text-gray-700 text-[14px]  mb-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    {...formik.getFieldProps("username")}
                    placeholder={username}
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                  />
                </div>
              </div>
              <div class="mb-4">
                <label
                  for="input"
                  class="block text-gray-700 text-[14px]  mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  {...formik.getFieldProps("email")}
                  placeholder={email}
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                />
              </div>
              <div class="mb-4">
                <label
                  for="input"
                  class="block text-gray-700 text-[14px]  mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  {...formik.getFieldProps("password")}
                  placeholder="Enter a new Password"
                  class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="bg-white p-[20%] py-[20%] h-20 "> Hi</div> */}
    </section>
  );
};

export default Profile;
