import {
  PHONE,
  EMAIL,
  ADDRESS_FIRST,
  ADDRESS_LINK_FIRST,
} from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";
import Image from "next/image";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import AnimatedListItem from "@/components/shared/animatedWrappers/AnimatedListItem";

export default function ContactsList() {
  return (
    <AnimatedWrapper
      as="ul"
      viewport={{ once: true, amount: 0.3 }}
      animation={listVariants({ staggerChildren: 0.5 })}
      className="flex flex-col lg:flex-row gap-5 max-w-[370px] lg:max-w-full mx-auto"
    >
      <AnimatedListItem className="flex items-center gap-x-[13px] max-w-[370px] lg:w-[calc(33.3%-13.3px)] px-[22px] py-10 xl:py-[52px] xl:px-7 rounded-[16px] bg-green text-white">
        <Image
          src="/images/icons/phone.svg"
          alt="phone icon"
          width={32}
          height={32}
          className="size-8 xl:size-10"
        />
        <div>
          <h2 className="mb-[14px] xl:mb-4 text-20bold xl:text-24bold uppercase leading-[123%]">
            Номер телефону
          </h2>
          <a
            href={`tel:+${PHONE.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label="phone number"
            className="text-16reg xl:text-18reg leading-[123%] lg:hover:text-black focus-visible:text-black transition duration-300 ease-in-out"
          >
            {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
          </a>
        </div>
      </AnimatedListItem>
      <AnimatedListItem className="flex items-center gap-x-[13px] max-w-[370px] lg:w-[calc(33.3%-13.3px)] px-[22px] py-10 xl:py-[52px] xl:px-7 rounded-[16px] bg-green text-white">
        <Image
          src="/images/icons/email.svg"
          alt="email icon"
          width={32}
          height={32}
          className="size-8 xl:size-10"
        />
        <div>
          <h2 className="mb-[14px] xl:mb-4 text-20bold xl:text-24bold uppercase leading-[123%]">
            Email Адреса
          </h2>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-16reg xl:text-18reg leading-[123%] lg:hover:text-black focus-visible:text-black transition duration-300 ease-in-out"
            aria-label="email"
          >
            {EMAIL}
          </a>
        </div>
      </AnimatedListItem>{" "}
      <AnimatedListItem className="flex items-center gap-x-[13px] max-w-[370px] lg:w-[calc(33.3%-13.3px)] px-[22px] py-10 xl:py-[52px] xl:px-7 rounded-[16px] bg-green text-white">
        <Image
          src="/images/icons/location.svg"
          alt="location icon"
          width={32}
          height={32}
          className="size-8 xl:size-10"
        />
        <div>
          <h2 className="mb-[14px] xl:mb-4 text-20bold xl:text-24bold uppercase leading-[123%]">
            Локація
          </h2>
          <a
            href={ADDRESS_LINK_FIRST}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-16reg xl:text-18reg leading-[123%] lg:hover:text-black focus-visible:text-black transition duration-300 ease-in-out"
            aria-label="address"
          >
            <p>{ADDRESS_FIRST}</p>
          </a>
        </div>
      </AnimatedListItem>
    </AnimatedWrapper>
  );
}
