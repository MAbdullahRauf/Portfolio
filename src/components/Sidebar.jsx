import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const resumeLink =
  'https://drive.google.com/uc?export=download&id=15tZj-yznPmAs8X993qLPJ7MvMq-uhwr9';

const nav = [
  { label: 'Intro', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

function NavLinks({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-1">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => onNavigate?.()}
          className="group flex items-center gap-3 rounded-lg px-3 py-2.5 font-mono text-sm text-zinc-400 transition hover:bg-white/[0.04] hover:text-white"
        >
          <span className="h-px w-6 bg-zinc-700 transition group-hover:w-8 group-hover:bg-hot" />
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function Sidebar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-canvas/95 px-4 backdrop-blur lg:hidden">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-white" onClick={close}>
          M<span className="text-hot">.</span>Abdullah
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="focus-ring rounded-md p-2 text-zinc-300 hover:bg-white/5"
          aria-expanded={open}
          aria-label="Menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-72 flex-col border-r border-line bg-rail pt-10 lg:flex">
        <div className="px-8 pb-10">
          <Link to="/" className="block font-display text-2xl font-extrabold leading-none tracking-tight text-white">
            Muhammad
            <br />
            <span className="text-hot">Abdullah</span>
          </Link>
          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">DevOps / Cloud</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6">
          <NavLinks />
        </div>

        <div className="border-t border-line p-6">
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring flex w-full items-center justify-center border border-hot bg-hot px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-white hover:text-black"
          >
            Download Resume
          </a>
          <div className="mt-6 flex justify-center gap-5 text-zinc-500">
            <a
              href="https://linkedin.com/in/muhammad-abdullah-ab5062241"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hot"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </a>
            <a
              href="https://www.credly.com/users/muhammad-abdullah.250a6edf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hot"
              aria-label="Credly"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
            </a>
          </div>
        </div>
      </aside>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/70 lg:hidden"
              aria-label="Close menu"
              onClick={close}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
              className="fixed bottom-0 right-0 top-14 z-50 w-[min(100%,20rem)] border-l border-line bg-rail shadow-2xl lg:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <NavLinks onNavigate={close} />
                <div className="mt-auto border-t border-line pt-6">
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={close}
                    className="flex w-full items-center justify-center border border-hot bg-hot py-3 font-mono text-xs font-semibold uppercase tracking-wider text-black"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Sidebar;
