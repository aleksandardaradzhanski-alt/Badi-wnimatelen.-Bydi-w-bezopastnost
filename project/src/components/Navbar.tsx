import { useEffect, useState } from 'react';
import { Menu, X, Shield, Home, Footprints, Bike, TrafficCone, CircleDot, HelpCircle, Siren } from 'lucide-react';

export type PageId =
  | 'home'
  | 'pedestrians'
  | 'cyclists'
  | 'signs'
  | 'traffic-light'
  | 'quiz'
  | 'situations'
  | 'emergency';

interface NavItem {
  id: PageId;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Начало', icon: Home },
  { id: 'pedestrians', label: 'Пешеходци', icon: Footprints },
  { id: 'cyclists', label: 'Велосипедисти', icon: Bike },
  { id: 'signs', label: 'Пътни знаци', icon: TrafficCone },
  { id: 'traffic-light', label: 'Светофар', icon: CircleDot },
  { id: 'quiz', label: 'Куиз', icon: HelpCircle },
  { id: 'situations', label: 'Ситуации', icon: Siren },
];

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-white/80 backdrop-blur-sm py-3'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-display font-extrabold text-lg sm:text-xl text-brand-800 hidden sm:block">
              Безопасност на движението
            </span>
            <span className="font-display font-extrabold text-lg text-brand-800 sm:hidden">
              БДМ
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg font-bold text-sm transition-all duration-200 ${
                      active
                        ? 'bg-brand-600 text-white shadow-md scale-105'
                        : 'text-gray-600 hover:bg-brand-50 hover:text-brand-700 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-4 h-4" strokeWidth={2.5} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center text-brand-700 hover:bg-brand-100 transition-colors"
            aria-label="Меню"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <ul className="lg:hidden mt-3 flex flex-col gap-1 pb-3 animate-fade-in-up">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = currentPage === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigate(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-base transition-all ${
                      active
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-brand-50 hover:text-brand-700'
                    }`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={2.5} />
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
