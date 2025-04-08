import { Paragraph } from "@/types/article";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";
import AnimatedListItem from "@/components/shared/animatedWrappers/AnimatedListItem";

interface ContentListProps {
  content: Paragraph[];
}

export default function ContentList({ content }: ContentListProps) {
  return (
    <AnimatedWrapper
      as="ul"
      viewport={{ once: true, amount: 0.2 }}
      animation={listVariants({
        staggerChildren: 0.6,
      })}
      className="flex flex-col gap-y-12"
    >
      {content.map((item, idx) => (
        <AnimatedListItem key={idx}>
          <p>{item.paragraph}</p>
        </AnimatedListItem>
      ))}
    </AnimatedWrapper>
  );
}
