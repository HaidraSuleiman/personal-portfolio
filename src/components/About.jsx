"use client";
import Heading from "./sub/Heading";
import { motion } from "framer-motion";
import { aboutText, downloadIcon, arrowLeftIcon } from "@/assests";

export default function About() {
  const words = aboutText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Variants for each word.

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className="min-h-screen max-sm:min-h-[50vh] pb-60 px-96 flex flex-col items-center justify-center ">
      <div className="flex gap-4 max-lg:flex-col max-lg:">
        <Heading title="About Me" />
        <div className="w-full flex items-center justify-between ">
          {/* <Image
          src={"/about-me.png"}
          alt="About image"
          width={400}
          height={400}
          className="w-75 max-lg:w-50 max-md:hidden"
        /> */}
          <div className="relative w-200 max-lg:w-100 rounded-xl bg-zinc-100 p-5 text-justify">
            <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 max-md:hidden">
              {arrowLeftIcon}
            </span>
            <motion.p
              className="text-lg font-light text-gray-700 first-letter:pl-3 max-lg:text-[16px] max-sm:text-[14px] overflow-hidden flex flex-wrap "
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {words.map((word, index) => (
                <motion.span
                  variants={child}
                  style={{ marginRight: "5px" }}
                  key={index}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
            <a
              href="/haidrasuleimancv.pdf"
              download=""
              className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
            >
              <span>Download CV</span>
              <span className="text-xl">{downloadIcon}</span>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10">
        {aboutData.map((item, i) => (
          <Achievements
            key={i}
            icon={item.icon}
            amount={item.amount}
            title={item.title}
          />
        ))}
      </div> */}
    </div>
  );
}
