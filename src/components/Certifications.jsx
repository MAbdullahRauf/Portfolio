import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';
import AWS from '../assets/images/aws.png';
import AWSCERT from '../assets/images/awscert.png';
import KS from '../assets/images/ks.png';
import CLOUD101 from '../assets/images/cloud-101.png';

const certifications = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services (AWS)',
    link: 'https://www.credly.com/badges/3f144ce9-db0b-48dd-b790-8f7e4e6fe606',
    icon: AWS,
  },
  {
    title: 'AWS Partner: Technical Accredited',
    issuer: 'Amazon Web Services (AWS)',
    link: 'https://www.credly.com/badges/d3a14a88-713b-4076-bff1-6eb4b31f304d',
    icon: AWSCERT,
  },
  {
    title: 'MERN STACK DEVELOPMENT',
    issuer: 'KNOWLEDGE STREAM',
    link: 'https://knowledge.tech/',
    icon: KS,
  },
  {
    title: 'AWS Educate Introduction to Cloud 101',
    issuer: 'AWS Educate',
    link: 'https://www.credly.com/badges/fa311ca7-3dc8-4698-bcae-cc5a790655a2/linked_in_profile',
    icon: CLOUD101,
  },
];

function Certifications() {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <Fade direction="up">
          <h2 className="text-3xl font-semibold text-center text-white mb-8 animate__animated animate__fadeIn">
            My Certifications
          </h2>
        </Fade>

        <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
          {certifications.map((certification, index) => (
            <Zoom key={index} triggerOnce>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:translate-y-2 transition-all duration-300 animate__animated animate__fadeInUp text-center">
                <a href={certification.link} target="_blank" rel="noopener noreferrer">
                  <div className="flex flex-col items-center mb-4">
                    <img
                      src={certification.icon}
                      alt={certification.issuer}
                      className="w-12 h-12 rounded-full mb-2"
                    />
                    <h3 className="text-xl font-semibold">{certification.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Issued by: {certification.issuer}</p>
                </a>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
