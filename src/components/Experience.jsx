import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

function Experience() {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Ideatolife",
      period: "Feb 2024 - Present",
      description: [
        "Managing and optimizing CI/CD pipelines to ensure efficient software delivery.",
        "Automating cloud infrastructure and deployment processes using modern tools.",
        "Enhancing system reliability and scalability through containerization and orchestration.",
        "Collaborating with teams to improve development and operational workflows.",
        "Monitoring and optimizing system performance for better user experiences."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white">
      <div className="container mx-auto px-4">
        <Fade direction="up">
          <h2 className="text-4xl font-extrabold mb-4 text-center animate__animated animate__fadeIn text-white">
            Work Experience
          </h2>
        </Fade>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-600">
            {experiences.map((exp, index) => (
              <Zoom key={index} triggerOnce>
                <div className="mb-10 ml-6">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 border-4 border-gray-950"></div>
                  <div className="bg-gray-800 bg-opacity-70 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:scale-105 hover:bg-opacity-80 animate__animated animate__fadeInUp">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2">{exp.title}</h3>
                    <div className="flex justify-between flex-wrap mb-3">
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                      <p className="text-gray-500">{exp.period}</p>
                    </div>
                    <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Zoom>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
