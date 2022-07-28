import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/fontawesome-free-solid";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/fontawesome-free-regular";

const Information = () => {

    return <>
        <div className="flex flex-col gap-y-6 lg:gap-y-10 items-center text-xs lg:text-base">
            <FontAwesomeIcon
                icon={faPhone}
                className="text-[#AAB501] text-lg lg:text-4xl"
            />
            <h6>تماس با ما</h6>
            <p>02132301060</p>
            <p>02132301060</p>
        </div>
        <div className="flex flex-col gap-y-6 lg:gap-y-10 items-center text-xs lg:text-base">
            <FontAwesomeIcon
                icon={faLocationPin}
                className="text-[#AAB501] text-lg lg:text-4xl"
            />
            <h6>آدرس</h6>
            <p className="text-justify leading-8">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است، چاپگرها و
            </p>
        </div>
        <div className="flex flex-col gap-y-6 lg:gap-y-10 items-center text-xs lg:text-base">
            <FontAwesomeIcon
                icon={faEnvelope}
                className="text-[#AAB501] text-lg lg:text-4xl"
            />
            <h6>ایمیل</h6>
            <p>paydarsamane@gmail.com</p>
            <p>paydarsamane@gmail.com</p>
        </div>
        <div className="flex flex-col gap-y-6 lg:gap-y-10 items-center text-xs lg:text-base">
            <FontAwesomeIcon
                icon={faClock}
                className="text-[#AAB501] text-lg lg:text-4xl"
            />
            <h6>ساعت کاری</h6>
            <p>9 الی 7</p>
        </div>
    </>
}

export default Information