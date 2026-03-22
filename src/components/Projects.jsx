import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import kulud from '../assets/images/kulud.png';
import PWC from '../assets/images/pwc.png';
import KAUST from '../assets/images/kaust.jpg';
import intellilake from '../assets/images/intellilake.png';
import kenzer from '../assets/images/kenzer.png';
import { easeOut, transition, viewportOnce } from '../motion/variants';

function Projects() {
  const reduced = useReducedMotion();

  const projects = [
    {
      title: 'Kulud',
      description:
        "Qatar's Biggest Online Pharmacy - Medicine, Vitamins, Skin Care & More! ",
      tech: ['Azure', 'Docker', 'CICD', 'Monitoring', 'RDS'],
      image: kulud,
      link: '#',
    },
    {
      title: 'PWC',
      description:
        'PwC is a large professional services network, with PricewaterhouseCoopers (PwC) being the global network.',
      tech: ['Azure', 'Azure DevOps', 'Gitlab', 'Kubernetes', 'Helm', 'Monitoring'],
      image: PWC,
      link: '#',
    },
    {
      title: 'KAUST',
      description:
        'King Abdullah University of Science and Technology, International graduate-level science and technology research university',
      tech: ['AWS', 'Jenkins', 'AWS SageMaker', 'Lamda', 'Cloud Formation'],
      image: KAUST,
      link: '#',
    },
    {
      title: 'Intellilake',
      description: 'FINTECH',
      tech: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'FINTECH'],
      image: intellilake,
      link: '#',
      imageClass: 'object-contain bg-white p-8',
    },
    {
      title: 'Kenzer',
      description: 'Hiring management platform for streamlined recruiting and candidate workflows.',
      tech: ['AWS', 'Terraform', 'ECS', 'EC2', 'DockerHub', 'Monitoring'],
      image: kenzer,
      link: '#',
      imageClass: 'object-contain bg-white p-8',
    },
  ];

  const scrollerRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = scrollWidth - clientWidth;
    const epsilon = 8;
    setCanPrev(scrollLeft > epsilon);
    setCanNext(scrollLeft < maxScroll - epsilon);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener('scroll', updateScrollState, { passive: true });
    const ro = new ResizeObserver(() => updateScrollState());
    ro.observe(el);

    window.addEventListener('resize', updateScrollState);

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      ro.disconnect();
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState, projects.length]);

  const scrollByCards = (direction) => {
    const el = scrollerRef.current;
    if (!el) return;
    const first = el.querySelector('article');
    if (!first) return;
    const gap = 24;
    const delta = first.getBoundingClientRect().width + gap;
    el.scrollBy({ left: direction * delta, behavior: 'smooth' });
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(updateScrollState);
    });
  };

  return (
    <section id="projects" className="min-w-0 overflow-x-hidden border-b border-line bg-canvas px-4 py-16 md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto min-w-0 max-w-content">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={transition(reduced, 0.5)}
        >
          <div className="min-w-0">
            <p className="section-label">Selected work</p>
            <h2 className="mt-3 font-display text-4xl font-bold text-white md:text-5xl">Featured Projects</h2>
          </div>
          <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
            <motion.button
              type="button"
              aria-label="Previous projects"
              disabled={!canPrev}
              onClick={() => scrollByCards(-1)}
              whileHover={reduced || !canPrev ? {} : { scale: 1.05 }}
              whileTap={reduced ? {} : { scale: 0.95 }}
              className="focus-ring flex h-11 w-11 items-center justify-center border border-line bg-panel text-zinc-300 transition hover:border-hot hover:text-hot disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line disabled:hover:text-zinc-300"
            >
              <ChevronLeftIcon className="h-5 w-5" aria-hidden />
            </motion.button>
            <motion.button
              type="button"
              aria-label="Next projects"
              disabled={!canNext}
              onClick={() => scrollByCards(1)}
              whileHover={reduced || !canNext ? {} : { scale: 1.05 }}
              whileTap={reduced ? {} : { scale: 0.95 }}
              className="focus-ring flex h-11 w-11 items-center justify-center border border-line bg-panel text-zinc-300 transition hover:border-hot hover:text-hot disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-line disabled:hover:text-zinc-300"
            >
              <ChevronRightIcon className="h-5 w-5" aria-hidden />
            </motion.button>
          </div>
        </motion.div>

        <div className="relative mt-10 min-w-0">
          <div
            ref={scrollerRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-1"
          >
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={reduced ? false : { opacity: 0, y: 48, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: reduced ? 0 : 0.52,
                  delay: reduced ? 0 : Math.min(index * 0.07, 0.36),
                  ease: easeOut,
                }}
                whileHover={reduced ? {} : { y: -8, transition: { duration: 0.28, ease: easeOut } }}
                className="flex w-[min(100%,calc(100vw-3rem))] shrink-0 snap-start flex-col border border-line bg-panel sm:w-[380px]"
              >
                <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`h-full w-full grayscale transition hover:grayscale-0 ${project.imageClass ?? 'object-cover'}`}
                  />
                  <span className="absolute left-3 top-3 bg-black/80 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-hot">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="border border-line bg-canvas px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="sr-only">
                    {project.title}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
