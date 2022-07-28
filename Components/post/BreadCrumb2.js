import Link from "next/link";

const BreadCrumb2 = () => {

  return <div className="flex gap-x-3 text-xs md:text-base bg-neutral-100 py-6 px-6 md:px-10 lg:px-44">
    <Link href="#">
      <a className="active:text-sky-600">خانه &larr;</a>
    </Link>
    <Link href="#">
      <a className="active:text-sky-600">بلاگ</a>
    </Link>
  </div>
};

export default BreadCrumb2;