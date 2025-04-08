import AnimatedListItem from "@/components/shared/animatedWrappers/AnimatedListItem";

interface OfferItemProps {
  offer: {
    subtitle: string;
    description: string;
    quantity: string;
    text: string;
  };
}

export default function OfferItem({ offer }: OfferItemProps) {
  const { subtitle, description, quantity, text } = offer;
  return (
    <AnimatedListItem className="flex flex-col justify-between max-w-[580px] md:w-[calc(33%-13.3px)] min-h-full">
      <div>
        <h3 className="mb-[14px] text-24bold xl:text-36bold leading-[125%] text-white uppercase text-center">
          {subtitle}
        </h3>
        <p className="mb-7 xl:mb-10 text-16reg xl:text-18reg leading-[125%] text-white text-center">
          {description}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center p-8 xl:p-10 rounded-[16px] bg-white">
        <p className="mb-2 text-64bold md:text-48bold xl:text-70bold leading-[125%]">
          {quantity}
        </p>
        <p className="text-16reg md:text-14reg xl:text-18reg leading-[125%] text-center">
          {text}
        </p>
      </div>
    </AnimatedListItem>
  );
}
