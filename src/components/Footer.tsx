import { Link } from 'react-router-dom';
import { Ribbon, Instagram, Send, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2D1B14] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center">
                <Ribbon className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <span className="text-xl font-bold font-serif">КатЮля</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Студия персонализированных лент. Изготавливаем ленты с вашим текстом и логотипом для любых мероприятий.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4AF37]">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalog" className="text-gray-400 hover:text-white transition-colors">Каталог</Link></li>
              <li><Link to="/prices" className="text-gray-400 hover:text-white transition-colors">Цены</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Портфолио</Link></li>
              <li><Link to="/how-to-order" className="text-gray-400 hover:text-white transition-colors">Как заказать</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white transition-colors">Отзывы</Link></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4AF37]">Контакты</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+79991234567" className="hover:text-white transition-colors">+7 (999) 123-45-67</a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@katyulya.ru" className="hover:text-white transition-colors">info@katyulya.ru</a>
              </li>
              <li className="text-gray-400">
                <p>Москва, самовывоз</p>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-[#D4AF37]">Мы в соцсетях</h3>
            <div className="flex gap-3 mb-4">
              <a href="https://instagram.com/katyulya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#800020] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://t.me/katyulya" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#800020] transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
            <div className="bg-white/10 rounded-lg p-3">
              <p className="text-xs text-gray-400 mb-1">Сканируйте QR для Instagram</p>
              <div className="w-20 h-20 bg-white rounded flex items-center justify-center">
                <div className="w-16 h-16 bg-gray-900 grid grid-cols-5 grid-rows-5 gap-0.5 p-1">
                  {Array.from({length: 25}).map((_, i) => (
                    <div key={i} className={`${Math.random() > 0.4 ? 'bg-white' : 'bg-gray-900'} rounded-sm`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2024–2026 КатЮля. Все права защищены.</p>
          <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
