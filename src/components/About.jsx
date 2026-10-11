import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { transition, viewportOnce } from "../motion/variants";

const focuses = [
  {
    title: "Cloud platforms",
    body: "AWS, Azure, Google Cloud, Oracle Cloud, and on-prem environments, provisioned and kept in a state teams can reason about.",
  },
  {
    title: "Security and compliance",
    body: "SOC 2 and ISO 27001 work, plus SAST, DAST, secrets management, and the policies that keep a codebase from drifting.",
  },
  {
    title: "Reliability",
    body: "Observability, disaster recovery, and cost control so production stays understandable when something actually breaks.",
  },
];

function About() {
  const reduced = useReducedMotion();

  return (
    <section id="about" className="border-b border-line px-5 py-20 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-x-16">
          <motion.div
            className="lg:col-span-7"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transition(reduced, 0.45)}
          >
            <p className="kicker">About</p>
            <h2 className="mt-3 font-display text-4xl font-medium leading-tight text-ink md:text-5xl">How I work</h2>
            <p className="mt-6 text-base leading-relaxed text-muted">
              I help teams ship faster and safer by building smart, secure & scalable DevOps solutions that deliver
              stability and speed. I bridge the gap between development and operations to create systems that are
              efficient, resilient, and built to grow. I believe effective DevOps goes beyond tools and
              pipelines—it is about building a culture of collaboration, accountability, and continuous delivery that
              supports long-term engineering excellence.
            </p>
          </motion.div>

          <div className="lg:col-span-5 lg:pt-[1.85rem]">
            {focuses.map((item, i) => (
              <motion.div
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...transition(reduced, 0.4), delay: reduced ? 0 : 0.06 * i }}
                className={i === 0 ? "" : "mt-6 border-t border-line pt-6"}
              >
                <h3 className="font-display text-xl font-medium leading-tight text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
