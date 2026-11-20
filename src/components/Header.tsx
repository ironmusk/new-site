import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Ribbon } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/catalog', label: 'Каталог' },
  { to: '/prices', label: 'Цены' },
  { to: '/portfolio', label: 'Портфолио' },
  { to: '/how-to-order', label: 'Как заказать' },
  { to: '/delivery', label: 'Доставка' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/contacts', label: 'Контакты' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#800020] rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
              <Ribbon className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <span className="text-xl font-bold text-[#800020] font-serif">КатЮля</span>
              <span className="hidden sm:block text-xs text-gray-500 -mt-1">Студия лент</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#800020] bg-[#800020]/5'
                    : 'text-gray-700 hover:text-[#800020] hover:bg-[#800020]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/contacts"
              className="hidden sm:inline-flex px-4 py-2 bg-[#800020] text-white text-sm font-medium rounded-full hover:bg-[#600018] transition-colors"
            >
              Оставить заявку
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-[#800020]"
              aria-label="Меню"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <nav className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  location.pathname === link.to
                    ? 'text-[#800020] bg-[#800020]/5'
                    : 'text-gray-700 hover:text-[#800020] hover:bg-[#800020]/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacts"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 px-4 py-3 bg-[#800020] text-white font-medium rounded-full"
            >
              Оставить заявку
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
