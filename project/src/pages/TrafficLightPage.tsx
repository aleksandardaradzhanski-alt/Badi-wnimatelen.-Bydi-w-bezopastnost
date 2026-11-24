import { useState } from 'react';
import { CircleDot, ArrowRight, Footprints, Bike } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { Reveal } from '../components/Reveal';

interface TrafficLightPageProps {
  onNavigate: (page: PageId) => void;
}

type LightColor = 'red' | 'green';

interface LightInfo {
  title: string;
  action: string;
  desc: string;
  color: string;
  glow: string;
  icon: typeof Footprints;
}

const lightInfo: Record<LightColor, LightInfo> = {
  red: {
    title: 'Червен – СТОЙ',
    action: 'Не пресичай!',
    desc: 'Червеният сигнал означава, че трябва да спреш и да изчакаш на тротоара. Не започвай пресичане.',
    color: 'bg-danger-500',
    glow: 'shadow-[0_0_60px_15px_rgba(239,68,68,0.5)]',
    icon: Footprints,
  },
  green: {
    title: 'Зелен – ВЪРВИ',
    action: 'Можеш да пресечеш!',
    desc: 'Зеленият сигнал означава, че е безопасно да пресечеш. Но винаги първо погледни наляво и надясно!',
    color: 'bg-success-500',
    glow: 'shadow-[0_0_60px_15px_rgba(34,197,94,0.5)]',
    icon: Bike,
  },
};

export function TrafficLightPage({ onNavigate }: TrafficLightPageProps) {
  const [active, setActive] = useState<LightColor>('red');
  const info = lightInfo[active];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-danger-600 to-danger-400">
        <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <CircleDot className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Интерактивен светофар</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Натисни червено или зелено и виж какво трябва да направиш.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Traffic light */}
          <Reveal delay={0}>
            <div className="flex flex-col items-center">
              <div className="w-36 h-56 bg-gray-800 rounded-3xl flex flex-col items-center justify-around py-6 shadow-2xl border-4 border-gray-700 relative">
                {/* Red */}
                <button
                  onClick={() => setActive('red')}
                  className={`w-20 h-20 rounded-full transition-all duration-300 ${
                    active === 'red'
                      ? 'bg-danger-500 shadow-[0_0_40px_12px_rgba(239,68,68,0.6)] scale-110'
                      : 'bg-danger-900/30 hover:bg-danger-800/40'
                  }`}
                  aria-label="Червен"
                />
                {/* Green */}
                <button
                  onClick={() => setActive('green')}
                  className={`w-20 h-20 rounded-full transition-all duration-300 ${
                    active === 'green'
                      ? 'bg-success-500 shadow-[0_0_40px_12px_rgba(34,197,94,0.6)] scale-110'
                      : 'bg-success-900/20 hover:bg-success-800/30'
                  }`}
                  aria-label="Зелен"
                />
              </div>
              {/* Pole */}
              <div className="w-3 h-16 bg-gray-700" />
              <div className="w-6 h-2 bg-gray-700 rounded-full" />
            </div>
          </Reveal>

          {/* Info panel */}
          <Reveal delay={150}>
            <div className={`rounded-3xl p-8 shadow-xl transition-all duration-300 ${info.color} text-white`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <info.icon className="w-8 h-8" strokeWidth={2.5} />
                </div>
                <div>
                  <h2 className="font-display font-extrabold text-2xl">{info.title}</h2>
                  <p className="text-white/90 font-bold text-lg">{info.action}</p>
                </div>
              </div>
              <p className="text-white/95 leading-relaxed text-lg mb-6">{info.desc}</p>
              <div className="flex gap-2">
                {(['red', 'green'] as LightColor[]).map((color) => (
                  <button
                    key={color}
                    onClick={() => setActive(color)}
                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all ${
                      active === color
                        ? 'bg-white/30 backdrop-blur-sm scale-105'
                        : 'bg-white/10 hover:bg-white/20'
                    }`}
                  >
                    {color === 'red' ? 'Червен' : 'Зелен'}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 gap-4 mt-8 max-w-md mx-auto">
          {([
            { color: 'red', label: 'Червен', sub: 'СТОЙ' },
            { color: 'green', label: 'Зелен', sub: 'ВЪРВИ' },
          ] as { color: LightColor; label: string; sub: string }[]).map((item, i) => (
            <Reveal key={item.color} delay={i * 100}>
              <button
                onClick={() => setActive(item.color)}
                className={`w-full flex items-center gap-4 rounded-2xl p-5 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 ${
                  active === item.color ? `${lightInfo[item.color].color} text-white` : 'bg-white text-gray-700'
                }`}
              >
                <div className={`w-10 h-10 rounded-full ${lightInfo[item.color].color} flex-shrink-0`} />
                <div className="text-left">
                  <p className="font-display font-bold text-lg">{item.label}</p>
                  <p className="text-sm opacity-80">{item.sub}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Nav button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => { onNavigate('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Провери знанията си <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
