import { useContext } from "react";
import DataContext from "Base/DataContext";
import FooterLinks from "./share/FooterLinks";

const Footer = () => {

  const { linkGroups, footerTextStatics } = useContext(DataContext);
  const FooterTitle = footerTextStatics.find((i) => i.key === 'FooterTitle')
  const FooterDescription = footerTextStatics.find((i) => i.key === 'FooterDescription')
  const quickaccess = linkGroups.find((i) => i.key === 'quickaccess')
  const morecontent = linkGroups.find((i) => i.key === 'morecontent')

  return <footer className="container mx-auto px-5 md:px-10 lg:px-0 my-8 lg:my-20">
    <hr />
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-[5%] my-[10%] md:my-[5%] lg:my-[2%] text-xs lg:text-base">
      <div className="flex flex-col col-span-full lg:col-start-1 lg:col-end-1 gap-y-6 lg:gap-y-10 items-center">
        <h2 className="font-bold text-sm lg:text-xl">{FooterTitle?.value}</h2>
        <p className="text-justify leading-10">
          {FooterDescription?.value}
        </p>
      </div>
      <div className="flex flex-col lg:col-start-2 lg:col-end-2 gap-y-6 lg:gap-y-10 items-center">
        <FooterLinks linkGroup={quickaccess} />
      </div>
      <div className="flex flex-col lg:col-start-3 lg:col-end-3 gap-y-6 lg:gap-y-10 items-center">
        <FooterLinks linkGroup={morecontent} />
      </div>
    </div>
  </footer>
};

export default Footer;
