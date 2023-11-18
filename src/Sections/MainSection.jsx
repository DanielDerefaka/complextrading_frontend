import { useState } from "react"
import { sliderImg1 } from "../assets/images"
import Button from '../Components/Button'
import SliderCard from "../Components/SliderCard"
import { SliderImages } from "../Constants"

const MainSection = () => {
    const [landingImg, changeLandingImg] = useState({
        imgURL: sliderImg1,
        label: "Trade US Stocks and Options 24/7",
        body: "Stay responsive to market-shifting updates and trade a diverse portfolio of over 10,000 US Stocks and ETFs, along with US Equity  Index options, at your convenience."
    })
  return (
    <section className="w-full relative">
        <div className="w-full bg-black">
            <img src={landingImg.imgURL} alt="" className="w-full h-[110vh] object-cover"/>
            <div className="absolute z-5 w-full h-full top-0 bg-opacity-50 bg-black"></div>
            <div className="text-white text-start absolute z-10 top-0 flex flex-col items-center justify-center h-full px-8">
                <div>
                    <h1 className="text-heading2-bold  font-bold">{landingImg.label}</h1>
                    <p className="text-xl poppins font-bold pt-5 pb-10 md:w-[50%]">{landingImg.body}</p>
                   <button className="p-3 cursor-pointer px-5 font-bold border-2 hover:text-red hover:bg-white  hover:border-white border-red bg-red focus:bg-red-500 inline-block bg-opacity-100 ">
                    LEARN MORE
                   </button>
                </div>
            </div>
        </div>
        <div className="flex flex-row  cursor-pointer gap-7 absolute z-20 bottom-14 max-md:bottom-8 max-sm:bottom-11 right-10 px-4">
            {SliderImages.map((data,i) => {
                return (
                    <SliderCard  key={i} info={data} parseStateChangeFunc={(landingImg) => {changeLandingImg(landingImg)}} currentLandingImg={landingImg.imgURL}/>
                )
            })}
        </div>
    </section>
  )
}

export default MainSection