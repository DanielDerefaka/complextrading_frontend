import Button from "../Components/Button"
import { map2 } from "../assets/images"

const MapSection = () => {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <div className="flex flex-col justify-center items-start font-bold poppins text-start ">
            <h1 className="text-[25px] py-5">Uncover a World of <span className="text-red-600">Possibilities</span></h1>
            <h1 className="text-lg font-normal poppins py-5 pb-10 text-slate-600">Diversify your investments globally, spanning stocks, options, futures, currencies, bonds, and funds, all through a unified platform. Fund your account in multiple currencies and trade assets in various currencies. Access market data round the clock, six days a week.</h1>
            <Button label={"Global Market"} rounded shadow bg_color={"bg-white"} text_color={'text-red-900'}/>
        </div>
        <div className="rounded-2xl bg-white object-cover shadow-xl">
            <img src={map2} height={1000} className="w-full h-full object-cover rounded-2xl bg-black"/>
        </div>
    </section>
  )
}

export default MapSection