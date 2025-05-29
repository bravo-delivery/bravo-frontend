import {
  useEffect,
  useCallback,
  useRef,
  SetStateAction,
  Dispatch,
} from "react";
import {
  PHONE,
  PHONE_SECOND,
  PHONE_THIRD,
  PHONE_FOURTH,
} from "@/constants/constants";

import PhoneIcon from "../icons/PhoneIcon";
import { headerPhoneRegex } from "@/regex/regex";
import { AnimatePresence, motion } from "framer-motion";

interface PhonesProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Phones({ isOpen, setIsOpen }: PhonesProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    },
    [setIsOpen]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleClickOutside, handleKeyDown]);

  return (
    <div className="relative hidden lg:block" ref={dropdownRef}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 p-4 mt-1 w-full rounded-[8px] shadow-inner-custom bg-white bg-opacity-[50%] z-50 text-black"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="cursor-pointer group flex items-center gap-x-2 mb-2">
              <PhoneIcon className="size-5 xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out" />
              <a
                href={`tel:+${PHONE.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="phone number"
                className="font-semibold block xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out"
              >
                {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
              </a>
            </div>
            <div className="cursor-pointer group flex items-center gap-x-2 mb-2">
              <PhoneIcon className="size-5 xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out" />
              <a
                href={`tel:+${PHONE_SECOND.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="phone number"
                className="font-semibold block xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out"
              >
                {PHONE_SECOND.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
              </a>
            </div>
            <div className="cursor-pointer group flex items-center gap-x-2 mb-2">
              <PhoneIcon className="size-5 xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out" />
              <a
                href={`tel:+${PHONE_THIRD.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="phone number"
                className="font-semibold block xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out"
              >
                {PHONE_THIRD.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
              </a>
            </div>
            <div className="cursor-pointer group flex items-center gap-x-2">
              <PhoneIcon className="size-5 xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out" />
              <a
                href={`tel:+${PHONE_FOURTH.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="phone number"
                className="font-semibold block xl:group-hover:text-green focus-visible:text-greenDark transition duration-300 ease-out"
              >
                {PHONE_FOURTH.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
