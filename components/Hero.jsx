'use client';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { SiSalesforce } from 'react-icons/si';
import { FaJava, FaReact, FaAws, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostgresql, SiRedis } from 'react-icons/si';
import ParticleBackground from './ParticleBackground';

const floatingTech = [
  { icon: FaJava,       label: 'Java',        color: '#f89820', delay: 0 },
  { icon: FaReact,      label: 'React',        color: '#00d4ff', delay: 0.5 },
  { icon: SiSpringboot, label: 'Spring Boot',  color: '#6db33f', delay: 1 },
  { icon: FaAws,        label: 'AWS',          color: '#ff9900', delay: 1.5 },
  { icon: FaDocker,     label: 'Docker',       color: '#2496ed', delay: 2 },
  { icon: SiSalesforce, label: 'Salesforce',   color: '#00a1e0', delay: 2.5 },
  { icon: SiMongodb,    label: 'MongoDB',      color: '#47a248', delay: 3 },
  { icon: SiPostgresql, label: 'PostgreSQL',   color: '#4169e1', delay: 3.5 },
  { icon: SiRedis,      label: 'Redis',        color: '#ff4136', delay: 4 },
];

export default function Hero() {
  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg)]">
        <ParticleBackground />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--color-purple)] opacity-[0.04] blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(var(--color-accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--color-accent) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="section-container relative z-10 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left max-w-2xl">

            {/* Mobile Profile Photo — hidden on desktop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="flex lg:hidden justify-center mb-8"
            >
              <div
                className="rounded-full"
                style={{
                  width: '160px',
                  height: '160px',
                  padding: '3px',
                  background: 'linear-gradient(135deg, var(--color-accent), var(--color-purple))',
                  boxShadow: '0 0 30px var(--color-accent-glow)',
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden" style={{ border: '2px solid var(--color-bg)' }}>
                  <img
                    src="/userPic.jpg"
                    alt="Vishesh Sharma"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-[var(--color-border)] text-sm text-[var(--color-text-secondary)] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <MapPin size={13} className="text-[var(--color-accent)]" />
              <span>Available for opportunities · New York, NY</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] mb-4">
                <span className="block text-[var(--color-text)]">Hi, I'm</span>
                <span className="block gradient-text">Vishesh</span>
                <span className="block gradient-text" style={{ animationDelay: '0.5s' }}>
                  Sharma
                </span>
              </h1>
            </motion.div>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-4 h-8 font-display"
            >
              <TypeAnimation
                sequence={[
                  'Full-Stack Java Developer',
                  2000,
                  'Salesforce Architect',
                  2000,
                  'Cloud-Native Engineer',
                  2000,
                  'Real-Time API Specialist',
                  2000,
                  'Lead Salesforce Developer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                style={{ color: 'var(--color-accent)' }}
              />
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-[var(--color-text-secondary)] text-base sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Building high-performance web apps, cloud-native microservices & real-time APIs with
              <span className="text-[var(--color-accent)] font-medium"> 4+ years</span> of
              experience across enterprise and consumer platforms.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] text-white font-bold text-sm tracking-wide shadow-neon overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  View My Work
                  <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
              </motion.a>

              <motion.a
                href="mailto:vishesh98sharma@gmail.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-2xl glass gradient-border font-bold text-sm tracking-wide text-[var(--color-text)] hover:text-[var(--color-accent)] transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Mail size={16} />
                Get In Touch
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              {[
                { href: 'https://github.com/vishesh381',                              icon: Github,   label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/vishesh-sharma-0444b8169/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'mailto:vishesh98sharma@gmail.com',        icon: Mail,     label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 flex items-center justify-center rounded-xl glass border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] text-[var(--color-muted)] transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}

              <div className="h-px w-8 bg-[var(--color-border)]" />
              <span className="text-xs text-[var(--color-muted)]">vishesh98sharma@gmail.com</span>
            </motion.div>
          </div>

          {/* Right — Floating Tech Orbit */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:flex items-center justify-center relative w-[700px] h-[700px] shrink-0"
          >
            {/* Center Card — Profile Picture */}
            <div
              className="absolute z-10 rounded-full shadow-neon"
              style={{
                width: '460px',
                height: '460px',
                padding: '3px',
                background: 'linear-gradient(135deg, var(--color-accent), var(--color-purple))',
              }}
            >
              <div className="w-full h-full rounded-full overflow-hidden" style={{ border: '2px solid var(--color-bg)' }}>
                <img
                  src="/userPic.jpg"
                  alt="Vishesh Sharma"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>

            {/* Orbit Rings */}
            {[270, 330].map((radius, ri) => (
              <div
                key={ri}
                className="absolute rounded-full border border-dashed"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  borderColor: 'var(--color-border)',
                  opacity: 0.4,
                }}
              />
            ))}

            {/* Orbiting Icons */}
            {floatingTech.map((tech, i) => {
              const total = floatingTech.length;
              const angle = (i / total) * 360;
              const radius = i % 2 === 0 ? 270 : 330;
              const rad = (angle * Math.PI) / 180;
              const x = Math.cos(rad) * radius;
              const y = Math.sin(rad) * radius;

              return (
                <motion.div
                  key={tech.label}
                  className="absolute flex flex-col items-center gap-1"
                  style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: i % 2 === 0 ? 25 : 35,
                    repeat: Infinity,
                    ease: 'linear',
                    delay: tech.delay,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl glass border border-[var(--color-border)] flex items-center justify-center shadow-lg"
                    style={{ transform: 'translate(-50%, -50%)' }}
                    whileHover={{ scale: 1.3, zIndex: 20 }}
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: tech.delay,
                      ease: 'easeInOut',
                    }}
                    initial={{ opacity: 0 }}
                  >
                    <tech.icon size={20} style={{ color: tech.color }} />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { value: '4+', label: 'Years Experience', color: 'var(--color-accent)' },
            { value: '7+', label: 'Live Projects',    color: 'var(--color-purple)' },
            { value: '4',  label: 'Salesforce Certs', color: 'var(--color-accent)' },
            { value: '3.8',label: 'GPA (MS CS)',      color: 'var(--color-purple)' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass gradient-border rounded-2xl p-4 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="font-display text-3xl font-black mb-1" style={{ color: stat.color }}>
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-muted)] font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors group"
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 opacity-60 group-hover:opacity-100 transition-opacity">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-current"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.button>
    </section>
  );
}
