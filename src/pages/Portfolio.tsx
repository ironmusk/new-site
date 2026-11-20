import { useState } from 'react';
import { Filter } from 'lucide-react';

const categories = ['Все', 'Выпускные', 'Свадебные', 'Ритуальные', 'Брендированные', 'Индивидуальные'];

const portfolioItems = [
  { id: 1, cat: 'Выпускные', title: 'Выпускной 2024, школа №45', color: 'bg-gradient-to-br from-blue-100 to-blue-200', emoji: '🎓' },
  { id: 2, cat: 'Свадебные', title: 'Свадьба Алексея и Марии', color: 'bg-gradient-to-br from-pink-100 to-pink-200', emoji: '💍' },
  { id: 3, cat: 'Брендированные', title: 'Кофейня "Утро"', color: 'bg-gradient-to-br from-amber-100 to-amber-200', emoji: '☕' },
  { id: 4, cat: 'Выпускные', title: 'Выпускной kindergarten "Радуга"', color: 'bg-gradient-to-br from-green-100 to-green-200', emoji: '🌈' },
  { id: 5, cat: 'Ритуальные', title: 'Памятная лента', color: 'bg-gradient-to-br from-gray-100 to-gray-200', emoji: '🕊️' },
  { id: 6, cat: 'Свадебные', title: 'Свадьба в стиле рустик', color: 'bg-gradient-to-br from-rose-100 to-rose-200', emoji: '🌹' },
  { id: 7, cat: 'Брендированные', title: 'Цветочная студия "Флора"', color: 'bg-gradient-to-br from-purple-100 to-purple-200', emoji: '🌸' },
  { id: 8, cat: 'Индивидуальные', title: 'Корпоратив IT-компании', color: 'bg-gradient-to-br from-indigo-100 to-indigo-200', emoji: '💻' },
  { id: 9, cat: 'Выпускные', title: 'Выпускной медколледжа', color: 'bg-gradient-to-br from-teal-100 to-teal-200', emoji: '⚕️' },
  { id: 10, cat: 'Брендированные', title: 'Кондитерская "Сладкий дом"', color: 'bg-gradient-to-br from-orange-100 to-orange-200', emoji: '🎂' },
  { id: 11, cat: 'Свадебные', title: 'Золотая свадьба', color: 'bg-gradient-to-br from-yellow-100 to-yellow-200', emoji: '🥂' },
  { id: 12, cat: 'Индивидуальные', title: 'Спортивные соревнования', color: 'bg-gradient-to-br from-red-100 to-red-200', emoji: '🏆' },
  { id: 13, cat: 'Выпускные', title: 'Выпускной вуза 2024', color: 'bg-gradient-to-br from-sky-100 to-sky-200', emoji: '📚' },
  { id: 14, cat: 'Ритуальные', title: 'Мемориальная лента', color: 'bg-gradient-to-br from-slate-100 to-slate-200', emoji: '🕯️' },
  { id: 15, cat: 'Брендированные', title: 'Ресторан "Прованс"', color: 'bg-gradient-to-br from-lime-100 to-lime-200', emoji: '🍽️' },
  { id: 16, cat: 'Индивидуальные', title: 'День рождения 50 лет', color: 'bg-gradient-to-br from-fuchsia-100 to-fuchsia-200', emoji: '🎉' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('Все');

  const filtered = activeFilter === 'Все'
    ? portfolioItems
    : portfolioItems.filter((item) => item.cat === activeFilter);

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Портфолио</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Наши работы — каждая лента создана с вниманием к деталям и пожеланиям клиента</p>
        </div>

        {/* Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter className="w-4 h-4 text-gray-500 flex-shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === cat
                  ? 'bg-[#800020] text-white'
                  : 'bg-white text-gray-700 hover:bg-[#800020]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <div className={`absolute inset-0 ${item.color}`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl group-hover:scale-110 transition-transform">{item.emoji}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end">
                <div className="w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            В этой категории пока нет работ
          </div>
        )}
      </div>
    </div>
  );
}
