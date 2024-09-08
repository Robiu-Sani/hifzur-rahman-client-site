import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import useQuote from "../customHooks/useQuote";

export default function QuetSection() {
  const { quotes } = useQuote();
  return (
    <div className="w-full xl:w-[1000px] py-10 mx-auto px-3">
      <div className="w-full py-7">
        <div className="flex mb-5 mx-auto flex-col w-[220px] gap-1">
          <h3 className="text-center uppercase font-bold text-xl text-[#c78960]">
            Quots
          </h3>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {quotes.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="w-full flex flex-col justify-center items-center">
                <FaQuoteLeft className="text-[100px] mt-4 text-center" />
                <p className="text-center w-[80%] my-5">{review.quote}</p>
                <h3 className="text-2xl font-bold text-orange-500">
                  {review.speaker}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
