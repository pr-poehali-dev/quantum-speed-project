export function Footer() {
  return (
    <footer className="relative pt-32 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tighter mb-6 block">
              Багира<span className="text-blue-400">.</span>
            </a>
            <p className="text-white/50 leading-relaxed">
              Агентство недвижимости Татьяны. 18 лет опыта, более 8 000 успешных сделок по всей России.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Навигация</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#services" className="hover:text-white transition-colors">Услуги</a></li>
              <li><a href="#work" className="hover:text-white transition-colors">Истории успеха</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">О Татьяне</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Социальные сети</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="https://vk.com/id145675581" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">ВКонтакте</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telegram</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Связаться со мной</h4>
            <p className="text-white/60 mb-4">Бесплатная консультация по вашей ситуации</p>
            <a
              href="tel:+79130071870"
              className="text-xl font-medium hover:text-blue-400 transition-colors"
            >
              +7 913 007-18-70
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
          <p>&copy; 2026 АН Багира. Все права защищены.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
