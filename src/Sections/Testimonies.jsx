import { clutch, star } from "../assets/icons"
import TestimonialCarousel from "../Components/TestimonialCarousel"

const Testimonies = () => {
    // new Scroller(document.getElementById('scroller'), document.getElementById('scrollForward'), document.getElementById('scrollBackward')).main()
  return (
    <section className="flex flex-row max-md:flex-col gap-10">
        <div className="w-[40%] max-md:w-full bg-[#240b24] px-10 py-20 rounded-xl flex justify-center items-start flex-col">
            <h3 className="text-[#6366f1] text-[30px] font-medium">
                1250+
            </h3>
            <p className="text-white text-[20px] mt-2 mb-12">Clients Already Served</p>
            <div className="inline-flex gap-8 py-5 px-7 my-2 bg-[#651f6b] flex-row rounded-lg shadow-lg">
                <div className="flex flex-col gap-3 text-white">
                    <h3>REVIEWED ON</h3>
                    <img src={clutch} alt="clutch" width={90} />
                </div>
                <div className="flex flex-col items-stretch justify-center text-gray-400 gap-2">
                    <div className="flex">
                        <img src={star} alt="" width={25} height={25} />
                        <img src={star} alt="" width={25} height={25} />
                        <img src={star} alt="" width={25} height={25} />
                        <img src={star} alt="" width={25} height={25} />
                        <img src={star} alt="" width={25} height={25} />
                    </div>
                    <h3>49 Reviews</h3>
                </div>
            </div>
        </div>
        <div className="flex flex-col w-[60%] max-md:w-full p-6 bg-white rounded-xl shadow-lg">
            <h3 className="text-[25px] font-monospace text-center font-bold">
            What Our <span className="text-red-500">
            Customers
            </span> Say?
        </h3>
        <p className="text-center text-slate-500">Hear genuine stories from our satisfied customers about thei exceptional experiences with us.</p>
        <div className="gap-16 p-5 items-center relative overflow-x-hidden" id="scroller">
            <TestimonialCarousel />
        </div>
        </div>
    </section>
  )
}

export default Testimonies