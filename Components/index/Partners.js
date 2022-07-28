import Image from "next/image";
import { useContext } from "react";
import DataContext from "Base/DataContext";
import { useInView } from "react-intersection-observer";

const Partners = () => {

  const { slideshows } = useContext(DataContext);
  const partners = slideshows.find((i) => i.key === "partners");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return <div className="flex flex-col gap-y-10 container mx-auto px-5 md:px-10 lg:px-0 my-8 lg:my-20">
    <h1 className="text-center font-bold text-sm text-[#AAB501] md:text-base lg:text-xl mt-[5%]">
      {partners?.title}
    </h1>
    <ul ref={ref} className={`grid grid-cols-2 justify-items-center lg:flex lg:justify-center gap-10 md:gap-20 ${inView ? "animate-[slideRightToLeft_0.9s] opacity-1" : "opacity-0"}`}>
      {partners?.relatedItems?.banners?.map((item) => (
        <li key={item.id} className='relative w-[75px] h-[75px] md:w-[95px] md:h-[95px] lg:w-[120px] lg:h-[120px]'>
          <Image
            src={`${item?.relatedItems?.imageUrl}`}
            className="object-contain hover:grayscale"
            layout={'fill'}
          />
        </li>
      ))}
    </ul>
  </div>
};

export default Partners;
