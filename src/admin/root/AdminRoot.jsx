import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Topbar from "../components/Topbar.jsx";
import LeftBar from "../components/LeftBar.jsx";
import BottomBar from "../components/BottomBar.jsx";
import RightSidebar from "../components/RightSidebar.jsx";

const AdminRoot = () => {
  return (
    <div className="w-full bg-gray-200 ">
      <Topbar />
      <main className="flex flex-row">
        <LeftBar/>
        <section className="main-container bg-gray-200">
      <div className="w-full max-w-4xl ">
        <Outlet/>

      </div>

        </section>

        {/* <RightSidebar/> */}
      </main>
      <BottomBar/>
    </div>
  );
};

export default AdminRoot;
