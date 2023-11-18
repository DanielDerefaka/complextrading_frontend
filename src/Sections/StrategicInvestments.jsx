import Button from "../Components/Button"
import { StrategicInvestmentCard } from "../Components/StrategicInvestmentCard"
import { strategicInvestment } from "../Constants"
import { strategicInvestmentImg } from "../assets/images"

const StrategicInvestments = () => {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
        <div className="flex flex-col justify-center items-start font-bold poppins text-start ">
            <h1 className="text-[30px] py-5">Strategic <span className="text-red-600">Investments</span></h1>
            <h1 className="text-lg font-normal poppins py-5 pb-10 text-slate-600">We Set goals of achieving a specific strategic objective, such as expanding into a new market, acquiring a new technology or product, or building a new distribution channel.</h1>
           <div className="flex w-full justify-center items-center">
           <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-0 pb-8 w-full">
                {strategicInvestment.map(data => {
                    return(
                        <StrategicInvestmentCard key={data.label} data={data} />
                    )
                })}
            </div>
           </div>
            <Button label={"Contact Us"} rounded shadow bg_color={"bg-white"} text_color={'text-red-900'}/>
        </div>
        <div className="rounded-2xl bg-white object-cover shadow-xl">
            <img src={strategicInvestmentImg} height={1000} className="w-full h-full object-cover rounded-2xl bg-black"/>
        </div>
    </section>
  )
}

export default StrategicInvestments