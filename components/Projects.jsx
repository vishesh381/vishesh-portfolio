'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Zap, Code2 } from 'lucide-react';
import {
  FaJava, FaReact, FaAws, FaDocker,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiPostgresql,
  SiMysql, SiSalesforce, SiRedis,
} from 'react-icons/si';

const techIconMap = {
  'React.js': { icon: FaReact, color: '#00d4ff' },
  'Spring Boot': { icon: SiSpringboot, color: '#6db33f' },
  'MongoDB': { icon: SiMongodb, color: '#47a248' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169e1' },
  'MySQL': { icon: SiMysql, color: '#4479a1' },
  'Amazon RDS': { icon: FaAws, color: '#ff9900' },
  'AWS': { icon: FaAws, color: '#ff9900' },
  'Docker': { icon: FaDocker, color: '#2496ed' },
  'Salesforce': { icon: SiSalesforce, color: '#00a1e0' },
  'LWC OSS': { icon: SiSalesforce, color: '#1798c1' },
  'Java': { icon: FaJava, color: '#f89820' },
  'Redis': { icon: SiRedis, color: '#ff4136' },
};

const projects = [
  {
    title: 'SkillBridge',
    tagline: 'Full-Stack Job Portal',
    description:
      'A full-stack job application portal connecting job seekers with opportunities. Features smart matching, real-time notifications, and applicant tracking.',
    tech: ['React.js', 'Spring Boot', 'MongoDB'],
    status: 'LIVE',
    liveUrl: 'https://skillbridge-frontend.onrender.com/',
    githubUrl: null,
    category: 'Full Stack',
    accentColor: '#00d4ff',
    featured: true,
  },
  {
    title: 'OrgForge',
    tagline: 'Salesforce Management Platform',
    description:
      'A full-stack Salesforce management platform giving developers and admins deep org visibility — test execution, governor limits, health scores, deployments, flows, permissions, bulk data, and AI-powered SOQL — all in one place.',
    tech: ['React.js', 'Spring Boot', 'Salesforce', 'PostgreSQL'],
    status: 'LIVE',
    liveUrl: 'https://orgforge-backend-05zs.onrender.com/',
    githubUrl: 'https://github.com/vishesh381/OrgForge',
    category: 'Salesforce',
    accentColor: '#a855f7',
    featured: true,
  },
  {
    title: 'ApexPulse',
    tagline: 'Salesforce Apex Test Suite',
    description:
      'Full-stack app integrating Salesforce OAuth 2.0 to discover and execute Apex tests with real-time tracking. Async execution via Tooling API, WebSocket updates, coverage analytics dashboard, AES-256-GCM token encryption. Dockerized and deployed on Render.',
    tech: ['React.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
    status: 'LIVE',
    liveUrl: 'https://apex-test-suite.onrender.com/',
    githubUrl: 'https://github.com/vishesh381/ApexPulse',
    category: 'Full Stack',
    accentColor: '#00d4ff',
    featured: true,
  },
  {
    title: 'YumRun',
    tagline: 'Food Delivery Platform',
    description:
      'Full-stack food delivery platform with smart ordering, real-time order tracking, restaurant management, and seamless payment integration built on Spring Boot and Amazon RDS.',
    tech: ['Spring Boot', 'MySQL', 'Amazon RDS'],
    status: 'LIVE',
    liveUrl: 'https://yumrun-frontend.onrender.com/',
    githubUrl: 'https://github.com/vishesh381/YumRun-Backend',
    category: 'Full Stack',
    accentColor: '#f97316',
    featured: false,
  },
  {
    title: 'NewsZap',
    tagline: 'Real-Time News App',
    description:
      'React-based news app delivering real-time headlines via NewsAPI with category filtering, search functionality, and a clean reading experience.',
    tech: ['React.js'],
    status: 'LIVE',
    liveUrl: 'https://newszap-your-daily-dose-of-news.onrender.com/',
    githubUrl: 'https://github.com/vishesh381/NewsZap---Your-daily-dose-of-news',
    category: 'Frontend',
    accentColor: '#a855f7',
    featured: false,
  },
  {
    title: 'DreamCRV',
    tagline: 'Car Customization Tool',
    description:
      'Real-time car customization tool using Lightning Web Components OSS with interactive form handling, live visual updates, and configuration management.',
    tech: ['LWC OSS', 'Salesforce'],
    status: 'GitHub',
    liveUrl: null,
    githubUrl: 'https://github.com/vishesh381/DreamCRV',
    category: 'Salesforce',
    accentColor: '#00d4ff',
    featured: false,
  },
  {
    title: 'Gatherly',
    tagline: 'Event Management App',
    description:
      'Invitation management app in Salesforce, streamlining event creation and RSVPs within the platform. Custom objects, flows, and portal integration.',
    tech: ['Salesforce', 'LWC OSS'],
    status: 'GitHub',
    liveUrl: null,
    githubUrl: 'https://github.com/vishesh381/Gatherly---Your-Invitation-App',
    category: 'Salesforce',
    accentColor: '#a855f7',
    featured: false,
  },
];

const filterTabs = ['All', 'Full Stack', 'Salesforce', 'Frontend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[100px]" />
      </div>

      <div ref={ref} className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[var(--color-accent)] font-mono text-sm font-semibold tracking-widest uppercase mb-3">
            // 04. Projects
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] section-title">
              Things I've
              <br />
              <span className="gradient-text">Built</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] max-w-md text-sm sm:text-base">
              A selection of projects spanning full-stack development, Salesforce platforms, and
              everything in between — most of them live in production.
            </p>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeFilter === tab
                  ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] text-white shadow-neon scale-105'
                  : 'glass border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  layout: { type: 'spring', stiffness: 300, damping: 30 },
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/vishesh381"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-sm font-semibold transition-all duration-300 group"
          >
            <Github size={18} />
            <span>See more on GitHub</span>
            <ExternalLink
              size={14}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="project-card h-full glass rounded-2xl overflow-hidden border border-[var(--color-border)] group"
      style={{
        borderColor: hovered ? `${project.accentColor}40` : undefined,
        boxShadow: hovered ? `0 20px 60px ${project.accentColor}15` : undefined,
        transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.4s cubic-bezier(0.23,1,0.32,1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top Gradient Bar */}
      <div
        className="h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${project.accentColor}, var(--color-purple))`,
        }}
      />

      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div>
            {/* Status */}
            <div className="flex items-center gap-2 mb-2">
              {project.status === 'LIVE' ? (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-green-400/10 text-green-400 border border-green-400/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  LIVE
                </span>
              ) : (
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-[var(--color-purple)]/10 text-[var(--color-purple)] border border-[var(--color-purple)]/30">
                  <Github size={10} />
                  GitHub
                </span>
              )}
              <span className="text-[10px] font-semibold text-[var(--color-muted)] uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            <h3 className="font-display font-bold text-xl text-[var(--color-text)] group-hover:gradient-text transition-all">
              {project.title}
            </h3>
            <p className="text-xs font-medium mt-0.5" style={{ color: project.accentColor }}>
              {project.tagline}
            </p>
          </div>

          {/* Icon */}
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${project.accentColor}15` }}
          >
            {project.category === 'Salesforce' ? (
              <SiSalesforce size={20} style={{ color: project.accentColor }} />
            ) : project.category === 'Frontend' ? (
              <FaReact size={20} style={{ color: project.accentColor }} />
            ) : (
              <Code2 size={20} style={{ color: project.accentColor }} />
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map((t) => {
            const techData = techIconMap[t];
            return (
              <span
                key={t}
                className="flex items-center gap-1 tag-pill text-[var(--color-text-secondary)]"
              >
                {techData && (
                  <techData.icon size={10} style={{ color: techData.color }} />
                )}
                {t}
              </span>
            );
          })}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-border)]">
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, var(--color-purple))`,
              }}
            >
              <Zap size={13} />
              Live Demo
            </a>
          ) : project.liveUrl === '#' ? (
            <span
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white cursor-default opacity-70"
              style={{
                background: `linear-gradient(135deg, ${project.accentColor}, var(--color-purple))`,
              }}
            >
              <Zap size={13} />
              Live
            </span>
          ) : null}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] text-xs font-semibold transition-all duration-300 hover:scale-105"
            >
              <Github size={13} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
