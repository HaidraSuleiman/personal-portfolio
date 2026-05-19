"use client";
import Image from "next/image";
import { heroIcons } from "@/assests";
import { useMotionValue, useTransform, motion, useSpring } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [windowOffset, setWindowOffset] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });
  const [mouseMove, setMouseMove] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    x.set(clientX);
    y.set(clientY);

    // console.log(clientX, clientY, x, y);
  }

  function handleMouseEnter() {
    setWindowOffset({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
    setMouseMove(true);

    console.log(innerWidth, innerHeight);
  }

  const { innerWidth, innerHeight } = windowOffset;

  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  const rotateY = useTransform(xSpring, [0, innerWidth], [-30, 30]);
  const rotateX = useTransform(ySpring, [0, innerHeight], [10, -50]);

  return (
    <div
      id="home"
      className="min-h-screen flex flex-col items-center justify-center"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center justify-center gap-y-3 font-light capitalize"
        >
          <motion.div
            className="felx items-center justify-center"
            style={{
              rotateX: mouseMove ? rotateX : 0,
              rotateY: mouseMove ? rotateY : 0,
              transition: "0.1s",
            }}
          >
            <Image
              src={"/herologolight.png"}
              alt="website logo"
              width={1000}
              height={1000}
              priority={true}
              className="h-auto dark:hidden transition-all "
            />
            <Image
              src={"/herologo1.png"}
              alt="webiste logo dark"
              width={1000}
              height={1000}
              priority
              className="h-auto hidden dark:inline transition-all"
            />
          </motion.div>
          <h1 className="text-center text-3xl font-bold tracking-wider text-gray-500 max-sm:text-2xl dark:text-white transition-colors">
            My name is Haidra Suleiman &
          </h1>
          <p className="text-lg tracking-wider text-gray-700 dark:text-gray-200 transition-colors">
            I like web development
          </p>
        </motion.div>
        <div className="mt-8 flex justify-center gap-x-10 text-3xl  text-yellow-600">
          {heroIcons.map((icon, i) => (
            <a
              href={icon.path}
              target="_blank"
              key={i}
              className="hover:bg-red-400 hover:text-white transition-colors rounded-lg "
            >
              {icon.icon}
            </a>
          ))}
        </div>
        <a
          href="mailto:h.souleman@icloud.com"
          className="mx-auto mt-7 block w-max rounded-lg bg-red-400 px-3 py-1 font-light capitalize tracking-wider text-white hover:bg-red-500 transition-colors"
        >
          Contact me
        </a>
      </div>
    </div>
  );
}
