import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Анна Михайлова',
    role: 'Родительский комитет, школа №45',
    text: 'Заказывали 35 лент на выпускной. Всё сделали быстро, качественно, текст ровный. Дети и родители в восторге! Отдельное спасибо за помощь с выбором цвета — получилось очень стильно.',
    rating: 5,
    category: 'Выпускные',
  },
  {
    name: 'Ольга Красикова',
    role: 'Владелица кофейни "Утро"',
    text: 'Брендированные ленты для нашей кофейни — это находка! Заказываем регулярно, каждый месяц. Качество стабильно высокое, сроки всегда соблюдаются. Рекомендую!',
    rating: 5,
    category: 'Брендированные',
  },
  {
    name: 'Дмитрий Волков',
    role: 'Частный заказ',
    text: 'Свадебные ленты превзошли все ожидания! Золотое тиснение смотрится невероятно. Катя помогла с выбором шрифта и размера — получилось именно так, как мы мечтали.',
    rating: 5,
    category: 'Свадебные',
  },
  {
    name: 'Марина Соколова',
    role: 'Event-агентство "Праздник"',
    text: 'Сотрудничаем уже полгода. Заказываем ленты для разных мероприятий — от корпоративов до свадеб. Всегда чёткие сроки, адекватные цены и отличный результат.',
    rating: 5,
    category: 'Брендированные',
  },
  {
    name: 'Елена Петрова',
    role: 'Цветочная студия "Флора"',
    text: 'Заказываю ленты с нашим логотипом для букетов. Клиенты отмечают, что упаковка стала выглядеть намного дороже. Спасибо за оперативность — часто нужно срочно!',
    rating: 5,
    category: 'Брендированные',
  },
  {
    name: 'Ирина Козлова',
    role: 'Частный заказ',
    text: 'Заказывали ритуальные ленты для памятника. Всё сделано очень деликатно и с уважением. Спасибо за чуткость и понимание в непростой ситуации.',
    rating: 5,
    category: 'Ритуальные',
  },
  {
    name: 'Сергей Новиков',
    role: 'Спортивный клуб "Чемпион"',
    text: 'Заказывали ленты для награждения на турнире. 100 штук за 3 дня — успели к сроку! Качество отличное, текст чёткий. Будем заказывать ещё.',
    rating: 5,
    category: 'Индивидуальные',
  },
  {
    name: 'Наталья Белова',
    role: 'Кондитерская "Сладкий дом"',
    text: 'Ленты для коробок с тортами — просто супер! Клиенты фотографируют и выкладывают в соцсети. Нам это отличная бесплатная реклама. Спасибо!',
    rating: 5,
    category: 'Брендированные',
  },
];

export default function Reviews() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Отзывы</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Что говорят наши клиенты о работе с нами</p>
        </div>

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="flex items-center gap-1 mb-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <p className="text-sm text-gray-600">Средняя оценка 4.9/5</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-[#800020]">150+</div>
            <p className="text-sm text-gray-600">Довольных клиентов</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <span className="text-xs bg-[#800020]/10 text-[#800020] px-2 py-1 rounded-full">{review.category}</span>
              </div>
              <div className="relative mb-4">
                <Quote className="absolute -top-1 -left-1 w-6 h-6 text-[#800020]/10" />
                <p className="text-gray-600 text-sm leading-relaxed pl-4">{review.text}</p>
              </div>
              <div className="border-t pt-3">
                <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
                <p className="text-gray-500 text-xs">{review.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-[#FDF5E6] rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Хотите так же?</h3>
          <p className="text-gray-600 mb-4">Оставьте заявку и получите ленты, которыми будете гордиться</p>
          <a
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </div>
  );
}
