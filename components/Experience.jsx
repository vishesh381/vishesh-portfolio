'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: 'Lead Salesforce Developer',
    company: 'Peerstar LLC',
    location: 'Pennsylvania, PA',
    period: 'Jan 2026 – Present',
    type: 'Full-Time',
    current: true,
    color: '#00d4ff',
    highlights: [
      'Leading development of a peer addiction recovery application on Salesforce Health Cloud with custom metadata and scalable data architecture.',
      'Designed end-to-end Referral & Intake Management using Opportunity lifecycle with 69+ clinical and demographic data points, multi-stage admission workflows, NPI tracking, and service preference modeling.',
      'Implemented Field Service Lightning (FSL) for specialist assignment, territory-based routing, availability matching, and regional director oversight.',
      'Built bidirectional Apex integration with Credible Behavioral Health EHR using Import/Export web services, automated CSV generation, retry mechanisms, and dynamic picklist-to-ID mapping.',
      'Configured Health Cloud clinical profiling (diagnosis, SDOH, substance history, recovery domains, care team involvement) to support IRP development.',
      'Developed Experience Cloud portal with token-based authentication for remote intake, secure document uploads, and real-time onboarding support.',
      'Integrated Twilio SMS API for secure link distribution, intake communication, and digital consent collection.',
    ],
    tech: ['Salesforce Health Cloud', 'Apex', 'FSL', 'Experience Cloud', 'Twilio', 'EHR Integration', 'LWC'],
  },
  {
    role: 'React Developer Intern',
    company: 'Antra Inc',
    location: 'Sterling, VA',
    period: 'Jul 2025 – Dec 2025',
    type: 'Internship',
    current: false,
    color: '#a855f7',
    highlights: [
      'Developed and maintained responsive web applications using React.js, JavaScript (ES6+) and REST APIs.',
      'Built and deployed multiple full-stack personal projects (React + Spring Boot) to production on Render with hands-on CI/CD experience.',
      'Designed and implemented dynamic survey and internal workflow pages for the company, improving UI consistency.',
      'Collaborated with backend teams to integrate APIs, handle state management, and optimize performance.',
      'Strengthened understanding of full-stack architecture including routing, authentication flows, API consumption, and deployment best practices.',
      'Improved debugging, version control (Git), and code review skills through real-world project contributions.',
    ],
    tech: ['React.js', 'JavaScript', 'REST APIs', 'Spring Boot', 'Render', 'Git'],
  },
  {
    role: 'Senior Salesforce Engineer',
    company: 'Accenture',
    location: 'Bengaluru, India',
    period: 'Feb 2021 – Sept 2023',
    type: 'Full-Time',
    current: false,
    color: '#00d4ff',
    highlights: [
      'Streamlined CI/CD workflows using Jenkins, Bitbucket & ALM, cutting deployment time by 30%.',
      'Implemented secure Apex Callouts for API authentication, response parsing, and error handling, improving integration stability.',
      'Directed code reviews for 6 junior developers, led regular KT sessions, and accelerated promotion for high-impact delivery.',
      'Automated processes with flows, validation rules, and custom metadata, increasing data integrity by 25%.',
      'Designed scalable Batch Apex jobs handling 1M+ records daily/weekly with high throughput and reliability.',
      'Developed Apex test classes with 90%+ coverage, reducing governor limit exceptions by 35%.',
      'PROJECT — Unilever VEEVA VAULT QMS & Unilever SONAR: Spearheaded ACTPM rollouts for Unilever Europe across 12+ markets; customized Salesforce CG Cloud modules to boost campaign efficiency by 15%.',
    ],
    tech: ['Salesforce', 'Apex', 'Batch Apex', 'Jenkins', 'Bitbucket', 'ALM', 'LWC', 'Salesforce CG Cloud'],
  },
  {
    role: 'Full Stack Salesforce Developer',
    company: 'Root Kings',
    location: 'Pune, India',
    period: 'Jan 2020 – Jan 2021',
    type: 'Full-Time',
    current: false,
    color: '#a855f7',
    highlights: [
      'Developed LWC components, Apex triggers, and Batch Apex jobs to support scalable CRM solutions.',
      'Implemented Salesforce Shield encryption and field-level security for GDPR compliance.',
      'Designed reports and dashboards, accelerating decision-making for sales and marketing teams.',
      'Managed 50K+ record translations across 6 markets using Workbench, ensuring content consistency.',
    ],
    tech: ['LWC', 'Apex', 'Salesforce Shield', 'GDPR', 'Workbench', 'Reports & Dashboards'],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="section-padding relative">
      {/* BG */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.03] blur-[100px]" />
      </div>

      <div ref={ref} className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[var(--color-accent)] font-mono text-sm font-semibold tracking-widest uppercase mb-3">
            // 03. Experience
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] section-title">
            Career
            <br />
            <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-purple)] to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <ExperienceCard
                key={exp.company + exp.role}
                exp={exp}
                index={i}
                inView={inView}
                isExpanded={expanded === i}
                onToggle={() => setExpanded(expanded === i ? -1 : i)}
                isLeft={i % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ exp, index, inView, isExpanded, onToggle, isLeft }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative flex flex-col lg:flex-row gap-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
    >
      {/* Card (takes half width on desktop) */}
      <div className="lg:w-[calc(50%-2rem)] w-full">
        <div
          className={`glass gradient-border rounded-2xl overflow-hidden transition-all duration-500 ${
            isExpanded ? 'shadow-neon' : 'hover:shadow-lg'
          }`}
          style={{
            borderColor: isExpanded ? `${exp.color}40` : undefined,
          }}
        >
          {/* Card Header */}
          <button
            onClick={onToggle}
            className="w-full p-6 text-left flex items-start justify-between gap-4 group"
          >
            <div className="flex-1">
              {/* Status badge */}
              <div className="flex items-center gap-2 mb-3">
                {exp.current && (
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-400/10 text-green-400 border border-green-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Current
                  </span>
                )}
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold border"
                  style={{
                    borderColor: `${exp.color}40`,
                    color: exp.color,
                    background: `${exp.color}10`,
                  }}
                >
                  {exp.type}
                </span>
              </div>

              <h3 className="font-display font-bold text-lg text-[var(--color-text)] mb-1 group-hover:gradient-text transition-all">
                {exp.role}
              </h3>
              <div
                className="font-semibold text-base mb-3"
                style={{ color: exp.color }}
              >
                {exp.company}
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-[var(--color-muted)]">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={12} />
                  {exp.location}
                </span>
              </div>
            </div>

            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300"
              style={{
                background: `${exp.color}15`,
                color: exp.color,
              }}
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>

          {/* Tech Pills (always visible) */}
          <div className="px-6 pb-4 flex flex-wrap gap-2">
            {exp.tech.slice(0, 4).map((t) => (
              <span
                key={t}
                className="tag-pill"
                style={{ color: exp.color, borderColor: `${exp.color}30`, background: `${exp.color}08` }}
              >
                {t}
              </span>
            ))}
            {exp.tech.length > 4 && (
              <span className="tag-pill text-[var(--color-muted)] border-[var(--color-border)]">
                +{exp.tech.length - 4} more
              </span>
            )}
          </div>

          {/* Expanded Content */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="mx-6 mb-6 pt-4 border-t"
                  style={{ borderColor: `${exp.color}20` }}
                >
                  <ul className="space-y-3">
                    {exp.highlights.map((point, pi) => (
                      <motion.li
                        key={pi}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: pi * 0.05 }}
                        className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ background: exp.color }}
                        />
                        {point}
                      </motion.li>
                    ))}
                  </ul>

                  {/* All tech */}
                  {exp.tech.length > 4 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[var(--color-border)]">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="tag-pill"
                          style={{
                            color: exp.color,
                            borderColor: `${exp.color}30`,
                            background: `${exp.color}08`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Center Timeline Dot (desktop) */}
      <div className="hidden lg:flex w-16 items-start justify-center pt-8 shrink-0">
        <div className="relative">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 300 }}
            className="w-5 h-5 rounded-full border-4 border-[var(--color-bg)] z-10 relative"
            style={{ background: exp.color, boxShadow: `0 0 12px ${exp.color}` }}
          />
          {/* Pulse ring */}
          {exp.current && (
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: exp.color, opacity: 0.3 }}
            />
          )}
        </div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}
