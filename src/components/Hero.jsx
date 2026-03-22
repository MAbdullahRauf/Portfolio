import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut } from '../motion/variants';

const staggerContainer = (reduced) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reduced ? 0 : 0.09,
      delayChildren: reduced ? 0 : 0.08,
    },
  },
});

const fadeUp = (reduced) => ({
  hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.55, ease: easeOut },
  },
});

function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100svh-3.5rem)] flex-col justify-center border-b border-line bg-canvas px-4 py-16 md:px-10 md:py-20 md:pb-24 md:pt-12 lg:min-h-screen lg:px-14 lg:py-24 xl:py-28"
    >
      <div className="mx-auto w-full max-w-content">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-12 xl:gap-10 xl:items-start">
          <motion.div
            className="relative z-10 min-w-0 xl:col-span-8 xl:pl-4"
            variants={staggerContainer(reduced)}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={fadeUp(reduced)} className="section-label">
              Intro
            </motion.p>
            <motion.h1
              variants={fadeUp(reduced)}
              className="mt-6 max-w-full break-words font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-white xl:pr-6 xl:text-[clamp(1.85rem,3.2vw,3rem)]"
            >
              DevOps Engineer
              <br />
              <span className="text-zinc-500">&amp; Cloud Infrastructure</span>
              <br />
              Specialist
            </motion.h1>
            <motion.p
              variants={fadeUp(reduced)}
              className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl"
            >
              Building scalable, reliable, and secure cloud infrastructure with cutting-edge DevOps practices
            </motion.p>
            <motion.div variants={fadeUp(reduced)} className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className="focus-ring inline-flex items-center justify-center border border-hot bg-hot px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white hover:text-black"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={reduced ? {} : { scale: 1.02 }}
                whileTap={reduced ? {} : { scale: 0.98 }}
                className="focus-ring inline-flex items-center justify-center border border-line bg-panel px-8 py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-white transition hover:border-hot hover:text-hot"
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-0 min-w-0 xl:col-span-4 xl:self-start"
            initial={reduced ? false : { opacity: 0, x: 36, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{
              duration: reduced ? 0 : 0.65,
              delay: reduced ? 0 : 0.25,
              ease: easeOut,
            }}
          >
            <motion.div
              className="border border-line bg-panel p-6 font-mono text-xs leading-relaxed text-zinc-400 md:text-sm xl:max-w-none"
              whileHover={reduced ? {} : { borderColor: 'rgba(255, 79, 0, 0.35)' }}
              transition={{ duration: 0.25 }}
            >
              <div className="mb-4 flex items-center justify-between border-b border-line pb-3 text-[10px] uppercase tracking-widest text-zinc-600">
                <span>session.log</span>
                <span className="text-hot">● live</span>
              </div>
              <p className="text-zinc-500">$ whoami</p>
              <p className="mt-2 text-zinc-300">
                Muhammad Abdullah — DevOps Engineer & Cloud Infrastructure Specialist
              </p>
              <p className="mt-6 text-zinc-500">$ cat mission.txt</p>
              <p className="mt-2 text-zinc-400">
                Building scalable, reliable, and secure cloud infrastructure with cutting-edge DevOps practices
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
