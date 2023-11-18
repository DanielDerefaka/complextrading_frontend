import React from "react";

const Payment = () => {
  return (
    <section>
      <div className="text-center ">
        <div>
        <h1 className="text-heading3-bold font-bold"> Make Your Payment </h1>
        <p className="mt-2 flex text-[14px] justify-center md:ml-60 ml-0 md:w-[400px] w-full">
          {" "}
          Your order 820276 has been placed successfully. To complete, please
          send the exact amount of BTC to the address below.
        </p>
        </div>

      </div>
      <div className=" md:w-[500px] w-full  bg-white p-5 mx-auto mt-10">
        <div className="flex justify-between">
            <p className="text-[15px] font-bold">Pay</p>
            <p className="text-gray-400 text-[12px]">Expire in 2:56:22</p>
        </div>

        <div className="border-[1px] p-0 border-gray-100 mt-4 w-full" />
        <div>
            
</div>
       </div>
    </section>
  );
};

export default Payment;
