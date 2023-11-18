import React from 'react'

const PremiumPlan = () => {
  return (
    <div className="bg-white w-full md:pt-8 p-5 pt-9  rounded-sm border-[1px] border-gray-300 shadow-[0_4px_9px_-4px_#fcfdff] ">
        <h1 className="text-center font-bold text-heading4-medium"> Premium Plan </h1>
        <div className=" p-5">
            <p className="text-[25px] text-center"> 5 </p>
        </div>
        
        <div className="border-[1px] border-gray-200"/>
       <div className="flex justify-between text-[13px] mt-3">
        <p> Min Deposit</p>
        <p> - </p>
        <p> 100 USD</p>

       </div>
       <div className="flex justify-between text-[13px] mt-3">
        <p> Max Deposit</p>
        <p> - </p>
        <p> 1,500.00 USD</p>

       </div>
       <div className="flex justify-between text-[13px] mt-3">
        <p> Capital Return </p>
        <p> - </p>
        <p> End of Term</p>

       </div>

      <div className="text-center mt-5 ">
      <button className="text-center bg-black text-white p-2 cursor-pointer rounded-sm">
        Invest Now 
       </button>
      </div>
      </div>
  )
}

export default PremiumPlan