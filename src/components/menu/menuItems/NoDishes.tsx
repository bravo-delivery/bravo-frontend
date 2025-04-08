import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import { fadeInAnimation } from "@/helpers/animation";

interface NoDishesProps {
  children: string;
}

export default function NoDishes({ children }: NoDishesProps) {
  return (
    <AnimatedWrapper
      viewport={{ once: true }}
      animation={fadeInAnimation({ y: 30, delay: 0.4 })}
      className="mx-auto pt-[200px] pb-[120px]"
    >
      <p className="xl:w-full text-16reg xl:text-18reg leading-[123%] text-black/50 text-center">
        {children}
      </p>
    </AnimatedWrapper>
  );
}
