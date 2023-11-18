import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../Store/store";
import useFetch from "../../hook/fetchhook";
import { AuthJwt } from "./auth";
import DropdownButton from "../../components/DropdownButton";
import TradingViewWidget from "../../components/tradeview";
import RecentActivity from "../../components/RecentActivity";




const Dashboard = () => {
  const { username, name, email } = AuthJwt();
  const [isLoading, apiData, serverError] = useFetch(); // Pass 'user' as the query
  const navigate = useNavigate();

  const inputRef = useRef(null);

  // Copy

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  function userLogout() {
    localStorage.removeItem("token");
    navigate("/sign-in");
  }

  return (
    <section className="relative ">
      {/* <div className="bg-white py-[15%]  h-20 rounded-md "></div> */}
      <div className="grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-1 gap-10  ">
        <div className="bg-white w-full h-[150px] md:pt-8 p-5 pt-9  rounded-md shadow-[0_4px_9px_-4px_#fcfdff] ">
          <h2 className="md:text-[18px]  text-[15px] ">Available Balance</h2>
          <div className="flex gap-2 mt-3 font-bold md:text-[25px] xl:text-[20px] text-[25px] ">
          <p className=""> 0 </p> <p>USD</p>
          <div className="ml-[250px] md:ml-[100px] mt-5 ">
          <img src="/assets/icons/Wallet.svg" alt="wallet" width={40} height={40} />
          </div>
          </div>
        </div>
        <div className="bg-white w-full h-[150px] md:pt-8 p-5 pt-9  rounded-md shadow-[0_4px_9px_-4px_#fcfdff] ">
          <h2 className="md:text-[18px]  text-[15px] ">Referral Balance</h2>
          <div className="flex gap-2 mt-3 font-bold md:text-[25px] xl:text-[20px] text-[25px]">
          <p className=""> 0 </p> <p>USD</p>
          <div className="ml-[250px] md:ml-[100px] mt-5 ">
          <img src="/assets/icons/broken.svg" alt="wallet" width={40} height={40} />
          
          </div>
         {/* <DropdownButton/> */}
          </div>
        </div>
        <div className="bg-white w-full h-[150px] md:pt-8 p-5 pt-9  rounded-md shadow-[0_4px_9px_-4px_#fcfdff] ">
          <h2 className="md:text-[18px]  text-[15px] ">Total Withdraw</h2>
          <div className="flex gap-2 mt-3 font-bold md:text-[25px] xl:text-[20px] text-[25px]">
          <p className=""> 0 </p> <p>USD</p>
          <div className="ml-[250px] md:ml-[100px] mt-5 ">
          <img src="/assets/icons/request.svg" alt="wallet" width={40} height={40} />
          </div>
          </div>
        </div>
        
       

      </div>
      <br />
      <div className="grid grid-cols-2 max-lg:grid-cols-2 max-md:grid-cols-3 max-sm:grid-cols-1 w-full  gap-10">
        
        <div className=" w-[100%]  h-[400px]">
        <TradingViewWidget/>
        </div>
        <div className="bg-white  p-5 "> 
        <div>
          <p className="font-bold"> Recent Activities</p>
        </div>
        <div>
          <RecentActivity className="w-full"/>
          {/* <RecentActivity/> */}
        </div>
        </div>
       
      </div>
       {/* <div className="bg-white p-[20%] py-[20%] h-20 "> Hi</div> */}

       <div className=" bg-white w-full  mt-10 p-5 border-[1px] border-gray-300">
          <p className="text-heading4-medium"> Refer & Earn </p>
          <p className="text-gray text-[12px] mt-2 mb-4">
            See who you've referred and statistic of your referrals
          </p>
          <div className="flex">
            <input
              ref={inputRef}
              className="flex-grow mr-2 border-[1px] border-gray-300 py-2 px-4 focus:outline-none"
              type="text"
              id="copyLinkInput"
              value="https://example.com/share/your-link"
              readOnly
            />
            <button
              className="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded"
              onClick={copyToClipboard}
            >
              <div className="flex gap-2">
                <img src="/assets/thread/copy.svg" className="hidden md:block" width={15} height={15} alt="copy" />
                <p className="md:text-[15px] text-[12px]"> Copy </p>
              </div>
            </button>
          </div>
        </div>
    </section>
  );
};

export default Dashboard;
