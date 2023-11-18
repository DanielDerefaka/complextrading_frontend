import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import LeftBar from "../components/LeftBar";
import BottomBar from "../components/BottomBar";
import RightSidebar from "../components/RightSidebar";

const RootLayout = () => {
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

export default RootLayout;
