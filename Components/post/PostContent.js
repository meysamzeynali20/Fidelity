import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCalendar } from "@fortawesome/fontawesome-free-solid";
import { useContext } from "react";
import DataContext from "Base/DataContext";

const PostContent = () => {

    const { post } = useContext(DataContext)
    
    return <div className="flex flex-col gap-y-4 lg:gap-y-10 basis-[70%] text-xs lg:text-base">
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px]">
            <Image
                src={post?.relatedItems?.imageUrl}
                className="rounded object-cover"
                layout={'fill'}
            />
        </div>
        <div className="flex gap-x-10">
            <div className="flex basis-[50%] lg:basis-auto gap-x-4 items-center">
                <FontAwesomeIcon
                    icon={faBars}
                    className="text-lime-600 lg:text-xl"
                />
                <h6>متن ساختگی</h6>
            </div>
            <div className="flex basis-[50%] lg:basis-auto gap-x-2 items-center place-content-end lg:place-content-start">
                <FontAwesomeIcon
                    icon={faCalendar}
                    className="text-lime-600 lg:text-xl"
                />
                <span>{post?.relatedItems?.persianPublishedDate}</span>
            </div>
        </div>
        <h1 className="font-bold text-sm lg:text-xl text-justify leading-8 lg:leading-10 ">
            {post?.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post?.relatedItems?.html }} className='flex flex-col gap-y-6 leading-8 text-justify'></div>
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[450px]">
            <Image
                src={post?.relatedItems?.imageUrl}
                className="rounded object-cover"
                layout={'fill'}
            />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post?.relatedItems?.html }} className='flex flex-col gap-y-6 leading-8 text-justify'></div>
    </div>
}

export default PostContent