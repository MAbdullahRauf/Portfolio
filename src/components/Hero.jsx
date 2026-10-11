import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import portrait from "../assets/images/portrait.jpg";
import { easeOut } from "../motion/variants";
import { resumeDownload, resumeHref } from "../site";

const stagger = (reduced) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : 0.08,
      delayChildren: reduced ? 0 : 0.05,
    },
  },
});

const fadeUp = (reduced) => ({
  hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.5, ease: easeOut },
  },
});

function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100svh-3.5rem)] flex-col justify-center border-b border-line px-5 py-16 md:px-10 lg:min-h-screen lg:px-14 lg:py-24"
    >
      <div className="mx-auto w-full max-w-content">
        <motion.div variants={stagger(reduced)} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.div variants={fadeUp(reduced)} className="mb-8 lg:hidden">
            <img
              src={portrait}
              alt="Abdullah Rauf"
              className="h-24 w-24 rounded-2xl object-cover object-top ring-1 ring-line"
            />
          </motion.div>

          <motion.p variants={fadeUp(reduced)} className="kicker">
            DevSecOps · Cloud · Compliance
          </motion.p>

          <motion.h1
            variants={fadeUp(reduced)}
            className="mt-5 font-display text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[1.05] tracking-tight text-ink"
          >
            Building platforms that stay secure as they scale.
          </motion.h1>

          <motion.div variants={fadeUp(reduced)} className="mt-9 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="focus-ring inline-flex items-center justify-center rounded-md bg-ink px-5 py-3 text-sm font-medium text-canvas transition hover:bg-pine"
            >
              Get in touch
            </a>
            <a
              href={resumeHref}
              download={resumeDownload}
              className="focus-ring inline-flex items-center justify-center rounded-md border border-line bg-paper px-5 py-3 text-sm font-medium text-ink transition hover:border-pine hover:text-pine"
            >
              Download resume
            </a>
          </motion.div>
        </motion.div>

        <motion.dl
          className="mt-16 grid max-w-3xl grid-cols-1 gap-6 border-t border-line pt-8 sm:grid-cols-2"
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduced ? 0 : 0.5, delay: reduced ? 0 : 0.35, ease: easeOut }}
        >
          {[
            ["Focus", "Secure delivery on AWS, Azure, GCP, and on-prem"],
            ["Practice", "SOC 2, ISO 27001, and guarded pipelines"],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs uppercase tracking-[0.16em] text-brass">{label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-ink">{value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

export default Hero;
