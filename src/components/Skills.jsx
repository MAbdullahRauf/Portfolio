import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms ☁️",
      skills: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Digital Ocean"]
    },
    {
      title: "CI/CD & Automation 🔁",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"]
    },
    {
      title: "Infrastructure as Code 💻",
      skills: ["Terraform", "AWS CloudFormation", "Ansible", "Pulumi"]
    },
    {
      title: "Containerization & Orchestration 🐳",
      skills: ["Docker", "Kubernetes", "AWS ECS", "Docker Swarm"]
    },
    {
      title: "Monitoring & Logging 📊",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      title: "Programming Languages 👨‍💻",
      skills: ["Python", "Bash", "JavaScript", "Go"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <Fade direction="up">
          <h2 className="text-4xl font-extrabold mb-4 text-center text-white">
            Technical Skills
          </h2>
        </Fade>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <Zoom triggerOnce>
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/40 transition-all duration-500 hover:scale-[1.03] transform hover:brightness-110 group">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400 group-hover:text-white transition duration-300">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-3 text-gray-300 group-hover:text-white transition duration-200">
                        <span className="w-2.5 h-2.5 bg-blue-500 rounded-full group-hover:bg-white transition duration-300"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </Zoom>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
