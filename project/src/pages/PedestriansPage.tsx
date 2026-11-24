import { Footprints, Eye, Phone, TrafficCone, CircleDot, Check, ArrowRight } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { Reveal } from '../components/Reveal';

interface PageWrapperProps {
  onNavigate: (page: PageId) => void;
}

function PageHeader({ icon: Icon, title, subtitle, color }: { icon: typeof Footprints; title: string; subtitle: string; color: string }) {
  return (
    <div className={`pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br ${color}`}>
      <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
          <Icon className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">{title}</h1>
        <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">{subtitle}</p>
      </div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children, color, delay }: { icon: typeof Footprints; title: string; children: React.ReactNode; color: string; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100 h-full">
        <div className={`w-12 h-12 rounded-xl ${color} flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" strokeWidth={2.5} />
        </div>
        <h3 className="font-display font-bold text-xl text-gray-800 mb-3">{title}</h3>
        <div className="text-gray-600 leading-relaxed space-y-2">{children}</div>
      </div>
    </Reveal>
  );
}

function StepList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function PedestriansPage({ onNavigate }: PageWrapperProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader
        icon={Footprints}
        title="Правила за пешеходци"
        subtitle="Научи как да се движиш безопасно по улиците като пешеходец."
        color="from-brand-600 to-brand-400"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <InfoCard icon={Footprints} title="Как правилно да пресичаме" color="bg-brand-500" delay={0}>
            <StepList items={[
              'Спри на бордюра и погледни наляво и надясно.',
              'Изчакай всички превозни средства да спрат.',
              'Пресеки бързо, но без да тичаш.',
              'Винаги пресичай на пешеходна пътека или светофар.',
              'Ако няма тротоар, върви от лявата страна, срещу движението.',
            ]} />
          </InfoCard>

          <InfoCard icon={TrafficCone} title="Как да използваме пешеходна пътека" color="bg-accent-500" delay={100}>
            <p>Пешеходната пътека („зебрата") е най-безопасното място за пресичане. Ето как:</p>
            <StepList items={[
              'Погледни наляво и надясно, преди да стъпиш.',
              'Увери се, че автомобилите са спрели.',
              'Пресекай спокойно, без внезапни движения.',
              'Не се задържай по средата на пътя.',
              'Имай предимство, но винаги бъди внимателен.',
            ]} />
          </InfoCard>
        </div>

        {/* Traffic light colors */}
        <Reveal delay={200}>
          <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100 mb-6">
            <h3 className="font-display font-bold text-2xl text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
              <CircleDot className="w-7 h-7 text-brand-600" /> Какво означават цветовете на светофара
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="flex flex-col items-center text-center bg-danger-50 rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-danger-500 shadow-[0_0_30px_8px_rgba(239,68,68,0.4)] mb-4" />
                <h4 className="font-display font-bold text-lg text-danger-700">Червен – СТОЙ</h4>
                <p className="text-gray-600 text-sm mt-2">Не пресичай! Изчакай на тротоара.</p>
              </div>
              <div className="flex flex-col items-center text-center bg-success-50 rounded-2xl p-6 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-success-500 shadow-[0_0_30px_8px_rgba(34,197,94,0.4)] mb-4" />
                <h4 className="font-display font-bold text-lg text-success-700">Зелен – ВЪРВИ</h4>
                <p className="text-gray-600 text-sm mt-2">Можеш да пресечеш, но пак погледни наляво и надясно!</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Phone danger */}
        <Reveal delay={300}>
          <div className="bg-gradient-to-r from-danger-500 to-danger-600 rounded-3xl p-8 shadow-xl text-white flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-10 h-10" strokeWidth={2.5} />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="font-display font-extrabold text-2xl mb-2">Защо не трябва да използваме телефон, докато пресичаме</h3>
              <p className="text-danger-50 leading-relaxed">
                Телефонът отклонява вниманието ти от пътя. Може да не видиш приближаващ автомобил, велосипедист или препятствие.
                Никога не пишеш съобщения, не говори по телефона и не слушай музика със слушалки, докато пресичаш пътя.
                Винаги гледай наляво и надясно!
              </p>
            </div>
            <div className="flex-shrink-0">
              <Eye className="w-12 h-12 text-white/80" />
            </div>
          </div>
        </Reveal>

        {/* Nav buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={() => { onNavigate('traffic-light'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Опитай интерактивен светофар <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => { onNavigate('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2 bg-accent-400 hover:bg-accent-300 text-brand-900 font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Провери знанията си <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
