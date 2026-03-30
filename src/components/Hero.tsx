import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fullscreen background image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/94e0e3b7-bf50-4093-946a-fc087a0e7bbd/bucket/a169a8cb-87cf-4a8c-ab5d-4d45e3e3c0e0.png"
          alt="АН Багира"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />
      </div>

      {/* Content — прижато к низу */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-14 px-6">
        <div className="container mx-auto flex flex-col items-center text-center gap-6">

          {/* Stats — выровнены одинаково */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: "18 лет", label: "опыта на рынке" },
              { value: "8 000+", label: "успешных сделок" },
              { value: "Вся Россия", label: "география работы" },
            ].map((stat, i) => (
              <div key={i} className="text-center w-32">
                <div className="text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="tel:+79130071870"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 flex items-center gap-2"
            >
              <Icon name="Phone" size={18} />
              <span className="relative z-10">+7 913 007-18-70</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 glass rounded-full font-semibold text-lg text-white hover:bg-white/10 transition-all hover:scale-105"
            >
              Наши услуги
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
