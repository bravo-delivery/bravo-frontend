import Image from "next/image";
import ContactsList from "./ContactsList";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function ContactsInfo() {
  return (
    <section className="overflow-hidden">
      <div className="relative container xl:max-w-[1280px] py-[120px] xl:pt-20">
        <ContactsList />
        <AnimatedWrapper
          animation={fadeInAnimation({ y: 30 })}
          className="mt-[100px] sm:mt-[44px] w-full h-[245px] rounded-[16px] overflow-hidden"
        >
          <Image
            src="/images/contacts/contactsInfo/map.webp"
            alt="map"
            width={2280}
            height={490}
            className="w-full h-full object-cover object-center"
          />
        </AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
          className="md:hidden absolute -z-10 bottom-[12px] right-[-20px]"
        >
          <Image
            src="/images/contacts/contactsInfo/tomatoeBottomMob.webp"
            alt="tomatoe"
            width={436}
            height={387}
            priority
            className="w-[218px] h-auto"
          />
        </AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
          className="hidden md:block absolute -z-10 bottom-[12px] right-0"
        >
          <Image
            src="/images/contacts/contactsInfo/tomatoeBottomDesk.webp"
            alt="tomatoe"
            width={436}
            height={486}
            priority
            className="w-[218px] h-auto"
          />
        </AnimatedWrapper>
        <AnimatedWrapper
          animation={fadeInAnimation({ scale: 0.8, delay: 0.8 })}
          className="hidden md:block absolute -z-10 bottom-[210px] left-0"
        >
          <Image
            src="/images/contacts/contactsInfo/tomatoeTopDesk.webp"
            alt="tomatoe"
            width={449}
            height={419}
            priority
            className="w-[225px] h-auto"
          />
        </AnimatedWrapper>
      </div>
    </section>
  );
}
