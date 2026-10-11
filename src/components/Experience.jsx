import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { transition, viewportOnce } from "../motion/variants";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Axiom World",
    context: "Intellilake",
    period: "Feb 2026 – Present",
    points: [
      "Senior DevOps scope for Intellilake, a product fintech platform, covering cloud infrastructure and the delivery systems around it.",
      "Operate in a high-security environment supporting enterprise relationships with institutions such as Millennium, KKR, and JP Morgan.",
      "Own SDLC practice and the secure AWS footprint, with compliance treated as part of the design rather than a later review.",
      "Lead the internal team on day-to-day support for Odoo and custom ERP systems.",
    ],
  },
  {
    title: "DevSecOps Engineer",
    company: "Onex Studio",
    context: "AI governance platform",
    period: "Jan 2025 – 2026",
    points: [
      "Worked on an enterprise platform for AI observability and governance: model monitoring, safety, compliance, and FinOps.",
      "Contributed to SOC 2 and ISO 27001, strengthening the security posture required by clients such as FPT.",
      "Joined the product early and stayed through its growth into an enterprise-grade platform, across infrastructure stability and security engineering.",
    ],
  },
  {
    title: "DevOps Engineer",
    company: "Ideatolife",
    context: "Dubai · MENA clients",
    period: "Feb 2024 – 2026",
    points: [
      "Delivered DevOps and cloud infrastructure for a Dubai-based technology firm serving clients across the MENA region, including PwC, Kulud, and DISC.",
      "Provisioned and automated cloud environments, and kept resource use efficient enough to stay reliable.",
      "Designed and maintained infrastructure for multiple client projects across production, staging, and UAT.",
      "Worked with engineering teams on infrastructure problems and on how those environments were actually used.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Syntax Digital",
    context: "Web applications",
    period: "Jun 2022 – 2023",
    points: [
      "Built web applications on Laravel and Node, with attention to performance, maintainability, and how the product felt to use.",
      "Implemented authentication and authorization with JWT, OAuth, and Firebase.",
      "Worked in TypeScript codebases to improve reliability and reduce runtime issues in production.",
    ],
  },
];

function Experience() {
  const reduced = useReducedMotion();

  return (
    <section id="experience" className="border-b border-line bg-paper px-5 py-20 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <p className="kicker">Experience</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">Where I have worked</h2>
        </motion.div>

        <div className="mt-12">
          {experiences.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ ...transition(reduced, 0.45), delay: reduced ? 0 : 0.04 * index }}
              className="grid gap-6 border-t border-line py-10 lg:grid-cols-12 lg:gap-10"
            >
              <div className="lg:col-span-4">
                <p className="text-xs uppercase tracking-[0.16em] text-brass">{role.period}</p>
                <h3 className="mt-3 font-display text-2xl font-medium text-ink">{role.title}</h3>
                <p className="mt-2 text-sm text-pine">{role.company}</p>
                <p className="mt-1 text-sm text-muted">{role.context}</p>
              </div>
              <ul className="space-y-3 text-sm leading-relaxed text-muted lg:col-span-8">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-pine" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
