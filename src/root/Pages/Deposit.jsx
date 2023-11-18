import React from "react";

const Deposit = () => {
  return (
    <section>
      <div className="text-center ">
        <h1 className="text-heading3-bold font-bold"> Deposit Funds </h1>
        <p className="mt-2 text-[14px]"> via Crypto Wallet</p>
        <p className="mt-2 text-[12px] text-gray-500">
          Send your payment direct to our wallet.
        </p>

        <form action="">

        <div className="mt-10 l">
           <div className= " flex md:justify-center  md:flex-row flex-col md:gap-2">
            <div>
            <label className="text-[13px] text-gray-600 font-normal mb-5">Amount to Deposit</label>  <br />
           <input
              className=" mt-1 shad-input font-inter md:w-[200px] w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-sm shadow-sm focus:outline-none"
              type="number"
              name="amount"
              placeholder="1.00"
              required
            />
            </div>
           <div>
           <label className="text-[13px] text-gray-600 font-normal mb-5">Currency</label>  <br />
            <input
              className="md:ml-4 ml-0 mt-1 shad-input font-inter md:w-[200px] w-full px-4 py-2 text-gray-700 text-sm bg-white border border-gray-300 rounded-sm shadow-sm focus:outline-none"
              type="text"
              name="amount"
              placeholder="USD"
              required
             
            />
           </div>
           </div>
            <br />
            {/* <p className=" text-gray-300 text-[10px]">1 USD = 0.00005938 BTC</p> */}
            <button  className="mt-5 bg-black md:w-[416px] w-full text-white font-semibold py-2 px-4 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-101 focus:outline-none text-center" type="submit">
            Deposit
          </button>
          </div>
          </form>
      </div>
    </section>
  );
};

export default Deposit;
