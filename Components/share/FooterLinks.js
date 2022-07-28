import Link from "next/link"

const FooterLinks = ({ linkGroup }) => {

    return <>
        <h2 className="font-bold text-sm lg:text-xl"> {linkGroup?.title}</h2>
        <ul className="flex flex-col gap-y-6">
            {linkGroup?.relatedItems?.links?.map((item) => (
                <Link href={item?.url ?? '#'} key={item?.id}>
                    <li>
                        <a className="transition delay-10  ease-in-out hover:-translate-y-1 cursor-pointer">
                            {item?.text}
                        </a>
                    </li>
                </Link>
            ))}
        </ul>

    </>
}

export default FooterLinks