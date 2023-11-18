// import { useEffect } from "react"

const SliderCard = ({info, parseStateChangeFunc, currentLandingImg}) => {
   const handleClick = () => {
    if(currentLandingImg.imgURL != info.imgURL){
      parseStateChangeFunc({
          imgURL: info.imgURL,
          label: info.label,
          body: info.body
      })
    }
   }
  return (
    <div className={`rounded-2xl overflow-hidden relative ${info.imgURL === currentLandingImg.imgURL ? `border-2 border-red-600` : `border-2 border-blue-300` } max-md:h-32 max-md:w-32 max-sm:h-16 max-sm:w-16 max-h-52 max-w-[13rem] overflow-hidden`} onClick={() => {handleClick()}}>
        <div className="absolute z-5 w-full h-full top-0 bg-black" id="sliderCard"></div>
        <img src={info.imgURL} alt="" className="rounded-2xl object-cover h-full "/>
    </div>
  )
}

export default SliderCard