import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Skills() {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      skills: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Digital Ocean"]
    },
    {
      title: "CI/CD & Automation",
      skills: ["Jenkins", "GitHub Actions", "GitLab CI", "CircleCI"]
    },
    {
      title: "Infrastructure as Code",
      skills: ["Terraform", "AWS CloudFormation", "Ansible", "Pulumi"]
    },
    {
      title: "Containerization & Orchestration",
      skills: ["Docker", "Kubernetes", "AWS ECS", "Docker Swarm"]
    },
    {
      title: "Monitoring & Logging",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "Bash", "JavaScript", "Go"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <Fade direction="up">
          <h2 className="text-4xl font-extrabold mb-4 text-center animate__animated animate__fadeIn text-white">
            Technical Skills
          </h2>
        </Fade>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 bg-opacity-50 rounded-2xl p-6 shadow-lg hover:shadow-blue-600/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center gap-3 text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
