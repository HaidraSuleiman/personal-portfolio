"use client";

import Image from "next/image";
import Heading from "./sub/Heading";
import { skillsData } from "@/assests";
import { motion } from "framer-motion";

export default function Skills() {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: {
      opacity: 0,
      y: 30,
    },
  };
  return (
    <div
      id="skills"
      className="min-h-[50vh] flex flex-col items-center justify-center gap-y-20"
    >
      <Heading title={"Skills"} />
      <div className=" max-lg:w-150 flex justify-between flex-wrap gap-x-8 gap-y-10 max-lg:gap-y-6">
        {skillsData.map((skill, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 max-lg:px-6"
            whileHover={{
              scale: 1.1,
              boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
              transition: { type: "spring", stiffness: 300, damping: 15 },
              cursor: "pointer",
            }}
            viewport={{
              margin: "50px",
              once: true,
            }}
            whileTap={{
              scale: 0.98,
            }}
          >
            <Image
              src={skill.icon}
              alt="Reactjs logo"
              width={100}
              height={100}
              className="h-auto w-10"
            />
            <p className="text-sm text-gray-600">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
