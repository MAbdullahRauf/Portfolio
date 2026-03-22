import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut, transition, viewportOnce } from '../motion/variants';

function Experience() {
  const reduced = useReducedMotion();

  const experiences = [
    {
      title: 'DevOps Engineer',
      company: 'Axiom World',
      period: 'Feb 2026 – Present',
      description: [
        'Lead infrastructure strategy and execution for high-profile, enterprise-grade platforms serving regulated and large-scale user bases.',
        'Architect resilient multi-region cloud estates with strong emphasis on security, compliance, observability, and cost governance.',
        'Drive platform engineering initiatives spanning Kubernetes, service mesh, zero-trust networking, and automated recovery patterns.',
        'Partner with executive stakeholders to align infrastructure roadmaps with business-critical delivery timelines and SLAs.',
        'Establish SRE practices, incident response, and capacity planning to keep mission-critical workloads performant under peak demand.',
      ],
    },
    {
      title: 'DevOps Engineer',
      company: 'OnexStudio',
      period: 'Feb 2025 – Present',
      description: [
        'Design, deploy, and operate cloud-native infrastructure supporting production applications with clear ownership of reliability targets.',
        'Implement infrastructure as code, automated provisioning, and repeatable release pipelines across staging and production environments.',
        'Harden networking, secrets management, and access patterns to keep workloads secure without slowing delivery.',
        'Instrument services with logging, metrics, and alerting to shorten detection and resolution of operational issues.',
        'Collaborate with product and engineering teams to right-size resources, reduce toil, and improve deployment frequency safely.',
      ],
    },
    {
      title: 'Associate DevOps Engineer',
      company: 'Ideatolife',
      period: 'Feb 2024 - Present',
      description: [
        'Managing and optimizing CI/CD pipelines to ensure efficient software delivery.',
        'Automating cloud infrastructure and deployment processes using modern tools.',
        'Enhancing system reliability and scalability through containerization and orchestration.',
        'Collaborating with teams to improve development and operational workflows.',
        'Monitoring and optimizing system performance for better user experiences.',
      ],
    },
    {
      title: 'Frontend Developer',
      company: 'Stynax-Digital',
      period: 'Jun 2022 – Nov 2023',
      description: [
        'Developed responsive and interactive user interfaces using React.js / Next.js.',
        'Optimized frontend performance with lazy loading, code splitting, and bundle size reduction using Webpack/Vite.',
        'Implemented authentication and authorization flows using JWT, OAuth, and Firebase Auth.',
        'Developed custom reusable components and maintained a component library for design consistency across products.',
        'Worked with TypeScript to ensure type safety and reduce runtime errors in complex React applications.',
      ],
    },
  ];

  return (
    <section id="experience" className="border-b border-line bg-panel px-4 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          className="max-w-2xl"
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <p className="section-label">Timeline</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">Work Experience</h2>
        </motion.div>

        <div className="mt-14 space-y-0">
          {experiences.map((exp, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.article
                key={`${exp.company}-${exp.period}`}
                initial={reduced ? false : { opacity: 0, x: fromLeft ? -48 : 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportOnce}
                transition={{
                  ...transition(reduced, 0.55),
                  delay: reduced ? 0 : 0.06 * index,
                }}
                className="grid gap-8 border-t border-line py-12 lg:grid-cols-12 lg:gap-10"
              >
                <div className="lg:col-span-4">
                  <motion.p
                    className="font-mono text-5xl font-bold leading-none text-zinc-800 md:text-6xl"
                    initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewportOnce}
                    transition={{ ...transition(reduced, 0.4), delay: reduced ? 0 : 0.05 + index * 0.04 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.p>
                  <h3 className="mt-4 font-display text-2xl font-bold text-white">{exp.title}</h3>
                  <div className="mt-3 flex flex-col gap-1 font-mono text-sm">
                    <span className="text-hot">{exp.company}</span>
                    <span className="text-zinc-500">{exp.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-zinc-400 lg:col-span-8">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3"
                      initial={reduced ? false : { opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewportOnce}
                      transition={{
                        duration: reduced ? 0 : 0.35,
                        delay: reduced ? 0 : 0.08 * i + index * 0.03,
                        ease: easeOut,
                      }}
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-hot" aria-hidden />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Experience;
