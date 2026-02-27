'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import {
  Mail, Phone, MapPin, Linkedin, Github, Send,
  CheckCircle, AlertCircle, Loader,
} from 'lucide-react';
import { SiSalesforce } from 'react-icons/si';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vishesh98sharma@gmail.com',
    href: 'mailto:vishesh98sharma@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (551) 260-8594',
    href: 'tel:+15512608594',
    color: '#a855f7',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'New York, NY',
    href: null,
    color: '#00d4ff',
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/vishesh381',
    color: '#e2e8f0',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/vishesh-sharma-0444b8169/',
    color: '#0077b5',
  },
  {
    icon: SiSalesforce,
    label: 'Trailblazer',
    href: 'https://www.salesforce.com/trailblazer/vsharma430',
    color: '#00a1e0',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:vishesh98sharma@gmail.com',
    color: '#00d4ff',
  },
];

export default function Contact() {
  const formRef = useRef(null);
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          user_name: formState.name,
          user_email: formState.email,
          from_name: formState.name,
          from_email: formState.email,
          reply_to: formState.email,
          subject: formState.subject,
          message: formState.message,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY },
      );
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }

    // Reset status after 5 seconds
    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section id="contact" className="section-padding relative">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--color-bg-secondary)] opacity-40 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 rounded-full bg-[var(--color-accent)] opacity-[0.04] blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[var(--color-purple)] opacity-[0.04] blur-[80px]" />
      </div>

      <div ref={ref} className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="text-[var(--color-accent)] font-mono text-sm font-semibold tracking-widest uppercase mb-3">
            // 05. Contact
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-black text-[var(--color-text)] mb-4">
            Let's Build Something
            <br />
            <span className="gradient-text">Amazing Together</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] max-w-lg mx-auto">
            Whether you have an opportunity, a project in mind, or just want to say hi — my inbox
            is always open. I'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-xl text-[var(--color-text)] mb-2">
                Get in Touch
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                I'm currently open to full-time roles, consulting engagements, and interesting
                collaborations. Don't hesitate to reach out!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 p-4 glass gradient-border rounded-2xl hover:scale-[1.02] transition-all duration-300 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}18` }}
                      >
                        <item.icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 glass rounded-2xl border border-[var(--color-border)]">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: `${item.color}18` }}
                      >
                        <item.icon size={18} style={{ color: item.color }} />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-wider mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-sm font-medium text-[var(--color-text)]">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xs font-semibold text-[var(--color-muted)] uppercase tracking-widest mb-3">
                Find me on
              </h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 px-4 py-2.5 glass gradient-border rounded-xl text-sm font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text)] transition-all duration-300"
                    aria-label={link.label}
                  >
                    <link.icon size={16} style={{ color: link.color }} />
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="p-4 rounded-2xl border border-green-400/30 bg-green-400/5"
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse shrink-0" />
                <div>
                  <div className="text-sm font-bold text-green-400">Open to Opportunities</div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                    Full-time roles · Consulting · Collaborations
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="glass gradient-border rounded-2xl p-6 md:p-8 space-y-5"
            >
              <h3 className="font-display font-bold text-xl text-[var(--color-text)] mb-2">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, name: e.target.value }))
                    }
                    placeholder="John Doe"
                    required
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState((p) => ({ ...p, email: e.target.value }))
                    }
                    placeholder="john@example.com"
                    required
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, subject: e.target.value }))
                  }
                  placeholder="Job Opportunity / Project Collaboration / Just saying hi..."
                  required
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState((p) => ({ ...p, message: e.target.value }))
                  }
                  placeholder="Tell me about your project, opportunity, or just say hello!"
                  required
                  rows={5}
                  className="input-field resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
                whileTap={status === 'idle' ? { scale: 0.98 } : {}}
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                    ? 'bg-red-500 text-white'
                    : status === 'loading'
                    ? 'bg-[var(--color-accent)] text-white opacity-80 cursor-not-allowed'
                    : 'bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-purple)] text-white shadow-neon hover:shadow-neon-strong'
                }`}
              >
                {status === 'loading' && (
                  <>
                    <Loader size={18} className="animate-spin" />
                    Sending...
                  </>
                )}
                {status === 'success' && (
                  <>
                    <CheckCircle size={18} />
                    Message Sent! I'll be in touch soon.
                  </>
                )}
                {status === 'error' && (
                  <>
                    <AlertCircle size={18} />
                    Failed to send. Try emailing directly.
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-[10px] text-center text-[var(--color-muted)]">
                By sending this message, you agree that I may reply to your email.
                Your data is not stored or shared with third parties.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
