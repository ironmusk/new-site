import { Link } from 'react-router-dom';
import { ArrowRight, Info, Zap } from 'lucide-react';

const priceData = [
  { type: 'Выпускные ленты', width: '25 мм', qty10: '200 ₽', qty50: '170 ₽', qty100: '150 ₽' },
  { type: 'Выпускные ленты', width: '40 мм', qty10: '280 ₽', qty50: '240 ₽', qty100: '200 ₽' },
  { type: 'Свадебные ленты', width: '25 мм', qty10: '300 ₽', qty50: '250 ₽', qty100: '200 ₽' },
  { type: 'Свадебные ленты', width: '40 мм', qty10: '400 ₽', qty50: '350 ₽', qty100: '280 ₽' },
  { type: 'Ритуальные ленты', width: '50 мм', qty10: '180 ₽', qty50: '150 ₽', qty100: '120 ₽' },
  { type: 'Ритуальные ленты', width: '70 мм', qty10: '250 ₽', qty50: '200 ₽', qty100: '170 ₽' },
  { type: 'Брендированные ленты', width: '15 мм', qty10: '120 ₽', qty50: '90 ₽', qty100: '80 ₽' },
  { type: 'Брендированные ленты', width: '25 мм', qty10: '150 ₽', qty50: '110 ₽', qty100: '90 ₽' },
  { type: 'Индивидуальный заказ', width: 'Любая', qty10: 'от 150 ₽', qty50: 'от 120 ₽', qty100: 'от 100 ₽' },
];

export default function Prices() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Цены</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Прозрачное ценообразование. Чем больше тираж — тем выгоднее цена за штуку</p>
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#800020] text-white">
                  <th className="text-left px-6 py-4 font-semibold">Тип ленты</th>
                  <th className="text-left px-6 py-4 font-semibold">Ширина</th>
                  <th className="text-center px-6 py-4 font-semibold">10 шт</th>
                  <th className="text-center px-6 py-4 font-semibold">50 шт</th>
                  <th className="text-center px-6 py-4 font-semibold">100+ шт</th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-[#FDF5E6]/50' : 'bg-white'}>
                    <td className="px-6 py-3 font-medium text-gray-900">{row.type}</td>
                    <td className="px-6 py-3 text-gray-600">{row.width}</td>
                    <td className="px-6 py-3 text-center text-gray-700">{row.qty10}</td>
                    <td className="px-6 py-3 text-center text-gray-700">{row.qty50}</td>
                    <td className="px-6 py-3 text-center font-semibold text-[#800020]">{row.qty100}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#FDF5E6] rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[#800020] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Оптовые заказы</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При заказе от 20 штук действует скидка. Для постоянных клиентов (цветочные студии, кондитерские, кафе) — индивидуальные условия и регулярные поставки.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FDF5E6] rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Zap className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Срочное изготовление</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Стандартный срок — 2–5 рабочих дней. Срочный заказ (1 день) — наценка 50%. Свяжитесь с нами для уточнения возможности.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's included */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Что входит в стоимость</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Разработка макета',
              'Согласование с вами',
              'Печать на ленте',
              'Контроль качества',
              'Упаковка',
              'Консультация по выбору',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-[#800020] text-xs">✓</span>
                </div>
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Нужен точный расчёт? Оставьте заявку — рассчитаем стоимость за 2 часа!</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors"
          >
            Рассчитать стоимость <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
