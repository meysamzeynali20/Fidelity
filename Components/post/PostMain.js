import { SideBar, PostContent } from 'post'

const PostMain = () => {

  return <div className="flex flex-col lg:flex-row gap-x-20 gap-y-8 container mx-auto px-5 md:px-10 lg:px-0 my-8 lg:my-20">
    <PostContent />
    <SideBar />
  </div>
};

export default PostMain;
