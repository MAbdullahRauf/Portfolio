import React from 'react';
import kulud from '../assets/images/kulud.png'
import PWC from '../assets/images/pwc.png'
import KAUST from '../assets/images/kaust.jpg'
import { Fade } from 'react-awesome-reveal';

function Projects() {
  const projects = [
    {
      title: "Kulud",
      description: "Qatar's Biggest Online Pharmacy - Medicine, Vitamins, Skin Care & More! ",
      tech: ["Azure", "Docker", "CICD", "Monitoring", "RDS", ],
      image: kulud,
      link: "#"
    },
    {
      title: "PWC",
      description: "PwC is a large professional services network, with PricewaterhouseCoopers (PwC) being the global network.",
      tech: ["Azure", "Azure DevOps", "Gitlab", "Kubernetes", "Helm", "Monitoring"],
      image: PWC,
      link: "#"
    },
    {
      title: "KAUST",
      description: "King Abdullah University of Science and Technology, International graduate-level science and technology research university",
      tech: ["AWS", "Jenkins", "AWS SageMaker", "Lamda", "Cloud Formation"],
      image: KAUST,
      link: "#"
    },
 
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <Fade direction="up">
          <h2 className="text-4xl font-extrabold mb-4 text-center animate__animated animate__fadeIn text-white">
            Featured Projects
          </h2>
        </Fade>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-blue-600/40 transition-all duration-300"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-t-2xl"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-500 bg-opacity-20 text-blue-300 text-xs font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="inline-block text-blue-400 hover:text-blue-500 font-medium transition"
                >
                 
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
