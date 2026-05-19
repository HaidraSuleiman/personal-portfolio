import Image from "next/image";
import Heading from "./sub/Heading";
import { reviewsData } from "@/assests";
import { starIcons, arrowIcons } from "@/assests";
import { useEffect, useRef, useState } from "react";
import { animate, motion } from "framer-motion";

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(false);
  const prevIndex = useRef(0);
  const slides = useRef([]);

  function rightClickHandler() {
    animate(slides.current[index], { x: 0 }, { delay: 0.3 });
    animate(
      slides.current[prevIndex.current],
      { scale: index === 0 ? 1 : 0.4 },
      { rotate: index === 0 ? 0 : index % 2 === 0 ? 10 : -10 },
    );
  }

  function leftClickHandler() {
    animate(slides.current[index], { scale: 1, rotate: 0 }, { delay: 0.2 });
    animate(slides.current[prevIndex.current], { x: "100%" });
  }

  useEffect(() => {
    direction ? leftClickHandler() : rightClickHandler();
    prevIndex.current = index;
  }, [index]);

  return (
    <div
      id="reviews"
      className="my-20 flex flex-col items-center justify-center"
    >
      <Heading title="Reviews" />
      <div className="flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className=" relative w-200 max-lg:w-150 max-md:w-100 max-sm:w-70 h-125 max-lg:h-112.5 max-md:h-100 max-sm:h-150 flex items-center justify-center overflow-hidden"
        >
          {reviewsData.map((review, i) => (
            <motion.div
              initial={{ x: "100%" }}
              key={i}
              className="absolute inset-0 flex flex-col items-center justify-center gap-y-7 max-lg:gap-y-4 border border-yellow-500 bg-zinc-50 p-14 max-lg:p-5 rounded-xl dark:bg-zinc-700 transition-colors"
              ref={(el) => slides.current.push(el)}
            >
              <Image
                src={review.image}
                alt={review.name}
                width={130}
                height={130}
                className="w-32.5 aspect-square rounded-full border border-yellow-500 p-4 object-contain"
              />
              <h1 className="text-2xl max-md:text-xl text-center tracking-wider text-yellow-600">
                {review.name}
              </h1>
              <p className="text-lg max-md:text-sm text-justify font-extralight tracking-wide text-gray-600 first-letter:pl-2 dark:text-white transition-colors">
                {review.comment}
              </p>
              <div className="flex flex-col items-center justify-center gap-y-2">
                <span className="text-lg font-light text-yellow-600 mr-3">
                  {review.stars
                    .reduce((sum, item) => {
                      return (sum += item);
                    }, 0)
                    .toFixed(1)}
                </span>
                <div className="flex items-center gap-x-2 text-2xl text-yellow-500">
                  {review.stars.map((star, i) => (
                    <span key={i}>
                      {star === 1 ? starIcons[0] : starIcons[1]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex gap-x-4 text-4xl text-yellow-500 mt-5">
          <motion.button
            className={` hover:scale-150 transition-all ${index === 0 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
            onClick={() => {
              setDirection(true);
              setIndex(index - 1);
            }}
          >
            {arrowIcons[0]}
          </motion.button>
          <motion.button
            className={`hover:scale-150 transition-all ${index === reviewsData.length - 1 ? "opacity-30 pointer-events-none" : "opacity-100 pointer-events-auto"}`}
            onClick={() => {
              setDirection(false);
              setIndex(index + 1);
            }}
          >
            {arrowIcons[1]}
          </motion.button>
        </div>
      </div>
    </div>
  );
}
