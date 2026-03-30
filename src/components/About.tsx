import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const stats = [
  { value: "8 000+", label: "успешных сделок" },
  { value: "18 лет", label: "опыта работы" },
  { value: "Вся Россия", label: "работаем везде" },
  { value: "100%", label: "честность и прозрачность" },
]

const advantages = [
  { icon: "ShieldCheck", text: "Честность — открыто говорю о минусах, плюсах и рисках" },
  { icon: "Award", text: "Эксперт в законодательстве и тонкостях рынка" },
  { icon: "Users", text: "Индивидуальный подход даже в самых сложных случаях" },
  { icon: "Handshake", text: "Результат с гарантией и полным комфортом для вас" },
]

export function About() {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-[50vw] h-[50vw] bg-purple-900/15 rounded-full blur-[150px] pointer-events-none -translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Logo + заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center gap-8 mb-16"
        >
          <div className="relative shrink-0">
            <div className="absolute inset-0 bg-purple-500/20 rounded-3xl blur-2xl scale-110" />
            <img
              src="https://cdn.poehali.dev/projects/94e0e3b7-bf50-4093-946a-fc087a0e7bbd/bucket/3e13ac6c-8e2e-4a06-b666-012bdd0372cc.png"
              alt="Логотип АН Багира"
              className="relative z-10 w-48 md:w-60 drop-shadow-2xl"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-white/50 uppercase tracking-widest mb-3">О нас</p>
            <h2 className="text-4xl md:text-6xl font-bold">
              Агентство недвижимости
              <br />
              <span className="text-gradient">Багира</span>
            </h2>
          </div>
        </motion.div>

        {/* Main card with photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <GlassCard className="p-0 overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Photo side */}
              <div className="relative flex items-center justify-center p-12 bg-gradient-to-br from-purple-900/30 to-blue-900/20">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-blue-500/20 rounded-3xl blur-2xl scale-110" />
                  <img
                    src="https://cdn.poehali.dev/projects/94e0e3b7-bf50-4093-946a-fc087a0e7bbd/bucket/a169a8cb-87cf-4a8c-ab5d-4d45e3e3c0e0.png"
                    alt="Татьяна — АН Багира"
                    className="relative z-10 w-full max-w-xs rounded-2xl object-cover shadow-2xl"
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="p-12 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">Татьяна</h3>
                <p className="text-purple-400 font-medium mb-6 text-lg">Руководитель АН "Багира"</p>
                <p className="text-white/70 leading-relaxed mb-8 text-lg">
                  Вся недвижимость в одном агентстве: новостройки, квартиры, коммерция, аренда.
                  <br /><br />
                  <span className="text-white/90 italic">Багира — грация в мире недвижимости и решение ваших задач!</span>
                </p>

                <div className="space-y-4">
                  {advantages.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.08 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-0.5 p-1.5 rounded-lg bg-purple-500/20 shrink-0">
                        <Icon name={item.icon} size={16} className="text-purple-400" />
                      </div>
                      <span className="text-white/70 leading-snug">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="text-center py-8">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}