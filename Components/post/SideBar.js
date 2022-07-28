import { Tags, Categories, RelatedPosts } from 'post'

const SideBar = () => {

    return <div className="basis-[30%]">
        <div className="flex flex-col gap-y-10 sticky top-0">
            <RelatedPosts />
            <Categories />
            <Tags />
        </div>
    </div>
}

export default SideBar