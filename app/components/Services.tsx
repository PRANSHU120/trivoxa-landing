'use client';

import { Code, Zap, Palette } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built websites and web applications using cutting-edge tech. Scalable, fast, and beautiful.',
    gradient: 'from-gradient-start to-gradient-mid',
  },
  {
    icon: Zap,
    title: 'SaaS Development',
    description: 'Full-stack SaaS solutions with authentication, dashboards, and real-time capabilities.',
    gradient: 'from-gradient-mid to-gradient-end',
  },
  {
    icon: Palette,
    title: 'Branding & UX',
    description: 'Strategic brand positioning, design systems, and user experiences that captivate.',
    gradient: 'from-gradient-end to-gradient-start',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-container relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-mid/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="text-center mb-16 space-y-4 animate-fade-in">
        <span className="inline-block px-4 py-2 rounded-full bg-gradient-subtle border border-gradient-start/30 text-gradient-start font-semibold text-sm">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-5xl font-bold">
          Services That <span className="gradient-text">Drive Growth</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div
              key={idx}
              className="card-glass-hover group h-full"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Gradient accent on hover */}
              <div className={`absolute inset-0 -z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-br ${service.gradient} blur-xl`} />

              <div className="relative p-8 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-gradient-fusion/20 flex items-center justify-center mb-6 group-hover:bg-gradient-fusion/40 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gradient-start" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-6 inline-flex items-center text-gradient-start opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                  <span className="text-sm font-semibold">Learn more</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
