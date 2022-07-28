import { useContext } from "react";
import DataContext from "Base/DataContext";

const PageMain = () => {

    const { html } = useContext(DataContext)

    return <div className="flex flex-col gap-y-5 lg:gap-y-10 leading-8 lg:leading-10 text-justify text-xs lg:text-base container mx-auto px-5 md:px-10 lg:px-0 my-20" dangerouslySetInnerHTML={{ __html: html }}>
    </div>
};

export default PageMain;