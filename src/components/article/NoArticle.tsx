import AnimatedWrapper from "../shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

export default function NoArticle() {
  return (
    <section className="">
      <AnimatedWrapper className="w-full h-[76px] lg:h-[94px] bg-black bg-opacity-40"></AnimatedWrapper>
      <div className="container pt-[140px] lg:pt-[160px] pb-[140px]">
        {" "}
        <AnimatedWrapper
          as="p"
          animation={fadeInAnimation({ y: 30 })}
          className="text-16reg xl:text-18reg leading-[123%] text-black/50 text-center"
        >
          На жаль, даної статті не існує
        </AnimatedWrapper>
      </div>
    </section>
  );
}
