import React, { useState } from "react";

const AdminTransaction = () => {
  const [isIncoming, setIsIncoming] = useState(false);

  const handleIncomingClick = () => {
    setIsIncoming(true);
  };

  const handleOutgoingClick = () => {
    setIsIncoming(false);
  };

  // const outgoing = false;

  return (
    <div>
      <h1 className="text-heading2-semibold"> Transactions History</h1>
      <p className="text-[15px] text-gray">
        {" "}
        List of transaction in your account
      </p>
      <div className="flex gap-10 mt-7 border-b-2 border-gray-300">
        <button
          className="  text-black py-2 focus:border-b-2 border-black "
          onClick={handleIncomingClick}
        >
          Withdraw
        </button>
        <button
          className="  text-black py-2 focus:border-b-2 border-black "
          onClick={handleOutgoingClick}
        >
          Deposit
        </button>
      </div>
      <div className="mt-3">
        <p>All Transactions</p>
        <div className="">
          {isIncoming ? (
            <div>
            <div className="mt-5 bg-white w-full p-2 px-5 py-5 border-[1px] border-gray-400">
            Incoming
          </div>
            <div className="mt-1 bg-white w-full p-2 px-5 py-5 border-[1px] border-gray-400">
            Incoming
          </div>

          </div>
          ) : (
            <div>
              <div className="mt-5 bg-white w-full p-2 px-5 py-5 border-[1px] border-gray-400">
              Outgoing
            </div>
              <div className="mt-1 bg-white w-full p-2 px-5 py-5 border-[1px] border-gray-400">
              Outgoing
            </div>

            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminTransaction;
