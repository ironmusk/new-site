import { Link } from 'react-router-dom';
import { Award, Clock, Heart, Truck, Star, ArrowRight, Ribbon } from 'lucide-react';
import OrderForm from '../components/OrderForm';

const advantages = [
  { icon: Heart, title: 'Ручная работа', desc: 'Каждая лента — с любовью и вниманием к деталям' },
  { icon: Clock, title: 'Быстро', desc: 'Изготовление от 2 рабочих дней' },
  { icon: Award, title: 'Качество', desc: 'Премиальные материалы и стойкая печать' },
  { icon: Truck, title: 'Доставка', desc: 'По Москве и всей России' },
];

const catalogPreviews = [
  { title: 'Выпускные ленты', desc: 'Памятные ленты для выпускного вечера', cat: 'graduation', emoji: '🎓' },
  { title: 'Свадебные ленты', desc: 'Элегантное оформление торжества', cat: 'wedding', emoji: '💍' },
  { title: 'Ритуальные ленты', desc: 'Достойная память с уважением', cat: 'ritual', emoji: '🕊️' },
  { title: 'Брендированные ленты', desc: 'Логотип вашей компании на ленте', cat: 'branded', emoji: '🏷️' },
  { title: 'Индивидуальные заказы', desc: 'Любой текст, цвет и дизайн', cat: 'custom', emoji: '✨' },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FDF5E6] via-[#FFF8EE] to-[#F5E6D0]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-[#800020] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-[#D4AF37] rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#800020]/10 rounded-full text-[#800020] text-sm font-medium mb-6">
                <Ribbon className="w-4 h-4" />
                Студия персонализированных лент
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 font-serif">
                Ленты с вашим <span className="text-[#800020]">текстом</span> и <span className="text-[#D4AF37]">логотипом</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                Изготавливаем персонализированные ленты для выпускных, свадеб, мероприятий и бизнеса. Любой тираж — от 1 штуки.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacts"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-all shadow-lg shadow-[#800020]/20 hover:shadow-xl hover:shadow-[#800020]/30"
                >
                  Оставить заявку
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/catalog"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#800020] text-[#800020] font-semibold rounded-full hover:bg-[#800020] hover:text-white transition-all"
                >
                  Смотреть каталог
                </Link>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/20 to-[#D4AF37]/20 rounded-3xl rotate-6" />
                <div className="absolute inset-4 bg-white rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-7xl mb-4">🎀</div>
                    <p className="text-gray-500 text-sm">Персонализированные ленты<br/>для любых событий</p>
                    <div className="mt-4 flex justify-center gap-2">
                      {['🎓', '💍', '🕊️', '🏷️', '✨'].map((e, i) => (
                        <span key={i} className="text-2xl">{e}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <div key={i} className="text-center p-6 rounded-2xl bg-[#FDF5E6] hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-[#800020]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-[#800020]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section className="py-16 bg-[#FDF5E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 font-serif">Наша продукция</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Изготавливаем ленты для любых событий — от трогательных ритуальных до стильных брендированных для вашего бизнеса</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogPreviews.map((item, i) => (
              <Link
                key={i}
                to={`/catalog/${item.cat}`}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#800020] transition-colors">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-[#800020] text-sm font-medium">
                  Подробнее <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Выполненных заказов' },
              { num: '50+', label: 'Постоянных клиентов' },
              { num: '2 дня', label: 'Минимальный срок' },
              { num: '4.9', label: 'Рейтинг на Авито' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl md:text-4xl font-bold text-[#800020] mb-1">{stat.num}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-16 bg-[#FDF5E6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Анна М.', text: 'Заказывали ленты на выпускной для класса. Получилось великолепно! Дети были в восторге.', rating: 5 },
              { name: 'Ольга К.', text: 'Брендированные ленты для нашей кофейни — качество на высоте. Заказываем регулярно.', rating: 5 },
              { name: 'Дмитрий В.', text: 'Свадебные ленты превзошли все ожидания. Спасибо за оперативность и красоту!', rating: 5 },
            ].map((review, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-600 text-sm mb-4 italic">«{review.text}»</p>
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/reviews" className="inline-flex items-center gap-2 text-[#800020] font-medium hover:underline">
              Все отзывы <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="py-16 bg-white" id="order-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4 font-serif">Оставить заявку</h2>
            <p className="text-center text-gray-600 mb-8">Заполните форму, и мы свяжемся с вами в течение 2 часов</p>
            <div className="bg-[#FDF5E6] rounded-2xl p-6 md:p-8">
              <OrderForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
