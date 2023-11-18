import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sidebarLinks } from "../constants";

const LeftBar = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  
  
    function userLogout() {
      localStorage.removeItem("token");
      navigate("/sign-in");
    }
    
  return (
    <section className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive = location.pathname === link.route;

          return (
            <Link
              to={link.route}
              key={link.label}
              className={`leftsidebar_link ${isActive ? "bg-black text-white" : "text-black"}`}
            >
              <img src={isActive ? link.active : link.imgURL } alt={link.label} width={24} height={24} />
              <p className=" max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <div className="flex cursor-pointer gap-4 p-4" onClick={userLogout}>
          <img
            src="../assets/thread/logout_black.svg"
            alt="logo"
            className=""
            width={24}
            height={24}
          />
          <p className=" max-lg:hidden"> Logout</p>
        </div>
      </div>
    </section>
  );
};

export default LeftBar;
