import React from 'react';
import { motion } from 'framer-motion';
import picofme from '../assets/images/picofme.png';

function About() {
  return (
    <section id="about" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div 
              className="w-full md:w-1/3"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-square bg-gray-800 rounded-full overflow-hidden shadow-lg">
                <img 
                  src={picofme}
                  alt="Muhammad Abdullah" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full md:w-2/3"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-semibold mb-6">
                Hi, I'm Muhammad Abdullah
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A passionate <span className="text-blue-500 font-semibold">DevOps Engineer & Cloud Infrastructure Specialist</span> dedicated to building scalable, secure, and highly available systems. 
                With a strong foundation in both software development and operations, I excel at bridging the gap between innovation and stability.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                My expertise spans across automating cloud environments, implementing CI/CD pipelines, optimizing infrastructure costs, and ensuring the highest standards of system security and performance.
                I thrive on solving complex challenges and enabling teams to deliver faster, safer, and smarter.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <motion.div 
                  className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl shadow-lg flex-1 min-w-[250px]"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-blue-500 mb-2">Cloud Platforms</h4>
                  <p className="text-gray-400">AWS, Google Cloud, Azure</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl shadow-lg flex-1 min-w-[250px]"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-blue-500 mb-2">Infrastructure as Code</h4>
                  <p className="text-gray-400">Terraform, CloudFormation, Pulumi</p>
                </motion.div>
                <motion.div 
                  className="bg-gray-900 hover:bg-gray-800 transition p-6 rounded-xl shadow-lg flex-1 min-w-[250px]"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="font-bold text-blue-500 mb-2">Containerization</h4>
                  <p className="text-gray-400">Docker, Kubernetes, ECS</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
