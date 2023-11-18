const Button = ({label, imgURL, bg_color, text_color, rounded, shadow, fullWidth}) => {
  return (
    <div className={`p-3 cursor-pointer px-5 font-bold border-2 border-red-800 hover:bg-red-700 focus:bg-red-500 inline-block bg-opacity-100 ${bg_color ? bg_color : `bg-red-600`} ${text_color ? text_color : `text-white`} ${rounded && `rounded-xl`} ${shadow && `shadow-lg`} ${fullWidth && 'max-sm:w-full block'}`}>
        {label}
        {imgURL ? `<img src="${imgURL}" />` : ''}
    </div>
  )
}

export default Button