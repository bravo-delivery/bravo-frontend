"use client";
import { useState, useEffect } from "react";

export const useDishesPerPage = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;

      if (width < 460) {
        setItemsPerPage(8);
      } else if (width < 1024) {
        setItemsPerPage(9);
      } else if (width < 1280) {
        setItemsPerPage(8);
      } else {
        setItemsPerPage(9);
      }
    };

    updateItemsPerPage();

    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  return itemsPerPage;
};
