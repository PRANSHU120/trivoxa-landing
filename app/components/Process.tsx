'use client';

import { Compass, PenTool, Code as CodeIcon, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Compass,
    title: 'Discover',
    description: 'We dive deep into your business goals, market, and vision. Understanding is the foundation.',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Design',
    description: 'Crafting beautiful, intuitive interfaces that resonate with your audience.',
  },
  {
    number: '03',
    icon: CodeIcon,
    title: 'Build',
    description: 'Engineering robust, scalable solutions with modern best practices.',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Launch',
    description: 'Deploying with confidence and supporting your success every step forward.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-container relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-end/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <span className="inline-block px-4 py-2 rounded-full bg-gradient-subtle border border-gradient-start/30 text-gradient-start font-semibold text-sm">
          Our Process
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          From Concept to <span className="gradient-text">Launch</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          A streamlined, transparent approach to delivering exceptional digital products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={idx}
              className="group relative"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Connector line (hidden on mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 -right-3 w-6 h-0.5 bg-gradient-fusion opacity-30" />
              )}

              <div className="card-glass p-6 hover:shadow-glow-lg transition-all duration-300 h-full relative">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-lg bg-gradient-fusion text-white font-bold text-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  {step.number}
                </div>

                <div className="pt-6 space-y-4">
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-gradient-start/20 flex items-center justify-center group-hover:bg-gradient-start/40 transition-colors">
                    <Icon className="w-5 h-5 text-gradient-start" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:gradient-text transition-all">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-fusion blur-xl transition-opacity rounded-2xl -z-10" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom accent */}
      <div className="mt-16 text-center">
        <p className="text-gray-400 text-lg">
          Ready to see this process in action?{' '}
          <button className="text-gradient-start hover:text-gradient-mid font-semibold transition-colors">
            Let's talk →
          </button>
        </p>
      </div>
    </section>
  );
}
