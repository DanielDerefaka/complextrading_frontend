export const StrategicInvestmentCard = ({data}) => {
  return (
    <div className="flex justify-start items-center p-4 border-2 border-blue-300 w-full max-sm:justify-center">
      <img src={data.imgURL} alt={data.label} width={40} height={40}/>
      <h3 className="text-xl">{data.label}</h3>
    </div>
  )
}
