import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import DataContext from "Base/DataContext";
import { Pagination } from "blog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendar } from "@fortawesome/fontawesome-free-solid";

const BlogMain = () => {

  const { posts } = useContext(DataContext)

  return <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-10 container mx-auto px-5 md:px-10 lg:px-0 my-8 lg:my-20">
    {posts?.map((item) => (
      <div key={item.id} className="border-2 border-t-gray-200 border-solid h-min">
        <div className="relative group w-full h-[250px] lg:h-[350px]">
          <Image
            src="/images/6.jpg"
            className="bg-cover"
            layout={'fill'}
          />
          <div className="absolute inset-0 group-hover:h-full bg-[#a9b50170] transition-[height] duration-[0.4s] ease-in-out overflow-hidden w-full h-0"></div>
        </div>
        <div className="flex flex-col gap-y-4 lg:gap-y-8 p-6 text-xs md:text-sm">
          <div className="flex gap-x-4">
            <div className="flex  items-center gap-x-2 md:gap-x-3 lg:gap-x-4 basis-[50%]">
              <FontAwesomeIcon icon={faBars} className="text-lime-600" />
              <h6>متن ساختگی</h6>
            </div>
            <div className="flex justify-end items-center gap-x-2 md:gap-x-3 lg:gap-x-4 basis-[50%]">
              <FontAwesomeIcon icon={faCalendar} className="text-[#AAB501]" />
              <span>{item?.relatedItems?.persianPublishedDate}</span>
            </div>
          </div>
          <Link href={item?.slug ?? '#'}>
            <a>{item?.title}</a>
          </Link>
          <p className="leading-10 text-justify">
            {item?.summary}
          </p>
          <Link href={item?.relatedItems?.hierarchySlug ?? '#'}>
            <a className="text-[#AAB501] text-left hover:text-[#666b1f]">
              {item?.relatedItems?.hierarchyTitle}
            </a>
          </Link>
        </div>
      </div>
    ))}
    <Pagination />
  </div>
};

export default BlogMain;
