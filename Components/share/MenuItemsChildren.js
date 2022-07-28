import { Fragment } from "react"
import Link from "next/link"

const MenuItemsChildren = ({ item }) => {
    return <>
        {item?.relatedItems?.children?.map((item, index) => (
            <Fragment key={item?.id}>
                <li className="hover:bg-[#AAB501] hover:text-white py-5 px-4">
                    <Link href={'#'}>
                        <a
                            className="text-sm"
                        >
                            {item?.title}
                        </a>
                    </Link>
                </li>
                <hr className={`opacity-[0.4] ${index.length === index.length && "hidden"}`} />
            </Fragment>
        ))}
    </>
}

export default MenuItemsChildren