import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "../assets/images/portrait.jpg";
import { credly, linkedIn, resumeDownload, resumeHref } from "../site";

const nav = [
  { label: "Intro", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Credentials", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

function NavLinks({ onNavigate }) {
  return (
    <nav className="flex flex-col gap-0.5">
      {nav.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={() => onNavigate?.()}
          className="focus-ring rounded-md px-3 py-2 text-sm text-muted transition hover:bg-white hover:text-ink"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function SocialLinks() {
  return (
    <div className="flex gap-4 text-muted">
      <a href={linkedIn} target="_blank" rel="noopener noreferrer" className="hover:text-pine" aria-label="LinkedIn">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
        </svg>
      </a>
      <a href={credly} target="_blank" rel="noopener noreferrer" className="hover:text-pine" aria-label="Credly">
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
        </svg>
      </a>
    </div>
  );
}

function Sidebar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 flex h-14 items-center justify-between border-b border-line bg-canvas/95 px-4 backdrop-blur lg:hidden">
        <Link to="/" className="flex items-center gap-3" onClick={close}>
          <img
            src={portrait}
            alt=""
            className="h-8 w-8 rounded-full object-cover object-top"
          />
          <span className="font-display text-base font-medium text-ink">Abdullah Rauf</span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="focus-ring rounded-md p-2 text-ink hover:bg-white"
          aria-expanded={open}
          aria-label="Menu"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-64 flex-col border-r border-line bg-paper lg:flex">
        <div className="px-7 pb-8 pt-10">
          <img
            src={portrait}
            alt="Abdullah Rauf"
            className="h-[5.5rem] w-[5.5rem] rounded-2xl object-cover object-top ring-1 ring-line"
          />
          <Link to="/" className="mt-5 block font-display text-[1.65rem] font-medium leading-tight text-ink">
            Abdullah Rauf
          </Link>
          <p className="mt-2 text-sm text-pine">DevSecOps Engineer</p>
          <p className="mt-1 text-xs text-muted">Lahore, Pakistan</p>
        </div>

        <div className="flex-1 overflow-y-auto px-4">
          <NavLinks />
        </div>

        <div className="border-t border-line p-6">
          <a
            href={resumeHref}
            download={resumeDownload}
            className="focus-ring flex w-full items-center justify-center rounded-md bg-ink px-4 py-2.5 text-sm font-medium text-canvas transition hover:bg-pine"
          >
            Download resume
          </a>
          <div className="mt-5 flex justify-center">
            <SocialLinks />
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
              className="fixed inset-0 z-40 bg-ink/40 lg:hidden"
              aria-label="Close menu"
              onClick={close}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.22 }}
              className="fixed bottom-0 right-0 top-14 z-50 w-[min(100%,18rem)] border-l border-line bg-paper lg:hidden"
            >
              <div className="flex h-full flex-col p-6">
                <div className="mb-6 flex items-center gap-3">
                  <img
                    src={portrait}
                    alt=""
                    className="h-12 w-12 rounded-xl object-cover object-top ring-1 ring-line"
                  />
                  <div>
                    <p className="font-display text-lg font-medium text-ink">Abdullah Rauf</p>
                    <p className="text-xs text-pine">DevSecOps Engineer</p>
                  </div>
                </div>
                <NavLinks onNavigate={close} />
                <div className="mt-auto border-t border-line pt-6">
                  <a
                    href={resumeHref}
                    download={resumeDownload}
                    onClick={close}
                    className="flex w-full items-center justify-center rounded-md bg-ink py-2.5 text-sm font-medium text-canvas"
                  >
                    Download resume
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
