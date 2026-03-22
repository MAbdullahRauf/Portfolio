import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import picofme from '../assets/images/picofmeupdatednew.jpeg';
import { easeOut, transition, viewportOnce } from '../motion/variants';

const cards = [
  { title: 'Cloud Platforms', body: 'AWS, Google Cloud, Azure' },
  { title: 'Infrastructure as Code', body: 'Terraform, CloudFormation, Pulumi' },
  { title: 'Containerization', body: 'Docker, Kubernetes, ECS' },
];

function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="border-b border-line bg-canvas px-4 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.5)}
        >
          <p className="section-label">Profile</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">About Me</h2>
        </motion.div>

        <div className="mt-12 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transition(reduced, 0.55), delay: reduced ? 0 : 0.05 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">Hi, I'm Muhammad Abdullah</h3>
            <p className="mt-6 leading-relaxed text-zinc-400">
              A passionate{' '}
              <span className="font-semibold text-hot">DevOps Engineer & Cloud Infrastructure Specialist</span>{' '}
              dedicated to building scalable, secure, and highly available systems. With a strong foundation in both
              software development and operations, I excel at bridging the gap between innovation and stability.
            </p>
            <p className="mt-5 leading-relaxed text-zinc-500">
              My expertise spans across automating cloud environments, implementing CI/CD pipelines, optimizing
              infrastructure costs, and ensuring the highest standards of system security and performance. I thrive on
              solving complex challenges and enabling teams to deliver faster, safer, and smarter.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ ...transition(reduced, 0.4), delay: reduced ? 0 : 0.08 * i }}
                  whileHover={reduced ? {} : { y: -4, borderColor: 'rgba(255, 79, 0, 0.4)' }}
                  className="border border-line bg-panel p-4 transition-colors"
                >
                  <h4 className="font-mono text-[10px] font-semibold uppercase tracking-widest text-hot">{card.title}</h4>
                  <p className="mt-2 text-sm text-zinc-400">{card.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.94, rotate: -1 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={viewportOnce}
            transition={{ ...transition(reduced, 0.65), ease: easeOut }}
            className="order-1 lg:order-2"
          >
            <div className="relative mx-auto max-w-md lg:ml-auto">
              <motion.div
                aria-hidden
                className="absolute -inset-3 border border-hot/40"
                initial={reduced ? false : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={viewportOnce}
                transition={{ delay: reduced ? 0 : 0.2, duration: reduced ? 0 : 0.5 }}
              />
              <motion.div
                className="relative aspect-square overflow-hidden bg-panel"
                whileHover={reduced ? {} : { scale: 1.02 }}
                transition={{ duration: 0.35, ease: easeOut }}
              >
                <img src={picofme} alt="Muhammad Abdullah" className="h-full w-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
