import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Instagram } from 'lucide-react';
import OrderForm from '../components/OrderForm';

export default function Contacts() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Контакты</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Свяжитесь с нами удобным способом или оставьте заявку — ответим в течение 2 часов</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Свяжитесь с нами</h2>
            
            <div className="space-y-4 mb-8">
              <a href="tel:+79991234567" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">+7 (999) 123-45-67</p>
                  <p className="text-sm text-gray-500">Звонок / WhatsApp / Telegram</p>
                </div>
              </a>

              <a href="mailto:info@katyulya.ru" className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">info@katyulya.ru</p>
                  <p className="text-sm text-gray-500">Для заявок и вопросов</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Москва</p>
                  <p className="text-sm text-gray-500">Самовывоз по договорённости</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#800020]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Пн–Вс: 9:00–21:00</p>
                  <p className="text-sm text-gray-500">Отвечаем в мессенджерах быстро</p>
                </div>
              </div>
            </div>

            {/* Messengers */}
            <h3 className="font-semibold text-gray-900 mb-3">Мессенджеры</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://t.me/katyulya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#229ED9] text-white rounded-full text-sm font-medium hover:bg-[#1a8bc0] transition-colors"
              >
                <Send className="w-4 h-4" />
                Telegram
              </a>
              <a
                href="https://wa.me/79991234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white rounded-full text-sm font-medium hover:bg-[#1fb855] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href="https://instagram.com/katyulya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
            </div>

            {/* Map placeholder */}
            <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-[#800020] mx-auto mb-2" />
                <p className="text-gray-600 text-sm">Москва</p>
                <p className="text-gray-400 text-xs">Зона самовывоза</p>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Оставить заявку</h2>
            <div className="bg-[#FDF5E6] rounded-2xl p-6 md:p-8">
              <OrderForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
