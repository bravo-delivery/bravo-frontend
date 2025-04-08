import { Dispatch, SetStateAction } from "react";
import NavMenuMob from "./NavMenuMob";
import CallbackInfo from "./CallbackInfo";
import Logo from "../logo/Logo";
import CartButton from "./CartButton";
import { AnimatePresence, motion } from "framer-motion";
import { burgerMenuVariants } from "@/helpers/animation";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
  setIsCartModalOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
  setIsHeaderMenuOpened,
  setIsCartModalOpened,
}: BurgerMenuMobTabProps) {
  return (
    <AnimatePresence>
      {isHeaderMenuOpened && (
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
          className={`${
            isHeaderMenuOpened ? "no-doc-scroll" : ""
          } lg:hidden absolute z-50 top-0 right-0 w-[100vw] h-[100dvh] pb-8 bg-white text-black
       overflow-y-auto`}
        >
          <div className="container">
            <div className="sticky z-[60] top-0 left-[30px] flex items-center justify-between py-4 pr-[56px] sm:pr-[100px] mx-auto bg-white">
              <Logo
                setIsHeaderMenuOpened={setIsHeaderMenuOpened}
                className="text-24bold leading-[120%] relative z-[60] text-black"
              />
              <CartButton
                variant="black"
                onClick={() => {
                  setIsHeaderMenuOpened(false);
                  setIsCartModalOpened(true);
                }}
              />
            </div>
            <CallbackInfo setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
            <NavMenuMob setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
