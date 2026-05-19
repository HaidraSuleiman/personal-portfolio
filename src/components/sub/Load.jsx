"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Load() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <motion.div
      initial={{ top: 0 }}
      animate={{ top: load ? "-100%" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full fixed left-0 top-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative flex flex-col items-center">
        <div className="absolute w-48 h-48 rounded-full border-2 border-yellow-500/20"></div>

        <div className="absolute w-48 h-48 rounded-full border-t-2 border-yellow-500 animate-spin"></div>

        <div className="absolute w-56 h-56 bg-yellow-500/20 blur-3xl rounded-full"></div>
      </div>
    </motion.div>
  );
}
