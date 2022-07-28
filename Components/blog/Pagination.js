import Link from "next/link"

const Pagination = () => {

    const links = [1, 2, 3, 4, 5, 6, 7];

    return <div className="flex gap-x-2 lg:gap-x-6 col-span-full justify-self-center text-slate-900 text-xs lg:text-base">
        <Link href="#">
            <a className="bg-slate-100 text-[#AAB501] border-2 border-slate-100 border-solid p-2 md:py-2 md:px-4 inline-block hover:bg-[#AAB501] hover:text-white">
                &laquo;
            </a>
        </Link>
        {links?.map((item, id) => (
            <Link href="#" key={id}>
                <a className="border-2 border-slate-100 border-solid p-2 md:py-2 md:px-4 inline-block hover:bg-[#AAB501] hover:text-white">
                    {item + 1}
                </a>
            </Link>
        ))}
        <Link href="#">
            <a className="bg-slate-100 text-[#AAB501] border-2 border-slate-100 border-solid p-2 md:py-2 md:px-4 inline-block hover:bg-[#AAB501] hover:text-white">
                &raquo;
            </a>
        </Link>
    </div>
}

export default Pagination