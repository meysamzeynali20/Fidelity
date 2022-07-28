import Image from "next/image";
import { useContext } from "react";
import DataContext from "Base/DataContext";

const About = () => {

  const { aboutSection } = useContext(DataContext)

  return <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-[10%] container mx-auto px-5 md:px-10 lg:px-0 my-8 lg:my-20">
    <div className="flex flex-col gap-y-6 lg:gap-y-10 basis-[60%]">
      <h1 className="font-bold text-xs md:text-base">
        {aboutSection?.title?.value}
      </h1>
      <p className="text-justify leading-10 md:leading-10 lg:leading-10 text-xs md:text-sm lg:text-base">
        {aboutSection?.description?.value}
      </p>
    </div>
    <div className="relative w-full lg:basis-[40%] h-[200px] md:h-[400px] lg:h-[500px]">
      <Image
        src={aboutSection?.image?.relatedItems?.fileUrl}
        className="rounded-md object-cover hover:grayscale "
        layout={'fill'}
      />
    </div>
  </div>
};

export default About;
