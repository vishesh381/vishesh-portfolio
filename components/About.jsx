'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Code2, Zap } from 'lucide-react';

const codeLines = [
  { type: 'keyword', text: 'const' },
  { type: 'variable', text: ' vishesh' },
  { type: 'bracket', text: ' = {' },
  null,
  { type: 'property', text: '  name:' },
  { type: 'string', text: ' "Vishesh Sharma",' },
  null,
  { type: 'property', text: '  role:' },
  { type: 'string', text: ' "Senior Salesforce Developer",' },
  null,
  { type: 'property', text: '  location:' },
  { type: 'string', text: ' "New York, NY",' },
  null,
  { type: 'property', text: '  experience:' },
  { type: 'string', text: ' "4+ years",' },
  null,
  { type: 'property', text: '  education:' },
  { type: 'string', text: ' "MS CS @ Pace (GPA 3.8)",' },
  null,
  { type: 'property', text: '  expertise:' },
  { type: 'bracket', text: ' [' },
  null,
  { type: 'string', text: '    "React + Spring Boot",' },
  null,
  { type: 'string', text: '    "Salesforce Health Cloud",' },
  null,
  { type: 'string', text: '    "Salesforce Service Cloud",' },
  null,
  { type: 'string', text: '    "Salesforce Sales Cloud",' },
  null,
  { type: 'string', text: '    "Salesforce CG Cloud",' },
  null,
  { type: 'string', text: '    "Agentforce Development",' },
  null,
  { type: 'string', text: '    "AWS + Docker + CI/CD",' },
  null,
  { type: 'bracket', text: '  ],' },
  null,
  { type: 'property', text: '  currentRole:' },
  { type: 'string', text: ' "Lead SF Dev @ Peerstar",' },
  null,
  { type: 'property', text: '  openTo:' },
  { type: 'string', text: ' ["Full-Time", "Consulting"],' },
  null,
  { type: 'comment', text: '  // Passionate about clean,'},
  null,
  { type: 'comment', text: '  // scalable architecture ✦' },
  null,
  { type: 'bracket', text: '};' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Mastery',
      desc: 'React + Spring Boot + Cloud — end-to-end ownership from DB to pixel',
      color: 'var(--color-accent)',
    },
    {
      icon: Zap,
      title: 'Salesforce Architect',
      desc: 'Health Cloud, Experience Cloud, FSL, Apex, LWC & 4 certifications',
      color: 'var(--color-purple)',
    },
    {
      icon: GraduationCap,
      title: 'MS Computer Science',
      desc: 'Pace University, GPA 3.8 — AI/ML, Distributed Systems, Cloud Computing',
      color: 'var(--color-accent)',
    },
    {
      icon: Award,
      title: 'Enterprise Delivery',
      desc: 'Led teams, cut deployment time 30%, handled 1M+ record batch jobs',
      color: 'var(--color-purple)',
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />

      <div ref={ref} className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-[var(--color-accent)] font-mono text-sm font-semibold tracking-widest uppercase mb-3">
            // 01. About Me
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] section-title">
            The Developer
            <br />
            <span className="gradient-text">Behind the Code</span>
          </h2>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Bio + Highlights */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8"
            >
              I'm a Full-Stack Java Developer and Salesforce Architect with{' '}
              <span className="text-[var(--color-accent)] font-semibold">4+ years</span> of
              experience building enterprise-grade systems. From peer recovery platforms on Salesforce
              Health Cloud to real-time React + Spring Boot apps, I bridge the gap between complex
              backend architecture and intuitive user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-[var(--color-text-secondary)] leading-relaxed mb-10"
            >
              Currently leading development at{' '}
              <span className="text-[var(--color-purple)] font-semibold">Peerstar LLC</span>, where I
              architect Salesforce Health Cloud solutions for peer addiction recovery — combining
              clinical data modeling, EHR integrations, and community portals.
            </motion.p>

            {/* Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                  className="glass gradient-border rounded-2xl p-5 group hover:scale-[1.02] transition-transform duration-300"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${item.color}18` }}
                  >
                    <item.icon size={20} style={{ color: item.color }} />
                  </div>
                  <h3
                    className="font-display font-bold text-sm mb-1"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Code Biography */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass rounded-2xl border border-[var(--color-border)] overflow-hidden shadow-card-dark">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--color-bg-secondary)] border-b border-[var(--color-border)]">
                <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                <span className="ml-4 text-xs text-[var(--color-muted)] font-mono">
                  vishesh.js — portfolio
                </span>
              </div>

              {/* Code Content */}
              <div className="p-5 font-mono text-sm overflow-x-auto max-h-[450px] overflow-y-auto">
                <div className="code-block">
                  {codeLines.map((line, i) => {
                    if (line === null) {
                      return <br key={`br-${i}`} />;
                    }
                    return (
                      <motion.span
                        key={i}
                        className={`code-${line.type}`}
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.03 }}
                      >
                        {line.text}
                      </motion.span>
                    );
                  })}
                </div>
                {/* Blinking cursor */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-[var(--color-accent)] ml-1 align-middle"
                />
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-[var(--color-purple)] opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-[var(--color-accent)] opacity-10 blur-2xl" />
          </motion.div>
        </div>

        {/* Education Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 glass gradient-border rounded-2xl p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-purple)] flex items-center justify-center shrink-0">
              <GraduationCap size={26} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="font-display font-bold text-lg text-[var(--color-text)] mb-1">
                MS in Computer Science — Pace University
              </div>
              <div className="text-[var(--color-accent)] font-semibold text-sm mb-2">
                GPA: 3.8 / 4.0 · Sept 2023 – May 2025
              </div>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Relevant coursework: Data Structures & Algorithms, Distributed Systems, Cloud Computing,
                Web Technologies, Operating Systems, AI/ML, Android Development, DBMS, Design &
                Analysis of Algorithms, Software Testing.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)]/20 to-[var(--color-purple)]/20 border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-bold text-lg">
                3.8 GPA
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
