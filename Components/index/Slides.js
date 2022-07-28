import { useContext } from "react";
import DataContext from "Base/DataContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Slides = () => {

  const { slideshows } = useContext(DataContext);
  const topSlideShow = slideshows.find((i) => i.key === "hero");

  return <div>
    <Swiper
      navigation={true}
      modules={[Navigation]}
      loop={true}
      slidesPerView="auto"
      className="mySwiper"
    >
      {topSlideShow?.relatedItems?.banners?.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="grid lg:block h-[45vh] md:h-[65vh] lg:h-[90vh]">
            <img
              src={item?.relatedItems?.imageUrl}
              className="object-cover w-full h-full lg:object-top brightness-[40%]"
            />
            <div
              className={`absolute flex flex-col gap-y-6 max-w-[80%] lg:max-w-[20%] overflow-hidden lg:gap-y-10 self-center justify-self-center lg:left-[10%] ${item?.title?.length > 100 ? "lg:top-[15%]" : "lg:top-[45%]"} text-center animate-[slideBottomToTop_0.5s_ease-in-out]`}
            >
              <h1 className="text-white text-xs md:text-lg lg:text-4xl lg:leading-loose font-bold">
                {item?.title}
              </h1>
              <p className="text-white text-xs md:text-base lg:text-lg leading-8 lg:leading-10 text-center">
                {item?.shortDescription}
              </p>
              <div className="justify-self-center">
                <button className="border border-white text-xs lg:text-base rounded text-white py-2 px-6 md:py-4 md:px-12">
                  {item?.anchorText}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
};

export default Slides;