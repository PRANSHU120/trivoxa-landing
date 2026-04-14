'use client';

import Link from 'next/link';
import { ExternalLink, GitBranch, Link as LucideLink, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Product: [
      { label: 'Features', href: '#' },
      { label: 'Pricing', href: '#' },
      { label: 'Security', href: '#' },
    ],
    Company: [
      { label: 'About', href: '#about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Support', href: '#' },
    ],
  };

  const socials = [
    { icon: ExternalLink, href: '#', label: 'Twitter' },
    { icon: GitBranch, href: '#', label: 'GitHub' },
    { icon: LucideLink, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@trivoxa.com', label: 'Email' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#06031A]/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 text-lg font-bold text-white">
                T
              </div>
              <span className="bg-gradient-to-r from-fuchsia-400 via-violet-300 to-purple-400 bg-clip-text font-bold text-transparent">
                TRIVOXA
              </span>
            </Link>

            <p className="text-sm text-gray-400">
              Empowering Digital Growth through innovation and design.
            </p>

            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:border-fuchsia-400/50 hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold text-white">{title}</h3>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row">
          <p>&copy; {currentYear} TRIVOXA TECH. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}