import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { transition, viewportOnce } from "../motion/variants";

const groups = [
  {
    title: "Cloud",
    skills: ["AWS", "Microsoft Azure", "Google Cloud", "Oracle Cloud", "Contabo", "Hostinger", "Railway", "On-premises"],
  },
  {
    title: "CI/CD",
    skills: ["GitHub Actions", "GitLab CI/CD", "Jenkins", "Azure Pipelines", "Bitbucket Pipelines"],
  },
  {
    title: "Observability",
    skills: [
      "Grafana",
      "Prometheus",
      "Promtail",
      "Loki",
      "Node Exporter",
      "Alertmanager",
      "Datadog",
      "Elasticsearch",
      "Logstash",
      "Kibana",
      "BullMQ",
    ],
  },
  {
    title: "Containers",
    skills: ["Docker", "Docker Swarm", "Kubernetes", "Windows, Linux, and macOS desktop builds"],
  },
  {
    title: "Security and compliance",
    skills: [
      "SOC 2",
      "ISO 27001",
      "SonarQube",
      "Sentry",
      "Burp Suite",
      "CodeRabbit",
      "Sprinto",
      "OWASP",
      "SAST",
      "DAST",
      "Trivy",
      "Docker Scout",
      "GitLeaks",
      "Dependabot",
      "Penetration testing",
    ],
  },
  {
    title: "Infrastructure and secrets",
    skills: [
      "Terraform",
      "Pulumi",
      "Crossplane",
      "AWS Control Tower",
      "AWS Secrets Manager",
      "Azure Key Vault",
      "HashiCorp Vault",
      "Bitwarden",
    ],
  },
  {
    title: "Recovery and cost",
    skills: [
      "Machine images",
      "Database dumps",
      "Versioned application images",
      "S3 versioning",
      "Multi-region replication",
      "Cost anomaly detection",
    ],
  },
];

function Skills() {
  const reduced = useReducedMotion();

  return (
    <section id="skills" className="border-b border-line bg-paper px-5 py-20 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <div className="grid gap-12 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-10 lg:self-start"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={transition(reduced, 0.45)}
          >
            <p className="kicker">Skills</p>
            <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">What I work with</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Tools change with the environment. The constant is secure automation, a clear SDLC, and infrastructure
              someone else can operate after me.
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            {groups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={reduced ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ ...transition(reduced, 0.4), delay: reduced ? 0 : index * 0.03 }}
                className="border-t border-line py-6"
              >
                <h3 className="font-display text-xl font-medium text-ink">{group.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-full border border-line bg-canvas px-3 py-1 text-sm text-ink">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
