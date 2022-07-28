import Link from "next/link";
import { useContext } from "react";
import DataContext from "Base/DataContext";

const Contact = () => {

  const { contactSection } = useContext(DataContext)

  return <div className="flex flex-col gap-y-5 lg:gap-y-10 items-center bg-[url('/images/10.png')] bg-cover bg-fixed bg-no-repeat py-10 px-5 md:px-8 lg:py-20 lg:px-96">
    <h1 className="font-bold text-sm lg:text-xl leading-6 text-justify">
      {contactSection?.title?.value}
    </h1>
    <p className="leading-9 text-justify text-xs lg:text-base lg:leading-10">
      {contactSection?.description?.value}
    </p>
    <Link href={contactSection?.anchorText?.title ?? '#'}>
      <a className="text-xs lg:text-lg">{contactSection?.anchorText?.value}</a>
    </Link>
  </div>
};

export default Contact;
