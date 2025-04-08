import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Providers from "./providers";
import { GET_ALL_DISHES } from "@/lib/datoCmsQueries";
import { getDataFromCms } from "@/utils/getDataFromCms";
import HydrateStore from "@/store/hydrate-store";
import { Category } from "@/types/category";
import type { Viewport } from "next";
import { Dish } from "@/types/dish";
import "./globals.css";
import SplashGate from "@/components/shared/lottieAnimation/SplashGate";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
});

const revival = localFont({
  src: [
    {
      weight: "700",
      path: "../fonts/Revival 565 Bold BT.ttf",
    },
  ],
  variable: "--font-revival",
});

export const metadata: Metadata = {
  title: "Bravo – найкращі страви на мангалі з доставкою в Броварах",
  description:
    "Швидка доставка корисної їжі, приготованої на мангалі. Без зайвих жирів, тільки свіжі продукти. Замовляйте онлайн та насолоджуйтеся смаком!",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

interface CmsResponse {
  data: {
    banner: {
      bannerMob: {
        url: string;
        alt: string;
      };
      bannerDesk: {
        url: string;
        alt: string;
      };
    };
    allCategories: Category[];
    allDishes: Dish[];
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const res: CmsResponse = await getDataFromCms(GET_ALL_DISHES);

  const promotionDishes = res?.data?.allDishes;

  const allCategories = res?.data?.allCategories;

  return (
    <html lang="uk">
      <body
        className={`${montserrat.variable} ${revival.variable} relative z-[1] antialiased text-14reg lg:text-16reg leading-[123%]`}
      >
        <SplashGate>
          <Providers>
            <HydrateStore
              categories={allCategories}
              promotion={promotionDishes}
            >
              {children}
            </HydrateStore>
          </Providers>
        </SplashGate>
      </body>
    </html>
  );
}
