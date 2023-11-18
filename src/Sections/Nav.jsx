import React, { useState, useEffect, useRef } from "react";
import favicon from "/favicon.png";
import Button from "../Components/Button";
import { hamburger } from "../assets/icons";
import SmNav from "../Components/smNav";
import LgNav from "../Components/lgNav";
import { Link, useNavigate } from "react-router-dom";
import { AuthJwt } from "../root/Pages/auth";

const Nav = () => {
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
  const { username, name, email } = AuthJwt();
  const [smNavCurrentState, setsmNavCurrentState] = useState(false);
  const [lgNavCurrentState, setlgNavCurrentState] = useState(false);
  return (
    <section>
      <nav className="flex justify-between items-center px-16 py-8 max-sm:px-5 gap-y-0">
        <div>
          <a href="/" className="cursor-pointer flex flex-row gap-4">
            <img src={favicon} alt="" width={45} height={50} />
            <h3 className=" text-[20px] font-bold text-black">
              Complex Trading
            </h3>
          </a>
        </div>
        <div className="max-xl:hidden block">
          <ul className="flex flex-row gap-8 font-bold poppins">
            <li className="px-4 py-2 rounded-xl flex items-center justify-center">
              <a href="">Home</a>
            </li>
            <li className="px-4 py-2 rounded-xl flex items-center justify-center">
              <a href="">About</a>
            </li>
            <li className="px-4 py-2 rounded-xl flex items-center justify-center">
              <a href="#services">Services</a>
            </li>
            <li className="px-4 py-2 rounded-xl flex items-center justify-center">
              <a href="">Contact</a>
            </li>
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
                      to="/profile"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Dashboard
                    </Link>
                    <Link
                     onClick={userLogout}
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
        </div>
        <div className="max-xl:block hidden max-sm:hidden">
          <ul className="flex flex-row gap-8 font-bold poppins">
            <li>
              {" "}
              <Link to="/sign-in">
                <button className="p-3 cursor-pointer px-5 font-bold border-4 hover:bg-red hover:text-white border-red inline-block bg-opacity-100 w-full">
                  {" "}
                  LOGIN{" "}
                </button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button className="p-3 cursor-pointer px-5 font-bold border-4 border-red text-white hover:bg-white hover:text-red bg-red inline-block bg-opacity-100 w-full">
                  {" "}
                  OPEN ACCOUNT{" "}
                </button>
              </Link>
            </li>

            <img
              src={hamburger}
              alt=""
              width={24}
              height={24}
              onClick={() => {
                if (lgNavCurrentState) {
                  setlgNavCurrentState(false);
                } else {
                  setlgNavCurrentState(true);
                }
              }}
            />
          </ul>
        </div>
        <div className="max-sm:block hidden">
          <ul className="flex flex-row gap-8 font-bold poppins">
            <img
              src={hamburger}
              alt=""
              width={24}
              height={24}
              onClick={() => {
                if (smNavCurrentState) {
                  setsmNavCurrentState(false);
                } else {
                  setsmNavCurrentState(true);
                }
              }}
            />
          </ul>
        </div>
      </nav>
      <div
        className={`my-4 bg-gray-100 p-4 ${
          smNavCurrentState ? "navAnimation block" : "goback hidden"
        }`}
      >
        <SmNav />
      </div>
      <div
        className={`my-5 bg-gray-100 p-4 ${
          lgNavCurrentState ? "navAnimation block" : "goback hidden"
        }`}
      >
        <LgNav />
      </div>
    </section>
  );
};

export default Nav;
