import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Work } from "@/components/Work"
import { About } from "@/components/About"
import { Footer } from "@/components/Footer"

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <About />

      {/* Call to Action Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Решим вашу задачу <br />
            <span className="text-gradient">вместе!</span>
          </h2>
          <p className="text-xl text-white/60 mb-4 max-w-2xl mx-auto">
            Бесплатная консультация и анализ вашей ситуации — просто позвоните или напишите.
          </p>
          <p className="text-2xl font-bold text-white/90 mb-10">+7 913 007-18-70</p>
          <a
            href="tel:+79130071870"
            className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
          >
            Позвонить Татьяне
          </a>
        </div>

        {/* Background Gradient for CTA */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />
      </section>

      <Footer />
    </main>
  )
}

export default Index