import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthJwt } from "../root/Pages/auth";

const Topbar = () => {
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
    <nav className="topbar">
      <Link to="/" className="flex items-center gap-4">
        <img
          src="../assets/images/favicon.png"
          alt="logo"
          className=""
          width={50}
          height={50}
        />
       
        <p className="text-[25px] font-bold max-xs:hidden"> Complex Trading </p>
      </Link>

      <div className="flex items-center gap-1 ">
        <div className="block md:hidden ">
          <div className="flex cursor-pointer" onClick={userLogout}>
            <img
              src="../assets/thread/logout_black.svg"
              alt="logo"
              className=""
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>

      

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
          <div className="absolute right-0 mt-[40%] bg-white border rounded-md shadow-md w-[200px]">
            <Link
              to="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
             Home
            </Link>
            {/* <Link
              to="/dropdown-item2"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Dropdown Item 2
            </Link> */}
            {/* Add more dropdown items as needed */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topbar;
