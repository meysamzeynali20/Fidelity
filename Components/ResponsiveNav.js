import Link from "next/link";
import { useContext } from "react";
import DataContext from "Base/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const ResponsiveNav = () => {

  const { responsiveNav, setResponsiveNav } = useContext(DataContext);
  const items = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  return <header>
    <div
      className={`absolute inset-0 w-9/12	 ${responsiveNav ? "grid animate-[slideRightToLeft_0.5s]" : "hidden"
        } justify-items-center items-center gap-y-3 bg-slate-50 z-20 animate-slide_top_fast`}
    >
      <div className="justify-self-end px-5">
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setResponsiveNav(false)}
        />
      </div>
      <Link href="#">
        <a className="flex justify-center">
          <img
            src="/images/logo.png"
            className="max-w-[25%] object-cover object-center"
          />
        </a>
      </Link>
      {items.map((item, id) => (
        <ul key={id} className="text-xs">
          <li>
            <Link href="#">
              <a>لینک ساختگی</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  </header>
};

export default ResponsiveNav;
