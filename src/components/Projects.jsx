import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import kulud from "../assets/images/kulud.png";
import PWC from "../assets/images/pwc.png";
import KAUST from "../assets/images/kaust.jpg";
import intellilake from "../assets/images/intellilake.png";
import kenzer from "../assets/images/kenzer.png";
import onex from "../assets/images/onex.png";
import { easeOut, transition, viewportOnce } from "../motion/variants";

const projects = [
  {
    title: "Intellilake",
    sector: "Fintech",
    description:
      "Product fintech platform. I own the SDLC and the secure AWS footprint, and I lead internal support for Odoo and custom ERP in an environment tied to institutional finance clients.",
    tech: ["AWS", "SDLC", "Compliance", "ERP"],
    image: intellilake,
  },
  {
    title: "Onex",
    sector: "AI governance",
    description:
      "Enterprise platform for model monitoring, safety, compliance, and FinOps. I contributed to SOC 2 and ISO 27001 as the product grew into something clients such as FPT could depend on.",
    tech: ["SOC 2", "ISO 27001", "FinOps", "Security"],
    image: onex,
  },
  {
    title: "PwC",
    sector: "Professional services",
    description:
      "Cloud infrastructure and delivery for a global professional services engagement, spanning Azure, pipelines, Kubernetes, and the monitoring around them.",
    tech: ["Azure", "Azure DevOps", "GitLab", "Kubernetes"],
    image: PWC,
  },
  {
    title: "Kulud",
    sector: "Online pharmacy",
    description:
      "Infrastructure for Qatar’s large online pharmacy: containers, CI/CD, managed databases, and monitoring for a catalogue that has to stay available.",
    tech: ["Azure", "Docker", "CI/CD", "RDS"],
    image: kulud,
  },
  {
    title: "KAUST",
    sector: "Research university",
    description:
      "Cloud environment for King Abdullah University of Science and Technology, including CI, machine learning services, and infrastructure templates on AWS.",
    tech: ["AWS", "Jenkins", "SageMaker", "CloudFormation"],
    image: KAUST,
  },
  {
    title: "Kenzer",
    sector: "Hiring",
    description:
      "Hiring platform on AWS. Infrastructure as code, container services, and monitoring around the recruiting workflow.",
    tech: ["AWS", "Terraform", "ECS", "Monitoring"],
    image: kenzer,
  },
];

function Projects() {
  const reduced = useReducedMotion();

  return (
    <section id="projects" className="border-b border-line px-5 py-20 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          className="max-w-2xl"
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <p className="kicker">Selected work</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">Platforms and client environments</h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            A sample of the products and organisations I have helped run infrastructure for. Detail stays high level
            where the environment is sensitive.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{
                duration: reduced ? 0 : 0.45,
                delay: reduced ? 0 : (index % 2) * 0.06,
                ease: easeOut,
              }}
              className="flex flex-col rounded-lg border border-line bg-paper"
            >
              <div className="flex h-28 items-center justify-between border-b border-line px-6">
                {project.image ? (
                  <img src={project.image} alt="" className="max-h-12 w-auto max-w-[10rem] object-contain" />
                ) : (
                  <span className="font-display text-3xl font-medium text-pine">{project.title}</span>
                )}
                <span className="text-xs uppercase tracking-[0.16em] text-brass">{project.sector}</span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-medium text-ink">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <li key={tech} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
