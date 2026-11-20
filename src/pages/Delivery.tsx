import { Link } from 'react-router-dom';
import { ArrowRight, Truck, MapPin, CreditCard, Building2, Shield } from 'lucide-react';

export default function Delivery() {
  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-serif">Доставка и оплата</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Удобные способы получения заказа и оплаты для физических и юридических лиц</p>
        </div>

        {/* Delivery Methods */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-[#800020]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Самовывоз</h3>
            <p className="text-gray-600 text-sm mb-3">Бесплатно. Москва (точное адрес сообщим при оформлении заказа).</p>
            <p className="text-sm text-gray-500">Удобно, если вы находитесь в Москве. Предварительно согласуем время.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-[#800020]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Курьер по Москве</h3>
            <p className="text-gray-600 text-sm mb-3">От 350 ₽. Доставка в день заказа или на следующий день.</p>
            <p className="text-sm text-gray-500">Доставка в пределах МКАД. За МКАД — по договорённости.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-[#800020]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">СДЭК</h3>
            <p className="text-gray-600 text-sm mb-3">По всей России. Срок 2–7 дней в зависимости от региона.</p>
            <p className="text-sm text-gray-500">Доставка до пункта выдачи или до двери. Стоимость рассчитывается при оформлении.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="w-12 h-12 bg-[#800020]/10 rounded-full flex items-center justify-center mb-4">
              <Truck className="w-6 h-6 text-[#800020]" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Почта России</h3>
            <p className="text-gray-600 text-sm mb-3">По всей России. Срок 5–14 дней.</p>
            <p className="text-sm text-gray-500">Бюджетный вариант для небольших заказов. Отправка после оплаты.</p>
          </div>
        </div>

        {/* Payment */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif flex items-center gap-3">
            <CreditCard className="w-7 h-7 text-[#800020]" />
            Способы оплаты
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Для физических лиц</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  Перевод на карту (Сбербанк, Тинькофф)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  Перевод по номеру телефона (СБП)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  Наличные при самовывозе
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Для юридических лиц</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  Перевод на расчётный счёт
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  Чек НПД (самозанятый) — для юрлиц и ИП
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  Договор для постоянных клиентов
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Conditions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-[#FDF5E6] rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Building2 className="w-6 h-6 text-[#800020] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Условия для юрлиц</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Работаем как самозанятый — выдаём чеки НПД. Возможна работа по договору для постоянных клиентов. Все документы предоставляем.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#FDF5E6] rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-[#800020] flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Гарантии</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Если лента не соответствует согласованному макету — переделаем бесплатно. Предоплата 50% для новых клиентов, для постоянных — постоплата.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">Остались вопросы по доставке или оплате? Свяжитесь с нами!</p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors"
          >
            Связаться <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
