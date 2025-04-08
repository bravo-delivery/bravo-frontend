import { CYANIDIUM_URL, CYANIDIUM_NAME } from "@/constants/constants";

export default function FooterBottom() {
  return (
    <div className="flex flex-col md:flex-row md:justify-between items-center tab:flex-row tab:justify-between mt-8 md:mt-7 text-16reg leading-[130%] text-white">
      <p className="mb-4 md:mb-0">© 2025 Bravo</p>
      <div className="flex gap-x-[2px] tab:gap-x-[4px]">
        <p>Сайт розробили -</p> &nbsp;
        <a
          href={CYANIDIUM_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="cyanidium.dev link"
          className="lg:hover:text-green focus-visible:text-green transition duration-300 ease-in-out"
        >
          {CYANIDIUM_NAME}
        </a>
      </div>
    </div>
  );
}
