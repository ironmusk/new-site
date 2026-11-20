import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const categories = [
  {
    id: 'graduation',
    title: 'Выпускные ленты',
    emoji: '🎓',
    desc: 'Персонализированные ленты для выпускных вечеров в школах, колледжах и университетах. Имя выпускника, название учебного заведения, год — нанесём любую информацию.',
    priceFrom: 'от 150 ₽/шт',
    features: ['Любой текст и цвет', 'Тираж от 1 шт.', 'Ширина 25–50 мм', 'Срок от 2 дней'],
  },
  {
    id: 'wedding',
    title: 'Свадебные ленты',
    emoji: '💍',
    desc: 'Элегантные ленты для оформления свадебного торжества. Имена молодожёнов, дата свадьбы, декоративные элементы — создадим идеальное дополнение вашего праздника.',
    priceFrom: 'от 200 ₽/шт',
    features: ['Премиум-материалы', 'Золотое/серебряное тиснение', 'Любая ширина', 'Срочный заказ за 1 день'],
  },
  {
    id: 'ritual',
    title: 'Ритуальные ленты',
    emoji: '🕊️',
    desc: 'Изготавливаем ритуальные ленты с уважением и вниманием к деталям. Траурные надписи, памятные даты, портретные ленты — выполним с должным достоинством.',
    priceFrom: 'от 120 ₽/шт',
    features: ['Деликатное исполнение', 'Срочное изготовление', 'Различные цвета', 'Тираж от 1 шт.'],
  },
  {
    id: 'branded',
    title: 'Брендированные ленты',
    emoji: '🏷️',
    desc: 'Ленты с логотипом вашей компании для упаковки продукции, оформления мероприятий, промо-акций. Идеально для цветочных студий, кондитерских, кафе и магазинов.',
    priceFrom: 'от 80 ₽/шт',
    features: ['Ваш логотип и цвета', 'Оптовые скидки от 20 шт.', 'Регулярные поставки', 'Чеки для юрлиц (НПД)'],
  },
  {
    id: 'custom',
    title: 'Индивидуальные заказы',
    emoji: '✨',
    desc: 'Нестандартный проект? Мы готовы воплотить любую идею! Ленты для спортивных соревнований, корпоративов, дней рождения, фотосессий — обсудим ваш проект.',
    priceFrom: 'от 100 ₽/шт',
    features: ['Любой дизайн', 'Консультация дизайнера', 'Пробный образец', 'Гибкие условия'],
  },
];

export default function Catalog() {
  const { category } = useParams();
  const activeCategory = categories.find((c) => c.id === category) || null;

  if (activeCategory) {
    return (
      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-[#800020]">Главная</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-[#800020]">Каталог</Link>
            <span>/</span>
            <span className="text-[#800020]">{activeCategory.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="text-5xl mb-4">{activeCategory.emoji}</div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">{activeCategory.title}</h1>
              <p className="text-gray-600 leading-relaxed mb-6">{activeCategory.desc}</p>
              <div className="text-2xl font-bold text-[#800020] mb-6">{activeCategory.priceFrom}</div>
              <ul className="space-y-3 mb-8">
                {activeCategory.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-[#800020]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#800020]" />
                    </div>
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 px-8 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors"
              >
                Заказать <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-gradient-to-br from-[#FDF5E6] to-[#F5E6D0] rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="text-8xl mb-4">{activeCategory.emoji}</div>
                <p className="text-gray-500">Примеры работ в этой категории</p>
                <Link to="/portfolio" className="text-[#800020] text-sm font-medium hover:underline mt-2 inline-block">
                  Смотреть портфолио →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Каталог продукции</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Выберите категорию лент, чтобы узнать подробности, цены и оформить заказ</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/catalog/${cat.id}`}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="text-5xl mb-4">{cat.emoji}</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#800020] transition-colors">{cat.title}</h2>
              <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cat.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-[#800020] font-semibold">{cat.priceFrom}</span>
                <span className="inline-flex items-center gap-1 text-[#800020] text-sm font-medium">
                  Подробнее <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-[#800020]/5 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Не нашли нужную категорию?</h3>
          <p className="text-gray-600 mb-4">Мы изготавливаем ленты под любые задачи. Расскажите о вашем проекте!</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors"
          >
            Обсудить заказ <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
