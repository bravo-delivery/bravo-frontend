"use client";
import { useMenuStore } from "@/store/menuStore";
import PromotionListDesk from "./PromotionListDesk";

export default function PromotionDesk() {
  const { promotion } = useMenuStore();

  if (!promotion?.length) {
    return null;
  }
  return (
    <>
      <PromotionListDesk promotion={promotion} />
    </>
  );
}
