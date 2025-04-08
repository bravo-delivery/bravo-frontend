import { motion } from "framer-motion";
import AnimatedWrapper from "../animatedWrappers/AnimatedWrapper";

interface BurgerMenuButtonProps {
  isHeaderMenuOpened?: boolean;
  toggleHeaderMenuOpen?: () => void;
}

export default function BurgerMenuButton({
  isHeaderMenuOpened = false,
  toggleHeaderMenuOpen,
}: BurgerMenuButtonProps) {
  return (
    <AnimatedWrapper className="relative z-[60]">
      <button
        aria-label="open menu button"
        type="button"
        onClick={toggleHeaderMenuOpen}
        className="lg:hidden group relative z-[60] w-10 h-10 px-[6.6px] py-[10px] outline-none "
      >
        <div className="w-full h-full relative">
          {/* Верхня лінія */}
          <motion.span
            className="absolute w-full h-[1.8px] rounded-md"
            initial={{
              top: "2px",
              left: "0",
              opacity: 1,
              backgroundColor: "currentColor",
            }}
            animate={
              isHeaderMenuOpened
                ? {
                    top: "11px", // Переміщаємо в центр
                    left: "0",
                    opacity: 0,
                    backgroundColor: "var(--foreground)", // Чорний, коли меню відкрите
                  }
                : {
                    top: "2px", // Повертаємо на початкове місце
                    left: "0",
                    opacity: 1,
                    backgroundColor: "currentColor", // Білий, коли меню закрите
                  }
            }
            transition={{ duration: 0.7, ease: "easeOut" }} // Плавний перехід
          />

          {/* Середня лінія */}
          <motion.span
            className="absolute w-full h-[1.8px] rounded-md"
            initial={{
              top: "11px",
              left: "0",
              backgroundColor: "currentColor",
            }}
            animate={
              isHeaderMenuOpened
                ? { rotate: "45deg", backgroundColor: "var(--foreground)" } // Обертання при відкритому меню
                : { rotate: "0deg", backgroundColor: "currentColor" } // Повертаємо назад
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          />

          {/* Нижня лінія */}
          <motion.span
            className="absolute w-full h-[1.6px] rounded-md"
            initial={{
              top: "20px",
              left: "0",
              backgroundColor: "currentColor",
            }}
            animate={
              isHeaderMenuOpened
                ? {
                    rotate: "-45deg",
                    top: "11px",
                    backgroundColor: "var(--foreground)",
                  } // Обертання і переміщення при відкритому меню
                : {
                    rotate: "0deg",
                    top: "20px",
                    backgroundColor: "currentColor",
                  } // Повертаємо назад
            }
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
        </div>
      </button>
    </AnimatedWrapper>
  );
}
