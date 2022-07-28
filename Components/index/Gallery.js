import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import DataContext from "Base/DataContext";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/fontawesome-free-regular";

const Gallery = () => {

  const { gallery } = useContext(DataContext);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return <div className="flex flex-col gap-y-10 container mx-auto px-5 md:px-10 lg:px-0 my-8 lg:my-20">
    <h1 className="text-center text-sm font-extrabold lg:text-lg">
      {gallery?.title}
    </h1>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" ref={ref}>
      {gallery?.relatedItems?.images?.map((item) => (
        <div key={item.id} className={`cursor-pointer group ${inView && `animate-[rotate_${item?.id}s]`}`}>
          <div className="relative w-full h-[250px] lg:h-[350px]">
            <Image
              src={item?.relatedItems?.imageUrl}
              className="rounded-md object-cover"
              layout={'fill'}
            />
            <div className="absolute inset-0 group-hover:h-full bg-[#a9b50160] transition-[height] duration-[0.4s] ease-in-out overflow-hidden h-0 flex flex-col gap-y-8 items-center justify-center text-white text-lg">
              <FontAwesomeIcon icon={faEye} />
              <Link href={item?.title}>
                <a className="hover:font-bold">{item?.title}</a>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
};

export default Gallery;
