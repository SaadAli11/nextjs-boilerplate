"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-0">

        I'm graduate with a Bachelor's degree in Computer Science. Highly skilled in modern<span className="italic"> Web-Development</span>. My ability to adapt and
        quickly learn new languages and technologies has been showcased through my continuous self-improvement efforts.

          <span className="italic"> My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My stack
          is{" "}
          <span className="font-medium">
          React, Next.js, TypeScript, Redux-toolkit, RESTFul API, GraphQL, Material UI,
          ReactStrap and Bootstrap
        </span>
          . I am always looking to
          learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a React/Next.js Developer.

      </p>

      {/*<p>*/}
      {/*  <span className="italic">When I'm not coding</span>, I enjoy playing*/}
      {/*  video games, watching movies, and playing with my dog. I also enjoy{" "}*/}
      {/*  <span className="font-medium">learning new things</span>. I am currently*/}
      {/*  learning about{" "}*/}
      {/*  <span className="font-medium">history and philosophy</span>. I'm also*/}
      {/*  learning how to play the guitar.*/}
      {/*</p>*/}

    </motion.section>
  );
}
