import { Phone, Send, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a
        href="tel:+79991234567"
        className="w-12 h-12 bg-[#800020] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#600018] transition-all hover:scale-110"
        title="Позвонить"
      >
        <Phone className="w-5 h-5" />
      </a>
      <a
        href="https://t.me/katyulya"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#229ED9] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1a8bc0] transition-all hover:scale-110"
        title="Telegram"
      >
        <Send className="w-5 h-5" />
      </a>
      <a
        href="https://wa.me/79991234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1fb855] transition-all hover:scale-110"
        title="WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </a>
    </div>
  );
}
