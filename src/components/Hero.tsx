import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/94e0e3b7-bf50-4093-946a-fc087a0e7bbd/bucket/a169a8cb-87cf-4a8c-ab5d-4d45e3e3c0e0.png"
          alt="АН Багира"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>

      {/* Логотип + статистика внизу */}
      <div className="absolute bottom-0 left-0 right-0 z-10 pb-12 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col md:flex-row items-center md:items-end gap-8"
          >
            {/* Логотип */}
            <img
              src="https://cdn.poehali.dev/projects/94e0e3b7-bf50-4093-946a-fc087a0e7bbd/bucket/3e13ac6c-8e2e-4a06-b666-012bdd0372cc.png"
              alt="Логотип АН Багира"
              className="w-36 md:w-44 drop-shadow-2xl shrink-0"
            />

            {/* Разделитель */}
            <div className="hidden md:block w-[1px] h-16 bg-white/20" />

            {/* Статистика */}
            <div className="flex flex-wrap justify-center md:justify-start gap-8 md:gap-12">
              {[
                { value: "Мы", label: "работаем по всей России" },
                { value: "18 лет", label: "опыта работы" },
                { value: "8 000+", label: "успешных сделок" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60 mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}