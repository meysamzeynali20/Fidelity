import MenuItemsChildren from "./MenuItemsChildren"

const MenuItems = ({ menuItems }) => {

    return <>
        {menuItems?.map((item) => (
            <li key={item?.id} className="group text-center relative">
                <p
                    className="hover:text-[#AAB501] py-10 px-14 after:content-[''] after:absolute after:block after:w-0 after:border-b-[2px] after:border-[#AAB501] after:mx-0 after:mt-[0.5rem] after:mb-0 after:transition-[width] after:duration-[0.2s] after:hover:w-[30%]"
                >
                    {item?.title}
                </p>
                <div
                    className={`hidden w-[250px] absolute z-10 bg-white rounded-b animate-[slideBottomToTopNavbar_0.1s] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] ${item?.relatedItems?.children.length > 0 && "group-hover:block"}`}
                >
                    <ul className="flex flex-col text-start text-black">
                        <MenuItemsChildren item={item} />
                    </ul>
                </div>
            </li>
        ))}
    </>
}

export default MenuItems