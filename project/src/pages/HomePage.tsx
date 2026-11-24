import { Play, HelpCircle, Footprints, Bike, TrafficCone, CircleDot, Siren, ArrowRight, ShieldCheck } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { StreetScene } from '../components/StreetScene';
import { Reveal } from '../components/Reveal';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

const cards: { id: PageId; title: string; desc: string; icon: typeof Footprints; color: string; bg: string }[] = [
  { id: 'pedestrians', title: 'Правила за пешеходци', desc: 'Научи как да пресичаш безопасно и какво означават светлините на светофара.', icon: Footprints, color: 'text-brand-600', bg: 'from-brand-50 to-brand-100' },
  { id: 'cyclists', title: 'Безопасност за велосипедисти', desc: 'Каска, светлини, знаци – всичко, което трябва да знаеш за безопасно каране.', icon: Bike, color: 'text-success-600', bg: 'from-success-50 to-success-100' },
  { id: 'signs', title: 'Пътни знаци', desc: 'Интерактивна галерия с предупредителни, забранителни и други знаци.', icon: TrafficCone, color: 'text-accent-600', bg: 'from-accent-50 to-accent-100' },
  { id: 'traffic-light', title: 'Интерактивен светофар', desc: 'Натисни цветовете и виж какво трябва да правиш на всеки сигнал.', icon: CircleDot, color: 'text-danger-600', bg: 'from-danger-50 to-danger-100' },
  { id: 'quiz', title: 'Куиз – Познаваш ли правилата?', desc: '15 въпроса за безопасност на движението. Провери знанията си!', icon: HelpCircle, color: 'text-brand-700', bg: 'from-brand-50 to-accent-50' },
  { id: 'situations', title: 'Сигнали и ситуации', desc: 'Реални ситуации на пътя – избери правилното решение.', icon: Siren, color: 'text-danger-600', bg: 'from-danger-50 to-accent-50' },
];

export function HomePage({ onNavigate }: HomePageProps) {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 via-brand-500 to-brand-400" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="w-5 h-5 text-accent-300" strokeWidth={2.5} />
              <span className="font-bold text-sm">Образователен сайт за деца и ученици</span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 text-balance">
              Бъди внимателен.<br />
              <span className="text-accent-300">Бъди в безопасност.</span>
            </h1>
            <p className="text-lg sm:text-xl text-brand-50 mb-8 max-w-lg leading-relaxed">
              Научи правилата и помогни да направим пътищата по-безопасни.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNav('pedestrians')}
                className="group flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-300 text-brand-900 font-display font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <Play className="w-5 h-5 fill-brand-900" />
                Започни обучението
              </button>
              <button
                onClick={() => handleNav('quiz')}
                className="group flex items-center justify-center gap-2 bg-white/15 backdrop-blur-sm hover:bg-white/25 border-2 border-white/40 text-white font-display font-extrabold text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 active:scale-95"
              >
                <HelpCircle className="w-5 h-5" />
                Провери знанията си
              </button>
            </div>
          </div>

          {/* Street Scene */}
          <div className="h-80 sm:h-96 lg:h-[28rem] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <StreetScene />
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: '6', label: 'Теми за учене', color: 'text-brand-600' },
            { num: '15', label: 'Куиз въпроса', color: 'text-accent-600' },
            { num: '16+', label: 'Пътни знаци', color: 'text-success-600' },
            { num: '6', label: 'Реални ситуации', color: 'text-danger-600' },
          ].map((stat, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`font-display font-extrabold text-3xl sm:text-4xl ${stat.color}`}>{stat.num}</div>
                <div className="text-gray-600 font-semibold text-sm mt-1">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Topic Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <Reveal>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-center text-gray-800 mb-4">
            Избери тема и започни да учиш
          </h2>
          <p className="text-center text-gray-500 text-lg mb-12 max-w-2xl mx-auto">
            Всяка тема е пълна с полезни съвети, илюстрации и интерактивни елементи.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.id} delay={i * 100}>
                <button
                  onClick={() => handleNav(card.id)}
                  className={`group w-full text-left bg-gradient-to-br ${card.bg} rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/50`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-gray-800 mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                </button>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Emergency banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <Reveal>
          <button
            onClick={() => handleNav('emergency')}
            className="group w-full bg-gradient-to-r from-danger-600 to-danger-500 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Siren className="w-8 h-8 text-white" strokeWidth={2.5} />
              </div>
              <div className="text-left">
                <h3 className="font-display font-extrabold text-2xl text-white">Спешен номер: 112</h3>
                <p className="text-danger-50 text-sm">Единен европейски номер за спешни случаи. Научи кога да го използваш.</p>
              </div>
            </div>
            <span className="flex items-center gap-2 bg-white text-danger-600 font-display font-bold px-6 py-3 rounded-xl group-hover:scale-105 transition-transform">
              Научи повече <ArrowRight className="w-5 h-5" />
            </span>
          </button>
        </Reveal>
      </section>
    </div>
  );
}
