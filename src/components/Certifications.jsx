import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import AWS from '../assets/images/aws.png';
import AWSCERT from '../assets/images/awscert.png';
import KS from '../assets/images/ks.png';
import CLOUD101 from '../assets/images/cloud-101.png';
import { easeOut, transition, viewportOnce } from '../motion/variants';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    link: 'https://www.credly.com/badges/3f144ce9-db0b-48dd-b790-8f7e4e6fe606',
    icon: AWS,
  },
  {
    title: 'AWS Partner: Technical Accredited',
    issuer: 'Amazon Web Services (AWS)',
    link: 'https://www.credly.com/badges/d3a14a88-713b-4076-bff1-6eb4b31f304d',
    icon: AWSCERT,
  },
  {
    title: 'MERN STACK DEVELOPMENT',
    issuer: 'KNOWLEDGE STREAM',
    link: 'https://knowledge.tech/',
    icon: KS,
  },
  {
    title: 'AWS Educate Introduction to Cloud 101',
    issuer: 'AWS Educate',
    link: 'https://www.credly.com/badges/fa311ca7-3dc8-4698-bcae-cc5a790655a2/linked_in_profile',
    icon: CLOUD101,
  },
];

function Certifications() {
  const reduced = useReducedMotion();

  return (
    <section id="certifications" className="border-b border-line bg-panel px-4 py-16 md:px-10 md:py-20 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.5)}
        >
          <p className="section-label">Credentials</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white md:text-4xl">My Certifications</h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification, index) => (
            <motion.a
              key={certification.title}
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduced ? false : { opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewportOnce}
              transition={{
                duration: reduced ? 0 : 0.5,
                delay: reduced ? 0 : index * 0.1,
                ease: easeOut,
              }}
              whileHover={reduced ? {} : { y: -6, transition: { duration: 0.22 } }}
              className="group flex h-full flex-col border border-line bg-canvas p-5 transition-colors hover:border-hot"
            >
              <div className="mb-4 flex items-center gap-3">
                <motion.img
                  src={certification.icon}
                  alt={certification.issuer}
                  className="h-11 w-11 rounded-full border border-line object-cover"
                  whileHover={reduced ? {} : { rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.45 }}
                />
                <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-600">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold leading-snug text-white group-hover:text-hot">
                {certification.title}
              </h3>
              <p className="mt-3 font-mono text-[11px] leading-relaxed text-zinc-500">
                Issued by: {certification.issuer}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
