import { Link } from 'react-router-dom';
import { ArrowRight, FileText, MessageSquare, Palette, Printer, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Заявка',
    desc: 'Вы оставляете заявку на сайте или пишете нам в мессенджер. Описываете пожелания: текст, цвет, количество.',
    time: '5 минут',
  },
  {
    icon: Palette,
    title: 'Макет',
    desc: 'Мы разрабатываем макет ленты с вашим текстом и отправляем на согласование. Правки — бесплатно.',
    time: '1–2 часа',
  },
  {
    icon: MessageSquare,
    title: 'Согласование',
    desc: 'Вы утверждаете макет, выбираете материал и цвет ленты. Мы подтверждаем сроки и стоимость.',
    time: '30 минут',
  },
  {
    icon: Printer,
    title: 'Производство',
    desc: 'Печатаем текст на ленте с использованием стойких красителей. Контролируем качество каждого изделия.',
    time: '2–5 дней',
  },
  {
    icon: Truck,
    title: 'Доставка',
    desc: 'Упаковываем и передаём заказ. Самовывоз, курьер по Москве или доставка по России (СДЭК, Почта).',
    time: '1–3 дня',
  },
];

export default function HowToOrder() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Как заказать</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Простой и прозрачный процесс — от заявки до получения готовых лент</p>
        </div>

        {/* Steps */}
        <div className="max-w-3xl mx-auto mb-16">
          {steps.map((step, i) => (
            <div key={i} className="relative flex gap-6 pb-10 last:pb-0">
              {/* Line */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-[#800020]/20" />
              )}
              {/* Icon */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-[#800020] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#800020]/20">
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center text-white text-xs font-bold">
                  {i + 1}
                </div>
              </div>
              {/* Content */}
              <div className="flex-1 bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">{step.title}</h3>
                  <span className="text-xs bg-[#800020]/10 text-[#800020] px-2 py-1 rounded-full font-medium">{step.time}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="bg-[#FDF5E6] rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Сроки изготовления</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#800020] mb-1">1 день</div>
              <div className="text-sm text-gray-600">Срочный заказ<br/><span className="text-xs text-gray-400">наценка 50%</span></div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#800020] mb-1">2–5 дней</div>
              <div className="text-sm text-gray-600">Стандартный заказ<br/><span className="text-xs text-gray-400">обычная цена</span></div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#800020] mb-1">7–10 дней</div>
              <div className="text-sm text-gray-600">Крупный тираж<br/><span className="text-xs text-gray-400">от 500 шт.</span></div>
            </div>
          </div>
        </div>

        {/* What's in the order */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif text-center">Что вы получаете</h2>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              'Готовые ленты с вашим текстом',
              'Бесплатная разработка макета',
              'Контроль качества каждого изделия',
              'Аккуратная упаковка',
              'Консультация на каждом этапе',
              'Гарантия соответствия макету',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Готовы сделать заказ? Оставьте заявку прямо сейчас!</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors"
          >
            Оставить заявку <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
