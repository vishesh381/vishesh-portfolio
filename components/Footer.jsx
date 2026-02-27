'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { SiSalesforce } from 'react-icons/si';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Github, href: 'https://github.com/vishesh381', label: 'GitHub', color: '#e2e8f0' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/vishesh-sharma-0444b8169/', label: 'LinkedIn', color: '#0077b5' },
  { icon: SiSalesforce, href: 'https://www.salesforce.com/trailblazer/vsharma430', label: 'Trailblazer', color: '#00a1e0' },
  { icon: Mail, href: 'mailto:vishesh98sharma@gmail.com', label: 'Email', color: '#00d4ff' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-[var(--color-border)] overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)] opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-[var(--color-accent)]/20 to-transparent pointer-events-none" />

      <div className="section-container relative py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-purple)] flex items-center justify-center">
                <span className="font-display font-black text-white text-lg">VS</span>
              </div>
              <div>
                <div className="font-display font-bold text-[var(--color-text)]">Vishesh Sharma</div>
                <div className="text-xs text-[var(--color-muted)]">Full-Stack Developer</div>
              </div>
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs">
              Building high-performance web applications, cloud-native microservices, and real-time
              APIs with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2 mb-5">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 glass rounded-xl border border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-accent)] transition-all duration-300"
                  aria-label={s.label}
                >
                  <s.icon size={16} style={{ color: s.color }} />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:vishesh98sharma@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] text-white text-xs font-bold transition-all hover:scale-105 active:scale-95"
            >
              <Mail size={13} />
              Hire Me
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-muted)] text-center sm:text-left">
            © {new Date().getFullYear()} Vishesh Sharma. Crafted with{' '}
            <Heart size={11} className="inline text-red-400" fill="currentColor" /> in New York, NY
            <br className="sm:hidden" />
            <span className="hidden sm:inline"> · </span>Built with Next.js + Tailwind + Framer Motion
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 px-4 py-2 glass rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)] text-[var(--color-muted)] hover:text-[var(--color-accent)] text-xs font-semibold transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
