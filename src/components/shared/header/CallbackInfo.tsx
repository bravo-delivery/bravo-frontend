import { Dispatch, SetStateAction } from "react";
import { PHONE, PHONE_SECOND, PHONE_THIRD } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import PhoneIcon from "../icons/PhoneIcon";
import AnimatedWrapper from "../animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface CallbackInfoProps {
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function CallbackInfo({
  setIsHeaderMenuOpened,
}: CallbackInfoProps) {
  return (
    <AnimatedWrapper
      animation={fadeInAnimation({ y: 30, delay: 0.4 })}
      className="max-w-[380px] sm:mx-auto mb-8"
    >
      <h2 className="mt-7 mb-[26px] text-36bold uppercase leading-[130%] text-center">
        Замовляй!
      </h2>
      <a
        href={`tel:+${PHONE.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="phone number"
        className="flex items-center justify-center gap-x-3 mb-2 sm:mx-auto text-green font-semibold"
        onClick={() => setIsHeaderMenuOpened(false)}
      >
        <PhoneIcon className="size-6" />
        {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
      </a>
      <a
        href={`tel:+${PHONE_SECOND.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="phone number"
        className="flex items-center justify-center gap-x-3 mb-2 sm:mx-auto text-green font-semibold"
        onClick={() => setIsHeaderMenuOpened(false)}
      >
        <PhoneIcon className="size-6" />
        {PHONE_SECOND.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
      </a>
      <a
        href={`tel:+${PHONE_THIRD.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="phone number"
        className="flex items-center justify-center gap-x-3 sm:mx-auto text-green font-semibold"
        onClick={() => setIsHeaderMenuOpened(false)}
      >
        <PhoneIcon className="size-6" />
        {PHONE_THIRD.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
      </a>
    </AnimatedWrapper>
  );
}
