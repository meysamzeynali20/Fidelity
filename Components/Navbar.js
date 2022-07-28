import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import DataContext from "Base/DataContext";
import Network from "./share/Network";
import MenuItems from "./share/MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/fontawesome-free-solid";

const Navbar = () => {

  const { logo, menuItems, networks, setResponsiveNav } = useContext(DataContext);

  return <header>
    <div className="flex items-center gap-x-[3%] lg:gap-x-1 container mx-auto py-5 md:py-4 lg:py-0 px-5 md:px-10 lg:px-0">
      <div className="basis-[5%] lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-sm md:text-base cursor-pointer"
          onClick={() => setResponsiveNav(true)}
        />
      </div>
      <div className="relative basis-[10%] lg:basis-[4%] h-[50px] order-3 lg:order-none">
        <Link href="#">
          <a>
            <Image
              src={logo?.relatedItems?.fileUrl}
              className="transition duration-300 hover:-translate-y-1 object-contain"
              layout={'fill'}
            />
          </a>
        </Link>
      </div>
      <ul className="hidden lg:flex basis-[48%] font-bold">
        <MenuItems menuItems={menuItems} />
      </ul>
      <ul className="flex basis-[85%] lg:basis-[48%] justify-center lg:justify-end text-sm md:text-base lg:text-lg gap-x-6 lg:gap-x-10 order-2 lg:order-none">
        <Network networks={networks} />
      </ul>
    </div>
  </header>
};

export default Navbar;
