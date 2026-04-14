'use client';

export default function About() {
  const colors = [
    { name: 'Primary Gradient', colors: ['#C86BFF', '#9E48FF', '#6D28FF'], desc: 'Main brand gradient' },
    { name: 'Dark Background', colors: ['#06031A'], desc: 'Elegant dark foundation' },
    { name: 'Accents', colors: ['#FFFFFF', '#A0AEC0'], desc: 'Text & supporting elements' },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-start/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 animate-fade-in">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-subtle border border-gradient-start/30 text-gradient-start font-semibold text-sm">
            About TRIVOXA TECH
          </span>

          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Empowering</span> Digital Growth
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            At TRIVOXA TECH, we believe in the power of thoughtful design and robust technology. Our team of creative strategists and engineers work cohesively to build digital experiences that matter.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-fusion flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-white">Client-Centric Approach</p>
                <p className="text-sm text-gray-400">Your success is our success</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-fusion flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-white">Modern Tech Stack</p>
                <p className="text-sm text-gray-400">Latest tools and technologies</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-fusion flex items-center justify-center text-white font-bold">
                ✓
              </div>
              <div>
                <p className="font-semibold text-white">Scalable Solutions</p>
                <p className="text-sm text-gray-400">Built to grow with you</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right - Brand Showcase */}
        <div className="space-y-8">
          {/* Logo Card */}
          <div className="card-glass p-8 border-gradient-start/30 hover:shadow-glow transition-all duration-500">
            <p className="text-sm font-semibold text-gray-400 mb-4">Brand Identity</p>
            <div className="bg-white/5 rounded-lg p-8 flex items-center justify-center min-h-40 border border-white/10">
              <div className="w-24 h-24 rounded-lg bg-gradient-fusion flex items-center justify-center text-white font-bold text-4xl">
                T
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">TRIVOXA TECH - Premium Digital Solutions</p>
          </div>

          {/* Color Palette */}
          <div className="card-glass p-6 border-gradient-start/30">
            <p className="text-sm font-semibold text-gray-400 mb-4">Color Palette</p>
            <div className="space-y-3">
              {colors.map((colorSet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {colorSet.colors.map((color, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded border border-white/20"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex-grow">
                    <p className="text-sm font-medium text-white">{colorSet.name}</p>
                    <p className="text-xs text-gray-500">{colorSet.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
