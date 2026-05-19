import { motion, useMotionValue } from "framer-motion";

export default function Achievements({ icon, amount, title }) {
  const number = useMotionValue(0);

  function count(amount) {
    let i = 0;
    function updateCount() {
      let timeOut;
      if (i <= amount) {
        number.set(i++);
        timeOut = setTimeout(updateCount, 0);
      } else {
        clearTimeout(timeOut);
      }
    }
    updateCount();
  }
  return (
    <div className="flex items-end gap-x-3">
      <span className="text-4xl text-gray-300 max-lg:text-2xl">{icon}</span>
      <h1 className="flex flex-col gap-y-2 ">
        <motion.span
          className="text-2xl max-lg:text-xl font-light text-yellow-500 "
          whileInView={() => count(amount)}
          viewport={{ once: true }}
        >
          {number}
        </motion.span>
        <span className="text-sm tracking-wide text-gray-500 dark:text-white transition-colors">
          {title}
        </span>
      </h1>
    </div>
  );
}
