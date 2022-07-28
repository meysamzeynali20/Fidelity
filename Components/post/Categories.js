import DataContext from "Base/DataContext"
import { useContext } from "react"
import Link from "next/link"

const Categories = () => {
    
    const { categories } = useContext(DataContext)

    return <div className="grid grid-cols-2 items-center gap-10 p-4 bg-neutral-100 rounded text-xs lg:text-base order-3 lg:order-none">
        <h2 className="col-span-full font-bold text-sm lg:text-lg">
            دسته بندی
        </h2>
        {categories?.map(category =>
            <Link href={"/category/" + category?.slug}>
                <div
                    key={category?.id}
                    className="grid col-span-full md:col-auto lg:col-span-full grid-cols-2 gap-6 items-center  cursor-pointer"
                >
                    <p className="text-justify leading-8">{category?.title}</p>
                    <p className="justify-self-end">{category?.itemsCount ?? "0"}</p>
                </div>
            </Link>
        )}
    </div>
}

export default Categories