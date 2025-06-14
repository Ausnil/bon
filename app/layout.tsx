import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Next.js Site',
  description: 'A simple website with Next.js',
};

// ... existing imports
import Footer from './components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative pb-16"> {/* Match footer height */}
        <Navbar />
        <main className="p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}