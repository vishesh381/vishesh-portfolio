import { Inter, Space_Grotesk } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
});

export const metadata = {
  title: 'Vishesh Sharma | Full-Stack Developer & Salesforce Architect',
  description:
    'Full-stack Java Developer & Salesforce Architect with 4+ years of experience. Specialized in React, Spring Boot, Salesforce Health Cloud, AWS, and modern web technologies.',
  keywords: [
    'Vishesh Sharma',
    'Full Stack Developer',
    'Salesforce Developer',
    'React Developer',
    'Spring Boot',
    'Java Developer',
    'New York',
    'Portfolio',
  ],
  authors: [{ name: 'Vishesh Sharma', url: 'mailto:vishesh98sharma@gmail.com' }],
  openGraph: {
    title: 'Vishesh Sharma | Full-Stack Developer & Salesforce Architect',
    description:
      'Building high-performance web apps, cloud-native microservices, and real-time APIs.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vishesh Sharma | Full-Stack Developer',
    description: 'Full-stack developer crafting exceptional digital experiences.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
