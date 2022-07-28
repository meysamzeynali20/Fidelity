import { Map } from 'contact'

const Form = () => {

    return <>
        <div className="flex flex-col gap-y-6 basis-[60%]">
            <h1 className="font-bold text-center md:text-right text-sm md:text-base lg:text-xl">
                فرم تماس
            </h1>
            <h6 className="text-center md:text-right text-xs md:text-sm lg:text-base">
                به ما پیام بدهید
            </h6>
            <hr />
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="نام و نام خانوادگی"
                    className="basis-[50%] p-3 lg:p-6 text-xs lg:text-base text-center outline-neutral-300"
                />
                <input
                    type="text"
                    placeholder="ایمیل"
                    className="basis-[50%] p-3 lg:p-6 text-xs lg:text-base text-center outline-neutral-300"
                />
            </div>
            <textarea
                className="resize-none outline-neutral-300 p-3 lg:p-4 text-xs lg:text-base"
                rows={10}
                placeholder="پیام"
            />
            <div className="place-self-end">
                <button
                    type="button"
                    className="bg-[#AAB501] py-3 px-6 lg:py-4 lg:px-12 rounded text-xs lg:text-base"
                >
                    ارسال
                </button>
            </div>
        </div>
        <Map />
    </>
}

export default Form