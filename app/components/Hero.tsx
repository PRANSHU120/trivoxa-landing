'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-gradient-start/20 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-end/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-subtle border border-gradient-start/30 text-gradient-start font-semibold text-sm">
            ✨ Welcome to the future
          </span>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            Build a stronger <span className="gradient-text">digital presence</span>
          </h1>

          <p className="text-lg text-gray-400 leading-relaxed max-w-lg">
            Websites, SaaS, and brand-ready experiences crafted for growth. We transform your vision into scalable, modern digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="btn-primary inline-flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary inline-flex items-center justify-center gap-2">
              Explore Services
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold gradient-text">50+</p>
              <p className="text-sm text-gray-400">Projects Delivered</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">98%</p>
              <p className="text-sm text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative h-96 lg:h-full flex items-center justify-center">
          {/* Glowing card */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-fusion opacity-10 blur-3xl rounded-3xl" />
            <div className="card-glass p-8 border-gradient-start/30 hover:shadow-glow-lg transition-all duration-500">
              <div className="space-y-4">
                <div className="w-20 h-20 rounded-lg bg-gradient-fusion opacity-80" />
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded-full w-3/4" />
                  <div className="h-3 bg-white/10 rounded-full w-1/2" />
                </div>
                <div className="pt-4 space-y-3">
                  <div className="h-2 bg-gradient-start/30 rounded-full" />
                  <div className="h-2 bg-gradient-mid/30 rounded-full w-4/5" />
                  <div className="h-2 bg-gradient-end/30 rounded-full w-3/4" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating elements */}
          <div className="absolute top-10 right-10 w-16 h-16 rounded-lg border-2 border-gradient-start/30 animate-pulse" />
          <div className="absolute bottom-20 left-10 w-12 h-12 rounded-full border-2 border-gradient-mid/20 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  );
}
