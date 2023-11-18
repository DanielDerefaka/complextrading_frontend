import Button from "../Components/Button"
import { awardWinningImg } from "../assets/images"

const Awards = () => {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 px-16 py-16 gap-10">
        <div className="rounded-2xl bg-black object-cover shadow-lg max-md:hidden block">
            <img src={awardWinningImg} height={1000} className="w-full h-full object-cover rounded-2xl bg-black"/>
        </div>
        <div className="flex flex-col justify-center items-start font-bold poppins text-start ">
            <h1 className="text-[25px] py-5">Award Winning <br /><span className="text-red-600">Investment</span> and Stock Broker</h1>
            <h1 className="text-lg font-normal poppins py-5 pb-10 text-slate-600">We provide automated trading services and facilities to our clients</h1>
            <button className="p-3 cursor-pointer px-5 font-bold border-2 bg-red text-white focus:bg-red-500 inline-block bg-opacity-100 ">
                  MORE ABOUT US
                   </button>
        </div>
        <div className="rounded-2xl bg-black object-cover shadow-lg max-md:block hidden">
            <img src={awardWinningImg} height={1000} className="w-full h-full object-cover rounded-2xl bg-black"/>
        </div>
    </section>
  )
}

export default Awards