import Button from "./Button"
import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthJwt } from "../root/Pages/auth";

const SmNav = () => {
  const { username, name, email } = AuthJwt();
  const navigate = useNavigate()
  
  function userLogout() {
    localStorage.removeItem("token");
    navigate("/sign-in");
  }

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section className="text-black cursor-pointer">
        <ul className={`flex flex-col gap-4 font-bold poppins text-center`}  id="nav3">
            <li className='px-4 py-2'><a href="">Home</a></li>
            <li className='px-4 py-2'><a href="">About</a></li>
            <li className='px-4 py-2'><a href="">Contact</a></li>
            <li className='px-4 py-2'><a href="#services">Services</a></li>
            {username ? (
              <div className="hidden md:flex relative group" ref={dropdownRef}>
                <button className="focus:outline-none" onClick={toggleDropdown}>
                  <div className="flex flex-1 gap-2">
                    <img
                      src="../assets/images/userimg.png"
                      alt="logo"
                      className=""
                      width={50}
                      height={50}
                    />
                    <p className="text-[20px] font-bold mt-1">{name}</p>
                  </div>
                </button>

                {isDropdownOpen && (
                  <div className="absolute text-center right-0 mt-[35%] bg-white border rounded-md shadow-md w-[200px]">
                    <Link
                      to="/dropdown-item1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dropdown-item1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/dropdown-item2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                     Logout
                    </Link>
                    {/* Add more dropdown items as needed */}
                  </div>
                )}
              </div>
            ) : (
              <>
                <li>
                  <Link to="/sign-in">
                    <button className="p-3 cursor-pointer px-5 font-bold border-4 hover:bg-red hover:text-white border-red inline-block bg-opacity-100">
                      LOGIN
                    </button>
                  </Link>
                </li>
                <li>
                  <Link to="/sign-up">
                    <button className="p-3 cursor-pointer px-5 font-bold border-4 border-red text-white hover:bg-white hover:text-red bg-red inline-block bg-opacity-100">
                      OPEN ACCOUNT
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
    </section>
  )
}

export default SmNav