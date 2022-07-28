import Blog from "../../blog/[[...pageNumber]]"
import { getServerSideProps } from "../../blog/[[...pageNumber]]"

const Category = (props) => {
    return <>
        <Blog {...props} />
    </>
}

export default Category

export { getServerSideProps }