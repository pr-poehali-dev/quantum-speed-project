import { GlassCard } from "@/components/ui/glass-card"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: <Icon name="TrendingUp" size={32} className="text-blue-400" />,
    title: "Продажа квартиры",
    description: "Продам вашу квартиру дорого и без нервов. Оценю рыночную стоимость, организую профессиональные фото, найду покупателей и проведу сделку под ключ.",
  },
  {
    icon: <Icon name="Home" size={32} className="text-purple-400" />,
    title: "Аренда жилья",
    description: "Сдам вашу квартиру быстро и только надёжным арендаторам. Проверю документы, составлю договор и защищу ваши интересы на каждом этапе.",
  },
  {
    icon: <Icon name="Search" size={32} className="text-indigo-400" />,
    title: "Покупка недвижимости",
    description: "Помогу выбрать лучший вариант без переплат и скрытых рисков. Проверю юридическую чистоту объекта и проведу переговоры о цене в вашу пользу.",
  },
  {
    icon: <Icon name="ShieldCheck" size={32} className="text-pink-400" />,
    title: "Доверительное управление аренды квартир и апартаментов",
    description: "Возьму на себя полное управление вашей недвижимостью: поиск арендаторов, заключение договоров, контроль оплаты и состояния объекта. Вы получаете доход — без забот.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4"
          >
            Агентство недвижимости Багира
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Чем я помогу
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "100px" }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:bg-white/10 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-white/60 leading-relaxed">{service.description}</p>
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-white/40 group-hover:text-white transition-colors">
                  Узнать подробнее <div className="w-4 h-[1px] bg-current transition-all group-hover:w-8" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}