import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#06031A',
        'dark-card': '#0F0823',
        'dark-border': '#1A1234',
        'gradient-start': '#C86BFF',
        'gradient-mid': '#9E48FF',
        'gradient-end': '#6D28FF',
      },
      backgroundImage: {
        'gradient-fusion': 'linear-gradient(135deg, #C86BFF 0%, #9E48FF 50%, #6D28FF 100%)',
        'gradient-subtle': 'linear-gradient(135deg, rgba(200, 107, 255, 0.1) 0%, rgba(157, 72, 255, 0.05) 100%)',
      },
      boxShadow: {
        'glow': '0 0 30px rgba(200, 107, 255, 0.3)',
        'glow-lg': '0 0 60px rgba(200, 107, 255, 0.4)',
        'glow-subtle': '0 0 20px rgba(157, 72, 255, 0.2)',
      },
      backdropFilter: {
        'blur': 'blur(10px)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200, 107, 255, 0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(200, 107, 255, 0.4)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
