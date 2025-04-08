"use client";
import { useMenuStore } from "@/store/menuStore";
import PromotionListMob from "./PromotionListMob";

export default function PromotionMob() {
  const { promotion } = useMenuStore();

  if (!promotion?.length) {
    return null;
  }
  return (
    <>
      <PromotionListMob promotion={promotion} />
    </>
  );
}
