import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { reviews } from '../Constants';
import ReviewCard from './ReviewCard';
import  angleLeft  from '../assets/icons/angleleft.svg';
import  angleRight  from '../assets/icons/angleRight.svg';

const TestimonialCarousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="testimonial-carousel relative">
      <Slider {...settings} ref={sliderRef}>
        {reviews.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <ReviewCard review={testimonial}/>
          </div>
        ))}
      </Slider>
      <button onClick={handlePrevClick} className='absolute left-2 bottom-[50%] bg-red-300 rounded-full p-3 shadow-lg hover:bg-red-900 focus:bg-red-600'>
        <img src={angleLeft} alt="" />
      </button>
      <button onClick={handleNextClick} className='absolute right-2 bottom-[50%] bg-red-300 rounded-full p-3 shadow-lg hover:bg-red-900 focus:bg-red-600'>
        <img src={angleRight} alt="" />
      </button>
    </div>
  );
};

export default TestimonialCarousel;
