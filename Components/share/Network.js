import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebookF,
    faTelegram,
    faLinkedinIn,
    faInstagram,
    faWhatsapp,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Network = ({ networks }) => {

    return <>
        {networks?.map((row) => {
            switch (row.key) {
                case "twitter":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faTwitter}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
                case "telegram":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faTelegram}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
                case "facebook":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faFacebookF}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
                case "linkedin":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faLinkedinIn}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
                case "instagram":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faInstagram}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
                case "whatsapp":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faWhatsapp}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
                case "youtube":
                    return <li key={row?.id}>
                        <Link href={row?.url ?? '#'}>
                            <FontAwesomeIcon
                                icon={faYoutube}
                                className="hover:transition delay-10 ease-in-out hover:-translate-y-1 cursor-pointer text-lg lg:text-xl"
                            />
                        </Link>
                    </li>
            }
        })}
    </>
}

export default Network