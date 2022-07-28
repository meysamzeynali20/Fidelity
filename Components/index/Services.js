import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import DataContext from "Base/DataContext";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Services = () => {

  const { slideshows } = useContext(DataContext);
  const servicesSlideShow = slideshows.find(
    (i) => i.key === "services"
  );
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return <section ref={ref} className="bg-[url('/images/dotbackground.png')]">
    <Swiper
      className={`container mx-auto ${inView ? "animate-[lazyLoading_0.5s_ease-in-out] opacity-[1]" : "opacity-[0]"}`}
      slidesPerView="auto"
      loop={true}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {servicesSlideShow?.relatedItems?.banners?.map((item) => (
        <SwiperSlide
          key={item?.id}
          className="flex flex-col gap-y-8 items-center justify-center py-10"
        >
          <div className="relative w-full h-[100px]">
            <Image
              src={item?.relatedItems?.imageUrl}
              className="object-contain"
              layout={'fill'}
            />
          </div>
          <h2 className="h-6 overflow-hidden">
            <a className="text-[#AAB501] font-bold text-xs md:text-base">
              {item?.title}
            </a>
          </h2>
          <div>
            <p className="text-center text-xs leading-10  md:text-sm md:leading-10 h-10 overflow-hidden">
              {item?.subTitle}
            </p>
          </div>
          <div className="h-6 overflow-hidden">
            <Link href={item.url ?? '#'}>
              <a className="text-sm md:text-base">{item?.anchorText}</a>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
};

export default Services;
