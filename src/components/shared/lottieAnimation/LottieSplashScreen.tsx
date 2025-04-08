"use client";

import Lottie from "lottie-react";
import animationData from "@/helpers/bravoAnimation.json";
import { motion, AnimatePresence } from "framer-motion";

interface LottieSplashScreenProps {
  visible: boolean;
}

export default function LottieSplashScreen({
  visible,
}: LottieSplashScreenProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: "easeInOut" },
          }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-greenDark"
        >
          <Lottie
            animationData={animationData}
            loop={false}
            autoplay
            style={{
              width: 300,
              height: 300,
              position: "absolute",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
