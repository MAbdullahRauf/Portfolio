import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { easeOut, transition, viewportOnce } from '../motion/variants';

function Contact() {
  const reduced = useReducedMotion();

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
      name: 'Mail From Portfolio',
      email: 'm.abdullahrauf1@gmail.com',
      subject: formData.subject,
      message: formData.message,
      clientEmail: formData.email,
      clientName: formData.name,
      clientSubject: formData.subject,
    };

    emailjs
      .send('service_r2mmseo', 'template_6u8vdg6', templateParams, 'gNV0onJE3yiJmA91w')
      .then(
        () => {
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
        () => {
          setSubmitStatus('error');
          setSubmitMessage('⚠️ Something went wrong, please try again.');
          setIsSubmitting(false);
        }
      );
  };

  const inputClass =
    'focus-ring w-full border border-line bg-panel px-4 py-3 font-mono text-sm text-white placeholder:text-zinc-600 focus:border-hot';

  return (
    <section id="contact" className="bg-canvas px-4 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <p className="section-label">Direct line</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">Let's Connect</h2>
        </motion.div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-12">
          <motion.div
            className="border border-line bg-panel p-8 lg:col-span-3"
            initial={reduced ? false : { opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ ...transition(reduced, 0.55), ease: easeOut }}
          >
            <h3 className="font-display text-2xl font-semibold text-white">Send a Message</h3>

            {submitMessage && submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 border border-emerald-500/30 bg-emerald-500/10 p-4 text-center text-sm text-emerald-200"
              >
                {submitMessage}
              </motion.div>
            )}

            {submitMessage && submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-200"
              >
                {submitMessage}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={inputClass}
                />
              </div>

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className={inputClass}
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message..."
                rows="5"
                className={inputClass}
              />

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={reduced || isSubmitting ? {} : { scale: 1.01 }}
                whileTap={reduced ? {} : { scale: 0.99 }}
                className={`focus-ring w-full border border-hot bg-hot py-3.5 font-mono text-sm font-semibold uppercase tracking-wider text-black transition hover:bg-white ${
                  isSubmitting ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : ' Send Message'}
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between border border-line bg-panel p-8 lg:col-span-2"
            initial={reduced ? false : { opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ ...transition(reduced, 0.55), delay: reduced ? 0 : 0.08 }}
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-white">Contact Info</h3>
              <p className="mt-6 text-zinc-400">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">Phone</span>
                <br />
                +923484272019
              </p>
              <p className="mt-4 text-zinc-400">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">Email</span>
                <br />
                m.abdullahrauf1@gmail.com
              </p>
              <p className="mt-4 text-zinc-400">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">Location</span>
                <br />
                Lahore, Pakistan
              </p>
              <p className="mt-6 text-zinc-400">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-600">LinkedIn</span>
                <br />
                <a
                  href="https://linkedin.com/in/muhammad-abdullah-ab5062241"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-hot hover:underline"
                >
                  Click Me
                </a>
              </p>
            </div>

            <motion.a
              href="https://drive.google.com/uc?export=download&id=15tZj-yznPmAs8X993qLPJ7MvMq-uhwr9"
              download="Abdullah's Resume.pdf"
              whileHover={reduced ? {} : { scale: 1.02 }}
              whileTap={reduced ? {} : { scale: 0.98 }}
              className="focus-ring mt-10 inline-flex w-full items-center justify-center border border-line py-3 font-mono text-xs font-semibold uppercase tracking-wider text-white transition hover:border-hot hover:text-hot"
            >
              📄 Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
