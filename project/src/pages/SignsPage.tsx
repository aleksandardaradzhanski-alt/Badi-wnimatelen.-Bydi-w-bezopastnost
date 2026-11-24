import { useState } from 'react';
import { AlertTriangle, Ban, CircleCheck, Info, X, ArrowRight } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { Reveal } from '../components/Reveal';
import { SignSvg } from '../components/SignSvg';
import { roadSigns, signCategories, type RoadSign } from '../data/roadSigns';

interface SignsPageProps {
  onNavigate: (page: PageId) => void;
}

const iconMap: Record<string, typeof AlertTriangle> = {
  AlertTriangle,
  Ban,
  CircleCheck,
  Info,
};

const colorMap: Record<string, { bg: string; text: string; ring: string; chip: string }> = {
  accent: { bg: 'bg-accent-50', text: 'text-accent-700', ring: 'ring-accent-200', chip: 'bg-accent-400' },
  danger: { bg: 'bg-danger-50', text: 'text-danger-700', ring: 'ring-danger-200', chip: 'bg-danger-500' },
  brand: { bg: 'bg-brand-50', text: 'text-brand-700', ring: 'ring-brand-200', chip: 'bg-brand-500' },
  success: { bg: 'bg-success-50', text: 'text-success-700', ring: 'ring-success-200', chip: 'bg-success-500' },
};

export function SignsPage({ onNavigate }: SignsPageProps) {
  const [activeCategory, setActiveCategory] = useState<RoadSign['category'] | 'all'>('all');
  const [selectedSign, setSelectedSign] = useState<RoadSign | null>(null);

  const filteredSigns = activeCategory === 'all'
    ? roadSigns
    : roadSigns.filter((s) => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-accent-500 to-accent-400">
        <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <AlertTriangle className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Пътни знаци</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Интерактивна галерия – натисни на знак, за да научиш повече за него.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        {/* Category filters */}
        <Reveal>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                activeCategory === 'all'
                  ? 'bg-gray-800 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              Всички знаци
            </button>
            {signCategories.map((cat) => {
              const Icon = iconMap[cat.icon];
              const colors = colorMap[cat.color];
              const active = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${
                    active
                      ? `${colors.chip} text-white shadow-lg scale-105`
                      : `bg-white ${colors.text} hover:${colors.bg} shadow-md`
                  }`}
                >
                  <Icon className="w-4 h-4" strokeWidth={2.5} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Signs grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredSigns.map((sign, i) => {
            const cat = signCategories.find((c) => c.key === sign.category)!;
            const colors = colorMap[cat.color];
            return (
              <Reveal key={sign.id} delay={(i % 4) * 80}>
                <button
                  onClick={() => setSelectedSign(sign)}
                  className={`group w-full ${colors.bg} rounded-2xl p-4 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 ring-1 ${colors.ring}`}
                >
                  <div className="aspect-square mb-3 transition-transform group-hover:scale-110">
                    <SignSvg type={sign.svg} />
                  </div>
                  <p className={`font-display font-bold text-sm ${colors.text} text-center leading-tight`}>
                    {sign.name}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* Nav button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => { onNavigate('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-300 text-brand-900 font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Провери знанията си в куиза <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {selectedSign && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedSign(null)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-pop-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="w-28 h-28 flex-shrink-0">
                <SignSvg type={selectedSign.svg} />
              </div>
              <button
                onClick={() => setSelectedSign(null)}
                className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <h2 className="font-display font-extrabold text-2xl text-gray-800 mb-2">{selectedSign.name}</h2>
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-4 text-white ${colorMap[signCategories.find((c) => c.key === selectedSign.category)!.color].chip}`}>
              {signCategories.find((c) => c.key === selectedSign.category)!.label}
            </span>
            <p className="text-gray-600 leading-relaxed">{selectedSign.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
