import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SigninForm from './auth/Forms/SigninForm'
import SignupForm from './auth/Forms/SignupForm'
import Dashboard from "./root/Pages/Dashboard";
import Landing from "./root/Pages/Landing";
import RootLayout from "./root/RootLayout";
import AdminRoot from "./admin/root/AdminRoot";
import AuthLayout from "./auth/Forms/AuthLayout"
import "./globals.css";
import Otp from "./auth/Forms/Otp";
import ForgotPassword from "./auth/Forms/ForgotPassword";
import Recovery from "./auth/Forms/Recovery";
import {AuthorizeUser} from './middleware/auth'
import Transaction from "./root/Pages/Transaction";
import Invest from "./root/Pages/Invest";
import Referral from "./root/Pages/Referral";
import Profile from "./root/Pages/Profile";
import Test from "./root/Pages/test";
import './landing.css'
import Deposit from "./root/Pages/Deposit";
import Withdraw from "./root/Pages/Withdraw";
import SignupAdmin from "./admin/auth/Signup";
import SigninAdmin from "./admin/auth/Signin";
import Admin_Dashboard from "./admin/root/Pages/Admin_Dashboard";
import Admin_Transaction from "./admin/root/Pages/Admin_Transactions";
import Payment from "./root/Pages/Payment";


function App() {
  return (
    <main className="flex h-screen">
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout/>}>
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/sign-up" element={<SignupForm />} />
        <Route path="/admin/sign-up" element={<SignupAdmin />} />
        <Route path="/admin/sign-in" element={<SigninAdmin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/recovery" element={<Recovery />} />
      </Route>
        <Route index element={<Landing />} />

      {/* Private Routes */}
      <Route element={<AuthorizeUser><RootLayout /></AuthorizeUser>}>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/transactions" element={<Transaction/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/referral" element={<Referral/>} />
        <Route path="/invest" element={<Invest/>} />
        <Route path="/test" element={<Test/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/deposit/payment" element={<Payment/>} />

      </Route>

{/* Admin Routes */}
      <Route element={<AuthorizeUser><AdminRoot /></AuthorizeUser>}>
          <Route path="/admin/dashboard" element={<Admin_Dashboard/>} />
          <Route path="/admin/transactions" element={<Admin_Transaction/>} />
    

        
        
        
      </Route>
    </Routes>
    </main>
  );
}

export default App;
