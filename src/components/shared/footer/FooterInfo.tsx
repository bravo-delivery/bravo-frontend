import {
  PHONE,
  PHONE_SECOND,
  PHONE_THIRD,
  PHONE_FOURTH,
  EMAIL,
  ADDRESS_LINK_FIRST,
  ADDRESS_SECOND,
  ADDRESS_FIRST,
} from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";

export default function FooterInfo() {
  return (
    <ul className="flex flex-col md:flex-row md:justify-between xl:gap-x-10 text-14light md:text-16light leading-[120%] text-white">
      <li>
        <div className="flex mb-4">
          <p>Тел.:&nbsp;</p>
          <div>
            <a
              href={`tel:+${PHONE.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
              className="block mb-1 lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
            >
              {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
            </a>
            <a
              href={`tel:+${PHONE_SECOND.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
              className="block mb-1 lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
            >
              {PHONE_SECOND.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
            </a>
            <a
              href={`tel:+${PHONE_THIRD.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
              className="block mb-1 lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
            >
              {PHONE_THIRD.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
            </a>
            <a
              href={`tel:+${PHONE_FOURTH.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer nofollow"
              aria-label="phone number"
              className="block mb-1 lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
            >
              {PHONE_FOURTH.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
            </a>
          </div>
        </div>
      </li>
      <li>
        <div className="mb-4">
          Email:&nbsp;
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
            aria-label="email"
          >
            {EMAIL}
          </a>
        </div>
        <a
          href={ADDRESS_LINK_FIRST}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="block lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
          aria-label="address"
        >
          <p>{ADDRESS_FIRST}</p>
          <p>{ADDRESS_SECOND}</p>
        </a>
      </li>
    </ul>
  );
}
