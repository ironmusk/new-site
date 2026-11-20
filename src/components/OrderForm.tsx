import { useState, FormEvent } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface OrderFormProps {
  selectedCategory?: string;
  compact?: boolean;
}

const categories = [
  'Выпускные ленты',
  'Свадебные ленты',
  'Ритуальные ленты',
  'Брендированные ленты',
  'Индивидуальный заказ',
];

const contactMethods = ['Telegram', 'WhatsApp', 'MAX', 'Звонок'];

export default function OrderForm({ selectedCategory = '', compact = false }: OrderFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    contactMethod: 'Telegram',
    category: selectedCategory,
    quantity: '',
    comment: '',
    file: null as File | null,
    agree: false,
    honeypot: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, '');
    return cleaned.length === 11 && (cleaned.startsWith('7') || cleaned.startsWith('8'));
  };

  const formatPhone = (value: string) => {
    const cleaned = value.replace(/\D/g, '');
    let formatted = '+7';
    if (cleaned.length > 1) formatted += ' (' + cleaned.slice(1, 4);
    if (cleaned.length > 4) formatted += ') ' + cleaned.slice(4, 7);
    if (cleaned.length > 7) formatted += '-' + cleaned.slice(7, 9);
    if (cleaned.length > 9) formatted += '-' + cleaned.slice(9, 11);
    return formatted;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    // Honeypot check
    if (formData.honeypot) return;

    if (!formData.name.trim()) newErrors.name = 'Введите имя';
    if (!validatePhone(formData.phone)) newErrors.phone = 'Введите корректный номер телефона';
    if (!formData.category) newErrors.category = 'Выберите тип ленты';
    if (!formData.agree) newErrors.agree = 'Необходимо согласие на обработку данных';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Simulate form submission
    setSubmitted(true);
    // In production: send to Telegram bot API and email
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#800020] mb-2">Заявка отправлена!</h3>
        <p className="text-gray-600">Мы свяжемся с вами в течение 2 часов.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${compact ? '' : 'max-w-lg mx-auto'}`}>
      {/* Honeypot - invisible to users */}
      <input
        type="text"
        name="website"
        value={formData.honeypot}
        onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        className="absolute opacity-0 -z-10 h-0 w-0"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ваше имя *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#800020]/30 focus:border-[#800020] outline-none transition ${errors.name ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="Ваше имя"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Телефон *</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: formatPhone(e.target.value) })}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#800020]/30 focus:border-[#800020] outline-none transition ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
            placeholder="+7 (___) ___-__-__"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Contact method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Способ связи</label>
          <select
            value={formData.contactMethod}
            onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020]/30 focus:border-[#800020] outline-none transition bg-white"
          >
            {contactMethods.map((m) => (
              <option key={m} value={m}>{m}</option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Тип ленты *</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-[#800020]/30 focus:border-[#800020] outline-none transition bg-white ${errors.category ? 'border-red-400' : 'border-gray-300'}`}
          >
            <option value="">Выберите тип</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
        </div>
      </div>

      {/* Quantity */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Тираж (шт.)</label>
        <input
          type="number"
          min="1"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020]/30 focus:border-[#800020] outline-none transition"
          placeholder="Количество лент"
        />
      </div>

      {/* Comment */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Комментарий</label>
        <textarea
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#800020]/30 focus:border-[#800020] outline-none transition resize-none"
          rows={3}
          placeholder="Опишите ваш заказ: текст на ленте, цвет, ширина..."
        />
      </div>

      {/* File upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Макет (jpg, png, pdf, до 10 МБ)</label>
        <div className="relative">
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-[#800020]/10 file:text-[#800020] hover:file:bg-[#800020]/20"
          />
        </div>
      </div>

      {/* Agreement */}
      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          id="agree"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="mt-1 w-4 h-4 text-[#800020] border-gray-300 rounded focus:ring-[#800020]"
        />
        <label htmlFor="agree" className="text-sm text-gray-600">
          Я согласен(а) на <a href="/privacy" className="text-[#800020] underline">обработку персональных данных</a> в соответствии с 152-ФЗ *
        </label>
      </div>
      {errors.agree && <p className="text-red-500 text-xs">{errors.agree}</p>}

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#800020] text-white font-semibold rounded-full hover:bg-[#600018] transition-colors shadow-lg shadow-[#800020]/20"
      >
        <Send className="w-4 h-4" />
        Отправить заявку
      </button>
    </form>
  );
}
