const SpecialBenefitsCard = ({data}) => {
  return (
    <div className="flex flex-col  bg-[#bfdbfe] text-black gap-4 text-center underline-none p-4 rounded-xl shadow-sm justify-start items-center">
        <div>
            <img src={data.imgURL} alt={data.label} width={30} height={30} />
        </div>
        <div className="font-bold font-poppins text-dark">
            <h1 className="text-xl py-2 underline-none">{data.label}</h1>
            <p>{data.body}</p>
        </div>
    </div>
  )
}

export default SpecialBenefitsCard