"use client";

import { motion } from "framer-motion";
import { moonIcon, sunIcon } from "@/assests";
import { useEffect, useRef, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

export default function Toggle({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
  const mainRef = useRef(null);

  function addDarkTheme() {
    mainRef.current.classList.add("dark");
    setDarkTheme(true);
  }

  function removeDarkTheme() {
    mainRef.current.classList.remove("dark");
    setDarkTheme(false);
  }

  useEffect(() => {
    const darkTheme = reactLocalStorage.get("darkTheme");
    const darkThemeParsed = darkTheme !== undefined && JSON.parse(darkTheme);

    const systemTheme =
      typeof window !== undefined &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (darkTheme === undefined) {
      systemTheme ? addDarkTheme() : removeDarkTheme();
    } else {
      darkThemeParsed ? addDarkTheme() : removeDarkTheme();
    }
  }, [darkTheme]);

  return (
    <main ref={mainRef}>
      <div className="bg-zinc-50 dark:bg-zinc-800">
        <div className="max-w-300 max-xl:w-full mx-auto flex justify-center max-xl:px[90px] max-sm:pl-80 max-sm:pr-5 overflow-hidden">
          <button
            onClick={() => {
              if (!darkTheme) {
                addDarkTheme();
                reactLocalStorage.set("darkTheme", true);
              } else {
                removeDarkTheme();
                reactLocalStorage.set("darkTheme", false);
              }
            }}
            className="fixed right-14 max-sm:right-10 top-10 text-yellow-600 hover:text-yellow-500"
          >
            <motion.span
              animate={{ scale: darkTheme ? 0 : 1 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {moonIcon}
            </motion.span>
            <motion.span
              animate={{ scale: darkTheme ? 1 : 0 }}
              className="absolute block rounded-full bg-zinc-50 p-1 text-4xl dark:bg-zinc-800"
            >
              {sunIcon}
            </motion.span>
          </button>
          {children}
        </div>
      </div>
    </main>
  );
}
