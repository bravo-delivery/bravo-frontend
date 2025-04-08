import Image from "next/image";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function ConfirmationImages() {
  return (
    <>
      <AnimatedWrapper
        animation={fadeInAnimation({ delay: 1.6 })}
        viewport={{ once: true, amount: 0.01 }}
        className="absolute -z-20 top-[313px] xl:top-[319px] left-[calc(50%-537px)] w-[1055px] h-[1068px] backdrop-blur-[14px] rounded-full bg-white bg-opacity-[12%] shadow-inner-custom"
      ></AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="absolute -z-30 top-[93px] xl:top-[89px] left-[calc(50%-270px)] xl:left-[calc(50%-336px)] w-[489px] h-[382px] xl:w-[588px] xl:h-[460px] overflow-hidden"
      >
        <Image
          src="/images/confirmation/sandwich.webp"
          alt="sandwich"
          width={1175}
          height={921}
          priority
          className="w-auto h-[382px] xl:h-[460px] object-cover"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="md:hidden absolute bottom-[-39px] right-[-39px]"
      >
        {" "}
        <Image
          src="/images/confirmation/leavesMob.webp"
          alt="leaves"
          width={381}
          height={252}
          priority
          className="w-[190px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden md:block absolute bottom-[-39px] right-[calc(50%-458px)]"
      >
        {" "}
        <Image
          src="/images/confirmation/leavesDesk.webp"
          alt="leaves"
          width={452}
          height={565}
          priority
          className="w-[226px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden md:block absolute -z-30 top-[357px] right-[calc(50%-486px)]"
      >
        {" "}
        <Image
          src="/images/confirmation/tomatoeSmall.webp"
          alt="tomatoe"
          width={473}
          height={473}
          priority
          className="w-[236px] h-auto"
        />
      </AnimatedWrapper>
      <AnimatedWrapper
        animation={fadeInAnimation({ scale: 0.8, delay: 1.6 })}
        className="hidden md:block absolute -z-30 bottom-[-150px] left-[calc(50%-650px)]"
      >
        {" "}
        <Image
          src="/images/confirmation/tomatoeLarge.webp"
          alt="tomatoe"
          width={841}
          height={939}
          priority
          className="w-[420px] h-auto"
        />
      </AnimatedWrapper>
    </>
  );
}
