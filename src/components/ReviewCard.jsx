import { star } from "../assets/icons"

const ReviewCard = ({review}) => {
  return (
    <div className="flex gap-y-3 flex-col justify-center items-center text-center p-10 w-full">
        <div>
            <img src={review.imgURL} width={127} height={127} className="rounded-full"/>
        </div>
        <p className="text-lg text-slate-600">{review.feedback}</p>
        <div className="flex w-full items-center justify-center gap-x-3 py-1 my-0"><img src={star} alt="" width={25} height={25}/> {review.rating}</div>
        <h1 className="block text-2xl font-bold  text-red-600 my-0 py-0">{review.customerName}</h1>
    </div>
  )
}

export default ReviewCard