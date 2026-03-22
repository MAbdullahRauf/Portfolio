import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { easeOut, transition, viewportOnce } from '../motion/variants';

function Skills() {
  const reduced = useReducedMotion();

  const skillCategories = [
    {
      title: 'Cloud Platforms ☁️',
      skills: [
        'AWS',
        'Microsoft Azure',
        'Google Cloud Platform',
        'Oracle Cloud (OCI)',
        'DigitalOcean',
        'Railway',
        'Hostinger',
        'On-prem',
      ],
    },
    {
      title: 'CI/CD & Automation 🔁',
      skills: [
        'Jenkins',
        'GitHub Actions',
        'GitLab CI',
        'CircleCI',
        'Azure DevOps',
        'Argo CD',
        'Flux',
        'Tekton',
        'TeamCity',
      ],
    },
    {
      title: 'Infrastructure as Code 💻',
      skills: [
        'Terraform',
        'Terragrunt',
        'AWS CloudFormation',
        'Ansible',
        'Pulumi',
        'Helm',
        'Crossplane',
        'Packer',
      ],
    },
    {
      title: 'Containerization & Orchestration 🐳',
      skills: [
        'Docker',
        'Kubernetes',
        'AWS ECS',
        'EKS',
        'GKE',
        'AKS',
        'Docker Swarm',
        'Podman',
        'Rancher',
        'Nomad',
      ],
    },
    {
      title: 'Monitoring & Logging 📊',
      skills: [
        'Prometheus',
        'Grafana',
        'ELK Stack',
        'Loki',
        'Datadog',
        'New Relic',
        'Splunk',
        'OpenTelemetry',
        'Jaeger',
        'CloudWatch',
      ],
    },
    {
      title: 'Programming Languages 👨‍💻',
      skills: ['Python', 'Bash', 'JavaScript', 'TypeScript', 'Go', 'YAML', 'HCL'],
    },
  ];

  return (
    <section id="skills" className="border-b border-line bg-canvas px-4 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <motion.div
            className="lg:col-span-4 lg:sticky lg:top-8"
            initial={reduced ? false : { opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={transition(reduced, 0.55)}
          >
            <p className="section-label">Capability map</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">Technical Skills</h2>
          </motion.div>
          <div className="space-y-0 border-t border-line lg:col-span-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={reduced ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{
                  ...transition(reduced, 0.45),
                  delay: reduced ? 0 : index * 0.06,
                }}
                className="border-b border-line py-8 last:border-b-0"
              >
                <motion.h3
                  className="font-display text-lg font-semibold text-white md:text-xl"
                  initial={reduced ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{ delay: reduced ? 0 : 0.05 }}
                >
                  {category.title}
                </motion.h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={reduced ? false : { opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={viewportOnce}
                      transition={{
                        duration: reduced ? 0 : 0.3,
                        delay: reduced ? 0 : skillIndex * 0.025 + index * 0.04,
                        ease: easeOut,
                      }}
                      whileHover={reduced ? {} : { scale: 1.05, borderColor: 'rgba(255, 79, 0, 0.45)' }}
                      className="border border-line bg-panel px-3 py-1.5 font-mono text-xs text-zinc-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
