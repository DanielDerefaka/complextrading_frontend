import React, { useRef } from "react";

const Referral = () => {
  const inputRef = useRef(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };
  return (
    <section className="relative">
      <div>
        <h1 className="text-heading4-medium "> Referral Activity </h1>
        <p className="text-gray text-[12px] mt-2">
          See who you've referred and statistic of your referrals
        </p>
        <div className="flex gap-5 md:flex-row flex-col w-full mt-5 bg-white">
          <table class="table-fixed w-full">
            <thead>
              <tr>
                <th>Username</th>
                <th>ID</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <th>Username</th>
                <th>ID</th>
              </tr>
            </thead>
          </table>
        </div>

        <div className=" bg-white w-full mt-10 p-4 border-[1px] border-gray-300">
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
              className="bg-black hover:bg-black text-white font-bold py-2  rounded"
              onClick={copyToClipboard}
            >
              <div className="flex gap-2">
                <img src="/assets/thread/copy.svg" width={15} height={15} className="md:ml-5 md:block hidden" alt="copy" />
                <p className="md:text-[15px] text-[12px] md:px-4 px-1"> Copy </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;
