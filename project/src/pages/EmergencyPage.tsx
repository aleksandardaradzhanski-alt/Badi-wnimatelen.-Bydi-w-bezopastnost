import { Phone, Ambulance, Flame, ShieldCheck, ArrowRight, Lightbulb, MapPin, Clock } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { Reveal } from '../components/Reveal';

interface EmergencyPageProps {
  onNavigate: (page: PageId) => void;
}

export function EmergencyPage({ onNavigate }: EmergencyPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-danger-600 to-danger-500">
        <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <Phone className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Спешни номера</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Запомни тези номера – те могат да спасят живот!
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Big 112 banner */}
        <Reveal delay={0}>
          <div className="bg-gradient-to-r from-danger-600 to-danger-500 rounded-3xl p-8 sm:p-12 shadow-2xl text-white text-center mb-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-accent-300 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4 animate-pulse-ring">
                <Phone className="w-10 h-10" strokeWidth={2.5} />
              </div>
              <div className="font-display font-extrabold text-7xl sm:text-8xl mb-3 tracking-wider">
                112
              </div>
              <h2 className="font-display font-bold text-2xl mb-3">Единен европейски номер за спешни случаи</h2>
              <p className="text-danger-50 text-lg max-w-xl mx-auto leading-relaxed">
                Звъни на 112 при всяка спешна ситуация – линейка, пожарна или полиция.
                Номерът е безплатен и работи от всеки телефон.
              </p>
            </div>
          </div>
        </Reveal>

        {/* When to call */}
        <Reveal delay={100}>
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent-400 flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="font-display font-bold text-2xl text-gray-800">Кога трябва да се използва 112?</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-danger-100 flex items-center justify-center mx-auto mb-3">
                  <Ambulance className="w-8 h-8 text-danger-600" strokeWidth={2.5} />
                </div>
                <h4 className="font-display font-bold text-lg text-gray-800 mb-2">Линейка</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При злополука, нараняване, внезапна болест или животозастрашаващо състояние.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent-100 flex items-center justify-center mx-auto mb-3">
                  <Flame className="w-8 h-8 text-accent-600" strokeWidth={2.5} />
                </div>
                <h4 className="font-display font-bold text-lg text-gray-800 mb-2">Пожарна</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При пожар, задушаване с дим или друга опасност, изискваща пожарна намеса.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-8 h-8 text-brand-600" strokeWidth={2.5} />
                </div>
                <h4 className="font-display font-bold text-lg text-gray-800 mb-2">Полиция</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  При престъпление, пътнотранспортно произшествие или опасна ситуация, изискваща помощ.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* How to call */}
        <Reveal delay={200}>
          <div className="bg-brand-50 rounded-3xl p-8 border border-brand-100 mb-8">
            <h3 className="font-display font-bold text-2xl text-gray-800 mb-6 text-center">Какво да кажеш, когато звъниш?</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: 'Къде се намираш', desc: 'Кажи точния адрес или местоположение на спешното събитие.' },
                { icon: Lightbulb, title: 'Какво е станало', desc: 'Опиши накратко каква е ситуацията – пожар, злополука и т.н.' },
                { icon: Ambulance, title: 'Колко пострадали', desc: 'Кажи колко души имат нужда от помощ и какви са нараняванията.' },
                { icon: Clock, title: 'Изчакай указания', desc: 'Не затваряй телефона, докато операторът не ти каже. Следвай инструкциите.' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm">
                    <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-white" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-gray-800">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Important reminder */}
        <Reveal delay={300}>
          <div className="bg-danger-50 border-2 border-danger-200 rounded-3xl p-6 mb-8 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-danger-500 flex items-center justify-center flex-shrink-0">
              <Phone className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-danger-800">Важно!</h3>
              <p className="text-danger-700 text-sm">
                Звъни на 112 САМО при истинска спешна ситуация. Фалшиви обаждания пречат на спасителите и са нарушение.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Nav button */}
        <div className="flex justify-center">
          <button
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Към началната страница <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
