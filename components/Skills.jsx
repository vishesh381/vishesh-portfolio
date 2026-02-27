'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaJava, FaReact, FaAws, FaDocker, FaGitAlt,
  FaGithub, FaNode,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMongodb, SiPostgresql, SiMysql,
  SiRedis, SiJenkins, SiJira, SiSalesforce,
  SiTypescript, SiJavascript, SiGraphql, SiJest,
  SiCypress, SiPostman, SiHibernate,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const categories = ['All', 'Languages', 'Frontend', 'Backend', 'Salesforce', 'Cloud & DevOps', 'Databases', 'Security'];

const skills = [
  // Languages
  { name: 'Java', icon: FaJava, color: '#f89820', category: 'Languages', level: 95 },
  { name: 'JavaScript', icon: SiJavascript, color: '#f7df1e', category: 'Languages', level: 90 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178c6', category: 'Languages', level: 85 },

  // Frontend
  { name: 'React.js', icon: FaReact, color: '#00d4ff', category: 'Frontend', level: 92 },
  { name: 'Next.js', icon: FaNode, color: '#e2e8f0', category: 'Frontend', level: 80 },

  // Backend
  { name: 'Spring Boot', icon: SiSpringboot, color: '#6db33f', category: 'Backend', level: 95 },
  { name: 'Hibernate/JPA', icon: SiHibernate, color: '#bcae79', category: 'Backend', level: 88 },
  { name: 'REST APIs', icon: TbApi, color: '#a855f7', category: 'Backend', level: 95 },
  { name: 'GraphQL', icon: SiGraphql, color: '#e10098', category: 'Backend', level: 78 },
  { name: 'WebSockets', icon: TbApi, color: '#00d4ff', category: 'Backend', level: 82 },

  // Salesforce
  { name: 'Salesforce', icon: SiSalesforce, color: '#00a1e0', category: 'Salesforce', level: 95 },
  { name: 'Apex', icon: SiSalesforce, color: '#1798c1', category: 'Salesforce', level: 95 },
  { name: 'LWC', icon: SiSalesforce, color: '#0d9dda', category: 'Salesforce', level: 90 },
  { name: 'Health Cloud', icon: SiSalesforce, color: '#00a1e0', category: 'Salesforce', level: 88 },
  { name: 'OmniStudio', icon: SiSalesforce, color: '#1798c1', category: 'Salesforce', level: 82 },

  // Cloud & DevOps
  { name: 'AWS', icon: FaAws, color: '#ff9900', category: 'Cloud & DevOps', level: 82 },
  { name: 'Docker', icon: FaDocker, color: '#2496ed', category: 'Cloud & DevOps', level: 85 },
  { name: 'Jenkins', icon: SiJenkins, color: '#d24939', category: 'Cloud & DevOps', level: 80 },
  { name: 'Git', icon: FaGitAlt, color: '#f05032', category: 'Cloud & DevOps', level: 92 },
  { name: 'Jira', icon: SiJira, color: '#0052cc', category: 'Cloud & DevOps', level: 85 },

  // Databases
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169e1', category: 'Databases', level: 88 },
  { name: 'MySQL', icon: SiMysql, color: '#4479a1', category: 'Databases', level: 88 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47a248', category: 'Databases', level: 85 },
  { name: 'Redis', icon: SiRedis, color: '#ff4136', category: 'Databases', level: 80 },

  // Security
  { name: 'OAuth 2.0', icon: TbApi, color: '#ff6b35', category: 'Security', level: 88 },
  { name: 'JWT', icon: TbApi, color: '#a855f7', category: 'Security', level: 88 },
  { name: 'RBAC', icon: TbApi, color: '#00d4ff', category: 'Security', level: 85 },

  // Testing
  { name: 'JUnit', icon: SiJest, color: '#25a162', category: 'Languages', level: 88 },
  { name: 'Postman', icon: SiPostman, color: '#ff6c37', category: 'Backend', level: 90 },
  { name: 'Cypress', icon: SiCypress, color: '#17202c', category: 'Frontend', level: 75 },
];

const certs = [
  { name: 'Salesforce Certified Administrator', url: 'https://drive.google.com/file/d/1Pu_X6hGeic56qNVZfgFTuFz-MD_OgHQU/view?usp=drive_link' },
  { name: 'Salesforce Advanced Administrator', url: 'https://drive.google.com/file/d/1h6dS7NNmBgEOw5xcG4n71hDoYQGSP7yy/view' },
  { name: 'Salesforce Platform Developer I', url: 'https://drive.google.com/file/d/1ytOtDjiLZYZMS3l4Hl3WjI6yjnnLvrzX/view?usp=drive_link' },
  { name: 'Salesforce Platform Developer II', url: 'https://drive.google.com/file/d/18yKrjJEMhKhaI4Lu_2cdFbJyjTPpDSej/view?usp=sharing' },
  { name: 'Full Stack Automation Engineer', url: null },
  { name: 'Core Java Internship', url: null },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const filtered =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[var(--color-purple)] opacity-[0.03] blur-[80px]" />
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
            // 02. Skills
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] section-title">
            Tech Stack &
            <br />
            <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] text-white shadow-neon scale-105'
                  : 'glass border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill, i) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.03,
                  layout: { type: 'spring', stiffness: 300, damping: 30 },
                }}
              >
                <SkillCard skill={skill} inView={inView} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="font-display text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
            Certifications
            <span className="w-8 h-px bg-gradient-to-l from-[var(--color-purple)] to-transparent" />
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              >
                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass gradient-border rounded-xl px-4 py-3 flex items-center gap-3 group hover:scale-[1.02] transition-transform duration-300 cursor-pointer"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors flex-1">
                      {cert.name}
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity shrink-0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                ) : (
                  <div className="glass gradient-border rounded-xl px-4 py-3 flex items-center gap-3 group hover:scale-[1.02] transition-transform duration-300">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] shrink-0" />
                    <span className="text-sm font-medium text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors">
                      {cert.name}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <div className="skill-badge glass gradient-border rounded-2xl p-4 flex flex-col items-center gap-2 text-center group cursor-default">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
        style={{ background: `${skill.color}18` }}
      >
        <skill.icon size={22} style={{ color: skill.color }} />
      </div>
      <span className="text-[10px] font-semibold text-[var(--color-text-secondary)] group-hover:text-[var(--color-text)] transition-colors leading-tight">
        {skill.name}
      </span>
      {/* Level bar */}
      <div className="w-full h-1 rounded-full bg-[var(--color-border)] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, var(--color-purple))`,
          }}
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}
