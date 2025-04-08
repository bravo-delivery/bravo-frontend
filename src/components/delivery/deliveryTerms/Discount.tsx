import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import Image from "next/image";
import { fadeInAnimation } from "@/helpers/animation";

export default function Discount() {
  return (
    <AnimatedWrapper
      animation={fadeInAnimation({ y: 30 })}
      className="relative -z-20 mt-[90px] pt-[51px] pb-[136px] md:py-10 h-[346px] md:h-[245px] rounded-[10px] md:rounded-[16px] bg-discount overflow-hidden"
    >
      <h3 className="max-w-[300px] md:max-w-[405px] px-[37px] md:px-[57px] py-[6px] mx-auto text-48extra md:text-64extra leading-[123%] text-center uppercase text-transparent bg-white rounded-full">
        <span className="text-transparent bg-clip-text bg-discountText">
          Знижка
        </span>
      </h3>
      <p className="max-w-[239px] md:max-w-[322px] mt-[12.3%] md:mt-8 text-14reg md:text-16reg leading-[123%] text-white text-center mx-auto">
        Якщо ви сплачуєте при отриманні готівкою, ми даруємо знижку 10%
      </p>
      <Image
        src="/images/delivery/deliveryTerms/tomatoeLeftMob.webp"
        alt="tomatoes"
        width={399}
        height={228}
        className="md:hidden absolute bottom-0 left-0 -z-10 w-[200px] h-auto"
      ></Image>
      <Image
        src="/images/delivery/deliveryTerms/tomatoeRightMob.webp"
        alt="tomatoes"
        width={134}
        height={241}
        className="md:hidden absolute bottom-0 right-0 -z-10 w-[67px] h-auto"
      ></Image>
      <Image
        src="/images/delivery/deliveryTerms/tomatoesLeftDesk.webp"
        alt="tomatoes"
        width={562}
        height={481}
        className="hidden md:block absolute top-0 left-0 -z-10 w-[151px] lg:w-[281px] h-auto"
      ></Image>
      <Image
        src="/images/delivery/deliveryTerms/tomatoesRightDesk.webp"
        alt="tomatoes"
        width={506}
        height={466}
        className="hidden md:block absolute bottom-0 right-0 -z-10 w-[183px] lg:w-[253px] h-auto"
      ></Image>
    </AnimatedWrapper>
  );
}
