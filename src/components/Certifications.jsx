import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { transition, viewportOnce } from "../motion/variants";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/3f144ce9-db0b-48dd-b790-8f7e4e6fe606",
  },
  {
    title: "AWS Partner: Technical Accredited",
    issuer: "Amazon Web Services",
    href: "https://www.credly.com/badges/d3a14a88-713b-4076-bff1-6eb4b31f304d",
  },
  {
    title: "Be Smart, Be Secure",
    issuer: "PwC",
  },
  {
    title: "AWS Educate Introduction to Cloud 101",
    issuer: "AWS Educate",
    href: "https://www.credly.com/badges/fa311ca7-3dc8-4698-bcae-cc5a790655a2/linked_in_profile",
  },
  {
    title: "MERN Stack Development",
    issuer: "Knowledge Stream",
    href: "https://knowledge.tech/",
  },
];

function Certifications() {
  const reduced = useReducedMotion();

  return (
    <section id="certifications" className="border-b border-line px-5 py-20 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <p className="kicker">Credentials</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">Certifications</h2>
        </motion.div>

        <ul className="mt-10 divide-y divide-line border-y border-line">
          {certifications.map((item, index) => {
            const inner = (
              <>
                <div>
                  <h3 className="font-display text-lg font-medium text-ink group-hover:text-pine">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] text-brass">
                  {item.href ? "View" : "Listed"}
                </span>
              </>
            );

            return (
              <motion.li
                key={item.title}
                initial={reduced ? false : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...transition(reduced, 0.35), delay: reduced ? 0 : index * 0.04 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-6 py-5"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center justify-between gap-6 py-5">{inner}</div>
                )}
              </motion.li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

export default Certifications;
