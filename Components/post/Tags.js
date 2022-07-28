import DataContext from "Base/DataContext"
import Link from "next/link"
import { useContext } from "react"

const Tags = () => {

    const { post } = useContext(DataContext)

    return <div className={`grid grid-cols-3 gap-6 p-4 bg-neutral-100 rounded order-1 lg:order-none ${!(post.relatedItems?.tags?.length > 0) && "hidden"}`}>
        <h2 className="col-span-full font-bold text-sm lg:text-lg">
            برچسب
        </h2>
        {post?.relatedItems?.tags?.map((item) => (
            <Link href="#" key={item.id}>
                <a className="border-4 text-center p-[15%] lg:p-[10%] hover:bg-[#AAB501] hover:text-white text-xs lg:text-base">
                    برچسب
                </a>
            </Link>
        ))}
    </div>

}

export default Tags