import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { transition, viewportOnce } from '../motion/variants';

function Footer() {
  const reduced = useReducedMotion();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-rail px-6 py-12 md:px-10 lg:px-14">
      <div className="mx-auto flex max-w-content flex-col gap-10 md:flex-row md:items-start md:justify-between">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.45)}
        >
          <h2 className="font-display text-2xl font-bold text-white">Reach Out Anytime</h2>
          <motion.div
            className="mt-3 h-0.5 w-16 bg-hot"
            initial={reduced ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: reduced ? 0 : 0.5 }}
            style={{ originX: 0 }}
          />
        </motion.div>

        <motion.div
          className="flex gap-8 text-zinc-500"
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ ...transition(reduced, 0.4), delay: reduced ? 0 : 0.1 }}
        >
          <motion.a
            href="https://linkedin.com/in/muhammad-abdullah-ab5062241"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduced ? {} : { y: -3, color: '#ff4d00' }}
            className="transition hover:text-hot"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </motion.a>
          <motion.a
            href="https://www.credly.com/users/muhammad-abdullah.250a6edf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={reduced ? {} : { y: -3, color: '#ff4d00' }}
            className="transition hover:text-hot"
            aria-label="Credly Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" viewBox="0 0 16 16">
              <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="mx-auto mt-10 max-w-content border border-line bg-panel p-6 md:p-8"
        initial={reduced ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ ...transition(reduced, 0.5), delay: reduced ? 0 : 0.05 }}
      >
        <p className="text-sm leading-relaxed text-zinc-400">
          <span className="font-semibold text-hot">Need to contact me?</span> 🦄
          <br />
          Shoot me a message, I promise I don't bite (unless you're a bug 🐞)!
          <br />
          Just click those shiny icons above.
        </p>
        <div className="mt-4 flex items-center gap-2 font-mono text-xs text-emerald-400/90">
          <span className="h-2 w-2 animate-pulse bg-emerald-400" />
          Available for new opportunities
        </div>
      </motion.div>

      <motion.div
        className="mx-auto mt-10 max-w-content border-t border-line pt-8 text-center text-sm text-zinc-600"
        initial={reduced ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewportOnce}
        transition={transition(reduced, 0.4)}
      >
        <p>
          &copy; {currentYear}{' '}
          <span className="text-zinc-400 transition hover:text-hot">Muhammad Abdullah Rauf</span>. All rights reserved.
        </p>
        <p className="mt-2 text-xs">
          Crafted with <span className="animate-pulse text-rose-400">♥</span> and code
        </p>
      </motion.div>
    </footer>
  );
}

export default Footer;
