import Link from "next/link"
import Image from "next/image"
import { useContext } from "react"
import DataContext from "Base/DataContext"

const RelatedPosts = () => {

    const { relatedPosts } = useContext(DataContext)

    return <div className={`grid md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-10 order-1 lg:order-none bg-neutral-100 p-5 rounded ${!(relatedPosts?.length > 0) && "hidden"}`}>
        {relatedPosts?.map((item, index) => (
            <div key={item?.id} className="grid grid-cols-2 gap-6 lg:gap-10">
                <div className="flex flex-col gap-y-4">
                    <Link href={`${item?.slug ?? '#'}`}>
                        <a className="font-bold text-sm lg:text-base col-span-full">
                            {item?.title}
                        </a>
                    </Link>
                    <p className="text-xs lg:text-base leading-6 lg:leading-7 text-justify h-24 lg:h-20 overflow-hidden">
                        {item?.summary}
                    </p>
                </div>
                <div>
                    <div className="relative group w-full h-[120px] lg:h-[150px]">
                        <Image src="/images/6.jpg"
                            alt="pic"
                            className="rounded object-cover"
                            layout={'fill'}
                        />
                        <div className="absolute inset-0 group-hover:h-full bg-[#a9b50160] transition-[height] duration-[0.4s] ease-in-out overflow-hidden h-0"></div>
                    </div>
                </div>
                <hr
                    className={`order-2 lg:order-none md:hidden col-span-full ${index == relatedPosts.length - 1 ? "hidden" : "lg:block"}`}
                />
            </div>
        )
        )}
    </div>
}

export default RelatedPosts