import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: "Mail From Portfolio",
      // email: formData.email,
      email: 'm.abdullahrauf1@gmail.com',
      subject: formData.subject,
      message: formData.message,
      clientEmail: formData.email,
      clientName: formData.name,
      clientSubject: formData.subject

      // message: formData.message,
    };

    // Send email via EmailJS
    emailjs
      .send('service_r2mmseo', 'template_6u8vdg6', templateParams, 'gNV0onJE3yiJmA91w')
      .then(
        (response) => {
          setSubmitStatus('success');
          setSubmitMessage('🚀 Message sent successfully! I will get back to you soon.');
          setIsSubmitting(false); 
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        (error) => {
          setSubmitStatus('error');
          setSubmitMessage('⚠️ Something went wrong, please try again.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-2 text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Info Card */}
            <motion.div
              className="bg-gray-900 hover:bg-gray-800 transition p-8 rounded-3xl shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-blue-500">Contact Info</h3>
                <p className="mb-4 text-gray-300">
                  <span className="font-bold text-blue-400">Phone:</span> +923484272019
                </p>
                <p className="mb-4 text-gray-300">
                  <span className="font-bold text-blue-400">Email:</span> m.abdullahrauf1@gmail.com
                </p>
                <p className="mb-8 text-gray-300">
                  <span className="font-bold text-blue-400">Location:</span> Lahore, Pakistan
                </p>
                <p className="mb-4 text-gray-300">
                  <span className="font-bold text-blue-400">LinkedIn: </span>
                  <a
                    href="https://linkedin.com/in/muhammad-abdullah-ab5062241"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-400 font-semibold"
                  >
                    Click Me
                  </a>
                </p>
              </div>

              <a
                href="https://drive.google.com/uc?export=download&id=15tZj-yznPmAs8X993qLPJ7MvMq-uhwr9"
                download="Abdullah's Resume.pdf"
                className="inline-block bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-xl text-white font-bold transition transform hover:scale-105 mt-6 text-center"
              >
                📄 Download Resume
              </a>
            </motion.div>

            {/* Form Card */}
            <motion.div
              className="bg-gray-900 hover:bg-gray-800 transition p-8 rounded-3xl shadow-lg"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl font-semibold mb-6 text-blue-500">Send a Message</h3>

              {submitMessage && submitStatus === 'success' && (
                <div className="bg-green-500/10 text-green-300 p-4 mb-6 rounded-xl text-center">
                  {submitMessage}
                </div>
              )}

              {submitMessage && submitStatus === 'error' && (
                <div className="bg-red-500/10 text-red-300 p-4 mb-6 rounded-xl text-center">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name"
                    className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message..."
                  rows="5"
                  className="p-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                ></textarea>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-xl w-full text-white font-bold transition-all duration-300 hover:scale-105 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Sending...' : ' Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
