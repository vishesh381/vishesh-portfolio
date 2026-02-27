'use client';
import { useEffect, useRef, useState } from 'react';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    if (!dot) return;

    // High-contrast colors per theme
    const isDark = resolvedTheme === 'dark';
    const dotColor   = isDark ? '#ffffff' : '#0f172a';       // white on dark, near-black on light
    const glowColor  = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(15,23,42,0.2)';
    const ringColor  = isDark ? 'rgba(0,212,255,0.8)'   : 'rgba(124,58,237,0.8)'; // accent ring on hover

    dot.style.opacity = '0';

    // Apply base color whenever theme changes
    const applyBase = () => {
      dot.style.width      = '10px';
      dot.style.height     = '10px';
      dot.style.background = dotColor;
      dot.style.border     = 'none';
      dot.style.boxShadow  = `0 0 8px ${glowColor}`;
    };
    applyBase();

    const move = (e) => {
      dot.style.left    = e.clientX + 'px';
      dot.style.top     = e.clientY + 'px';
      dot.style.opacity = '1';
    };

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea');
      if (interactive) {
        dot.style.width      = '34px';
        dot.style.height     = '34px';
        dot.style.background = 'transparent';
        dot.style.border     = `2px solid ${ringColor}`;
        dot.style.boxShadow  = `0 0 12px ${ringColor}`;
      } else {
        applyBase();
      }
    };

    window.addEventListener('mousemove', move,  { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    window.addEventListener('mouseleave', () => { dot.style.opacity = '0'; });

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
    };
  }, [mounted, resolvedTheme]); // re-runs when theme switches

  if (!mounted) return null;

  return (
    <div
      ref={dotRef}
      className="hidden md:block fixed z-[9999] rounded-full pointer-events-none"
      style={{
        width: '10px',
        height: '10px',
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.18s ease, height 0.18s ease, background 0.18s ease, border 0.18s ease, opacity 0.25s ease',
        willChange: 'left, top',
      }}
    />
  );
}
