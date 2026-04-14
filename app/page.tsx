import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#06031A] text-white">
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 text-center">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-fuchsia-400 via-violet-300 to-purple-400 bg-clip-text text-transparent">
          TRIVOXA TECH 🚀
        </h1>
        <p className="mt-4 text-gray-400 text-lg">
          Empowering Digital Growth through modern web, SaaS & design
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 text-white font-semibold">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-fuchsia-400/50">
            View Services
          </button>
        </div>
      </section>

      {/* Placeholder Sections */}
      <section id="services" className="text-center py-20">
        <h2 className="text-3xl font-bold">Services</h2>
      </section>

      <section id="process" className="text-center py-20">
        <h2 className="text-3xl font-bold">Process</h2>
      </section>

      <section id="about" className="text-center py-20">
        <h2 className="text-3xl font-bold">About</h2>
      </section>

      <section id="contact" className="text-center py-20">
        <h2 className="text-3xl font-bold">Contact</h2>
      </section>

      <Footer />
    </main>
  );
}