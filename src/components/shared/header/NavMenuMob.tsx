import { Dispatch, SetStateAction } from "react";
import { menuList } from "@/helpers/menuList";
import MenuLinkMob from "./MenuLinkMob";
import { listVariants } from "@/helpers/animation";
import AnimatedWrapper from "@/components/shared/animatedWrappers/AnimatedWrapper";

interface NavMenuMobProps {
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function NavMenuMob({ setIsHeaderMenuOpened }: NavMenuMobProps) {
  return (
    <nav>
      <AnimatedWrapper
        as="ul"
        viewport={{ once: true, amount: 0.3 }}
        animation={listVariants({ staggerChildren: 0.3, delayChildren: 0.8 })}
      >
        {menuList.map((menuItem, idx) => (
          <MenuLinkMob
            key={idx}
            menuItem={menuItem}
            setIsHeaderMenuOpened={setIsHeaderMenuOpened}
          />
        ))}
      </AnimatedWrapper>
    </nav>
  );
}
