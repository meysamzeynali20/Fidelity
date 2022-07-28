import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/fontawesome-free-solid";

const BreadCrumb = () => {
  
  return <div className="grid justify-items-center items-center h-[45vh] bg-[url('/images/3.jpg')] bg-fixed bg-cover bg-center ">
    <div className="flex flex-col items-center gap-y-8 text-white">
      <h3 className="font-bold text-base lg:text-2xl">متن ساختگی</h3>
      <div className="flex gap-x-8 text-sm lg:text-lg">
        <FontAwesomeIcon icon={faHome} />
        <span>مکان شما</span>
        <span>خانه</span>
        <Link href="#">
          <a className="text-[#AAB501]">بلاگ</a>
        </Link>
      </div>
    </div>
  </div>
};

export default BreadCrumb;
