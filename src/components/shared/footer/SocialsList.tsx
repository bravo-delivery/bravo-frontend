import InstagramIcon from "../icons/InstagramIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TiktokIcon from "../icons/TiktokIcon";
import {
  TIKTOK_URL,
  INSTAGRAM_URL,
  TELEGRAM_URL,
  VIBER_URL,
} from "@/constants/constants";
import SocialItem from "./SocialItem";
import IconViber from "../icons/IconViber";

export default function SocialsList() {
  const socialList = [
    { link: TIKTOK_URL, icon: <TiktokIcon /> },
    { link: INSTAGRAM_URL, icon: <InstagramIcon /> },
    { link: TELEGRAM_URL, icon: <TelegramIcon /> },
    { link: VIBER_URL, icon: <IconViber /> },
  ];
  return (
    <ul className="flex gap-7 md:gap-[18px] items-center justify-center md:justify-end mt-8 md:mt-7">
      {socialList.map((social, idx) => (
        <SocialItem key={idx} social={social} />
      ))}
    </ul>
  );
}
