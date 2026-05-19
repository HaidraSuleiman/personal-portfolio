"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div id="contact" className="h-screen py-20  ">
      <div className="w-full h-full my-auto flex max-lg:flex-col items-center justify-between max-lg:justify-center gap-x-20 max-lg:gap-x-0 gap-y-20">
        <motion.div
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <Image
            src="/contactlogo.png"
            alt="contact image"
            width={400}
            height={400}
            className="w-100 rounded-md opacity-90"
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0, x: 150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-150 max-lg:w-100 max-sm:w-full flex flex-col gap-3"
        >
          <div className="w-full flex max-lg:flex-col gap-x-3 max-lg:gap-y-3">
            <input
              type="text"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm tracking-wider text-gray-500 outline-none"
              placeholder="Your E-mail"
            />
          </div>
          <input
            type="text"
            className="w-full border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Subject"
          />
          <textarea
            className="max-h-62.5 min-h-37.5 border border-yellow-500 rounded-md bg-zinc-100 px-4 py-2
            text-sm tracking-wider text-gray-500 outline-none"
            placeholder="Message"
          ></textarea>
          <input
            type="sumbit"
            className="w-full border border-yellow-500 rounded-md bg-yellow-400 px-4 py-2 font-light 
            text-sm tracking-wider text-white outline-none hover:bg-yellow-500 transition-colors cursor-pointer text-center"
            value="Send Message"
            readOnly
          />
        </motion.form>
      </div>
    </div>
  );
}
