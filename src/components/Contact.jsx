import React, { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import emailjs from "emailjs-com";
import { easeOut, transition, viewportOnce } from "../motion/variants";
import { email, linkedIn, phone, phoneHref, resumeDownload, resumeHref } from "../site";

function Contact() {
  const reduced = useReducedMotion();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState("");
  const [submitMessage, setSubmitMessage] = useState("");
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
      email: "m.abdullahrauf1@gmail.com",
      subject: formData.subject,
      message: formData.message,
      clientEmail: formData.email,
      clientName: formData.name,
      clientSubject: formData.subject,
    };

    emailjs
      .send("service_r2mmseo", "template_6u8vdg6", templateParams, "gNV0onJE3yiJmA91w")
      .then(
        () => {
          setSubmitStatus("success");
          setSubmitMessage("Message sent. I will get back to you soon.");
          setIsSubmitting(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        () => {
          setSubmitStatus("error");
          setSubmitMessage("Something went wrong. Please try again, or email me directly.");
          setIsSubmitting(false);
        }
      );
  };

  const inputClass =
    "focus-ring w-full rounded-md border border-line bg-canvas px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-pine";

  return (
    <section id="contact" className="px-5 py-20 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-content">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <p className="kicker">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-medium text-ink md:text-5xl">Let’s talk</h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
            I am open to senior platform and DevSecOps roles, and to conversations about infrastructure that needs to
            be both faster and safer.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5 lg:gap-10">
          <motion.div
            className="rounded-lg border border-line bg-paper p-6 sm:p-8 lg:col-span-3"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transition(reduced, 0.5), ease: easeOut }}
          >
            <h3 className="font-display text-2xl font-medium text-ink">Send a message</h3>

            {submitMessage && (
              <div
                className={`mt-6 rounded-md px-4 py-3 text-sm ${
                  submitStatus === "success" ? "bg-pine/10 text-pine" : "bg-red-50 text-red-800"
                }`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className={inputClass}
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className={inputClass}
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                rows="5"
                required
                className={inputClass}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`focus-ring w-full rounded-md bg-ink py-3 text-sm font-medium text-canvas transition hover:bg-pine ${
                  isSubmitting ? "cursor-not-allowed opacity-60" : ""
                }`}
              >
                {isSubmitting ? "Sending…" : "Send message"}
              </button>
            </form>
          </motion.div>

          <motion.div
            className="flex flex-col justify-between rounded-lg border border-line bg-paper p-6 sm:p-8 lg:col-span-2"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ ...transition(reduced, 0.5), delay: reduced ? 0 : 0.06 }}
          >
            <dl className="space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brass">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${email}`} className="text-ink hover:text-pine">
                    {email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brass">Phone</dt>
                <dd className="mt-2">
                  <a href={phoneHref} className="text-ink hover:text-pine">
                    {phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brass">Location</dt>
                <dd className="mt-2 text-ink">Lahore, Pakistan</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-brass">LinkedIn</dt>
                <dd className="mt-2">
                  <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="text-pine hover:underline">
                    muhammad-abdullah
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href={resumeHref}
              download={resumeDownload}
              className="focus-ring mt-10 inline-flex w-full items-center justify-center rounded-md border border-line py-3 text-sm font-medium text-ink transition hover:border-pine hover:text-pine"
            >
              Download resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
