"use client";

import Heading from "./sub/Heading";
import { arrowLeftIcon, experienceData } from "@/assests";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

export default function Experience() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });

  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });
  return (
    <div
      id="experience"
      className="min-h-[50vh] pb-60 flex flex-col items-center justify-center "
    >
      <div className="w-100">
        <Heading title="Experience & Education" />
      </div>
      <div
        ref={containerRef}
        className=" relative  flex flex-col items-center justify-center gap-y-10 max-lg:gap-y-20 py-10"
      >
        {experienceData.map((data, i) => (
          <div
            key={`id-${i}`}
            className={`w-150 max-xl:w-120  px-12 max-sm:px-0 relative ${i % 2 === 0 ? "-left-[300px] max-xl:-left-[240px] max-lg:-left-0" : "left-[300px] max-xl:left-[240px] max-lg:left-0"}`}
          >
            <motion.div
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{
                margin: "-100px",
                once: true,
              }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 dark:border-yellow-500 bg-white p-4 tracking-wide max-sm:text-sm max-lg:z-10 dark:bg-zinc-700 transition-colors"
            >
              <h1 className="text-xl max-sm:text-lg font-light text-gray-700 dark:text-yellow-500 transition-colors">
                {data.title}
              </h1>
              <p className="text-gray-800 dark:text-gray-100 transition-colors">
                <span className="block font-light">
                  {data.education.includes("Welbond") ? "Company" : "Education"}
                </span>
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-gray-800 dark:text-gray-200">
                <span className="font-light">Experience</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`absolute top-20 text-red-300 -translate-y-1/2 max-lg:hidden ${i % 2 === 0 ? "left-full rotate-180" : "right-full"} `}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`dark:bg-zinc-700 dark:border-zinc-700 transition-colors w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-gray-50 max-lg:-top-10 ${i % 2 === 0 ? "left-full -translate-x-1/2 max-lg:left-1/2" : "right-full translate-x-1/2 max-lg:right-1/2 "}`}
            >
              {data.year}
            </div>
          </div>
        ))}

        <motion.div
          initial={{ scaleY: 0 }}
          style={{ scaleY: scrollY }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
}
