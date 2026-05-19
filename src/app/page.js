"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/skills";
import Reviews from "@/components/Reviews";
import Projects from "@/components/Projects";
import Contact from "@/components/contact";
import Navbar from "@/components/Navbar";
import Toggle from "@/components/sub/Toggle";
import Load from "@/components/sub/Load";

export default function Home() {
  return (
    <>
      <Load />
      <Toggle>
        <div className="w-min">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Reviews />
          <Projects />
          <Contact />
        </div>
      </Toggle>
    </>
  );
}
