import { Shield, Phone, Heart } from 'lucide-react';
import type { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-900 text-brand-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-display font-extrabold text-xl text-white">Безопасност на движението</span>
            </div>
            <p className="text-brand-200 text-sm leading-relaxed">
              Образователен сайт за деца и ученици. Научи правилата и помогни да направим пътищата по-безопасни за всички.
            </p>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Страници</h3>
            <ul className="space-y-2 text-sm">
              {[
                { id: 'pedestrians' as PageId, label: 'Правила за пешеходци' },
                { id: 'cyclists' as PageId, label: 'Безопасност за велосипедисти' },
                { id: 'signs' as PageId, label: 'Пътни знаци' },
                { id: 'traffic-light' as PageId, label: 'Интерактивен светофар' },
                { id: 'quiz' as PageId, label: 'Куиз – Познаваш ли правилата?' },
                { id: 'situations' as PageId, label: 'Сигнали и ситуации' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-brand-200 hover:text-accent-300 hover:underline transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display font-bold text-lg text-white mb-4">Спешен номер</h3>
            <button
              onClick={() => handleNav('emergency')}
              className="flex items-center gap-3 bg-danger-600 hover:bg-danger-500 text-white px-5 py-3 rounded-xl font-display font-extrabold text-lg shadow-lg transition-all hover:scale-105"
            >
              <Phone className="w-6 h-6" strokeWidth={2.5} />
              112
            </button>
            <p className="text-brand-200 text-sm mt-3">
              Единен европейски номер за спешни случаи – линейка, пожарна, полиция.
            </p>
          </div>
        </div>

        <div className="border-t border-brand-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-300 text-sm text-center sm:text-left">
            Образователен проект за безопасност на движението. Всички права запазени.
          </p>
          <div className="flex items-center gap-1.5 text-brand-300 text-sm">
            Направено с <Heart className="w-4 h-4 text-danger-400 fill-danger-400" /> за безопасност на децата
          </div>
        </div>
      </div>
    </footer>
  );
}
