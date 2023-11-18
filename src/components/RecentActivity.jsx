import React from "react";

const RecentActivity = () => {
  return (
    <div className=" w-full ">
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <div className="flex flex-row gap-5 mt-5">
          <img
            src="/assets/thread/deposit_black.svg"
            alt="logo"
            width={25}
            height={25}
            className=""
          />

          <div className=" flex gap-[140px] justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-[15px]"> Withdrawal </p>
              <p className="text-[12px] font-normal">2023-09-02 10:57:39</p>
            </div>

            <div>
              <p className="font-semibold text-red"> - 2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          <img
            src="/assets/thread/deposit_black.svg"
            alt="logo"
            width={25}
            height={25}
            className=""
          />

          <div className=" flex gap-[140px] justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-[15px]"> Deposit </p>
              <p className="text-[12px] font-normal">2023-09-02 10:57:39</p>
            </div>

            <div>
              <p className="font-semibold text-green-600"> + 2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          <img
            src="/assets/thread/deposit_black.svg"
            alt="logo"
            width={25}
            height={25}
            className=""
          />

          <div className=" flex gap-[140px] justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-[15px]"> Withdrawal </p>
              <p className="text-[12px] font-normal">2023-09-02 10:57:39</p>
            </div>

            <div>
              <p className="font-semibold text-red"> - 2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          <img
            src="/assets/thread/deposit_black.svg"
            alt="logo"
            width={25}
            height={25}
            className=""
          />

          <div className=" flex gap-[140px] justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-[15px]"> Deposit </p>
              <p className="text-[12px] font-normal">2023-09-02 10:57:39</p>
            </div>

            <div>
              <p className="font-semibold text-green-600"> + 2</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-5 mt-5">
          <img
            src="/assets/thread/deposit_black.svg"
            alt="logo"
            width={25}
            height={25}
            className=""
          />

          <div className=" flex gap-[140px] justify-between">
            <div className="flex flex-col">
              <p className="font-bold text-[15px]"> Withdrawal </p>
              <p className="text-[12px] font-normal">2023-09-02 10:57:39</p>
            </div>

            <div>
              <p className="font-semibold text-red"> - 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
