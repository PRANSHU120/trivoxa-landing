'use client';

import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="section-container relative overflow-hidden py-20">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-fusion opacity-20 rounded-full blur-3xl" />
      </div>

      <div className="card-glass p-0 border-gradient-start/50 overflow-hidden">
        <div className="relative z-10 p-12 md:p-20 text-center space-y-8">
          <div className="animate-fade-in space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              Ready to elevate your <span className="gradient-text">brand?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
              Let's collaborate and transform your digital vision into reality. Whether it's a website, SaaS platform, or complete brand overhaul, we're here to help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="btn-primary inline-flex items-center justify-center gap-2 group text-base">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-secondary inline-flex items-center justify-center gap-2 text-base">
              View Portfolio
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-8 justify-center text-center sm:text-left">
            <div>
              <p className="text-gray-400 text-sm mb-1">Email</p>
              <p className="text-white font-semibold hover:text-gradient-start transition-colors cursor-pointer">
                hello@trivoxa.tech
              </p>
            </div>
            <div className="hidden sm:block w-px bg-white/10" />
            <div>
              <p className="text-gray-400 text-sm mb-1">Phone</p>
              <p className="text-white font-semibold hover:text-gradient-start transition-colors cursor-pointer">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-start/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity" />
      </div>
    </section>
  );
}
