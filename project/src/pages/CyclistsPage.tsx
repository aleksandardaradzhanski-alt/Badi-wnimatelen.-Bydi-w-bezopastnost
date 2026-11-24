import { Bike, Shield, Lightbulb, Signpost, Route, Check, ArrowRight, HardHat } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { Reveal } from '../components/Reveal';

interface CyclistsPageProps {
  onNavigate: (page: PageId) => void;
}

export function CyclistsPage({ onNavigate }: CyclistsPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-success-600 to-success-400">
        <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <Bike className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Безопасност за велосипедисти</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Каска, светлини, знаци – научи всичко необходимо за безопасно каране на велосипед.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Helmet */}
          <Reveal delay={0}>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-success-500 flex items-center justify-center">
                  <HardHat className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800">Носене на каска</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Каската предпазва главата при падане или удар. Тя може да спаси живота ти!
              </p>
              <ul className="space-y-2">
                {[
                  'Каската трябва да бъде правилно закопчана под брадичката.',
                  'Трябва да приляга плътно на главата, без да се клати.',
                  'Не купувай каска с видими повреди или пукнатини.',
                  'Светлата каска те прави по-видим за шофьорите.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-success-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Lights and reflectors */}
          <Reveal delay={100}>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-accent-500 flex items-center justify-center">
                  <Lightbulb className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800">Светлини и светлоотразители</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Когато караш велосипед в тъмното или при лоша видимост, трябва да си видим за другите.
              </p>
              <ul className="space-y-2">
                {[
                  'Отпред – бяла светлина.',
                  'Отзад – червена светлина или светлоотразител.',
                  'Светлоотразители на спиците и педалите.',
                  'Носи светлоотразителна жилетка за по-добра видимост.',
                  'Провери светлините преди всяко каране вечер.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Road signs */}
          <Reveal delay={200}>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-brand-500 flex items-center justify-center">
                  <Signpost className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800">Спазване на пътните знаци</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Велосипедистът е участник в движението и трябва да спазва всички пътни знаци и сигнали.
              </p>
              <ul className="space-y-2">
                {[
                  'Спри на червен светлофар – същите правила като автомобилите.',
                  'Спазвай знаците за предимство и забрани.',
                  'Не карай по тротоара, освен ако няма обозначена коларска пътека.',
                  'Сигнализирай с ръка при завой: лява ръка за ляво, дясна за дясно.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Safe riding */}
          <Reveal delay={300}>
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow p-6 border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-danger-500 flex items-center justify-center">
                  <Route className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="font-display font-bold text-xl text-gray-800">Безопасно движение по пътя</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-3">
                Как да се движиш безопасно сред автомобилите и другите участници в движението.
              </p>
              <ul className="space-y-2">
                {[
                  'Карай близо до десния ръб на платното.',
                  'Не карай твърде близо до паркирани автомобили – може да се отвори врата.',
                  'Бъди предвидим – не прави внезапни движения.',
                  'Винаги проверявай зад себе си преди завой или спиране.',
                  'Не карай прекалено бързо – контролирай скоростта си.',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <Check className="w-5 h-5 text-danger-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Safety checklist */}
        <Reveal delay={400}>
          <div className="bg-gradient-to-r from-success-500 to-success-600 rounded-3xl p-8 shadow-xl text-white mt-6">
            <h3 className="font-display font-extrabold text-2xl mb-6 text-center">Проверка преди тръгване</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: HardHat, label: 'Каската е сложена и закопчана' },
                { icon: Lightbulb, label: 'Светлините работят' },
                { icon: Shield, label: 'Спирачките са проверени' },
                { icon: Signpost, label: 'Знаеш ли накъде ще караш?' },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="bg-white/15 backdrop-blur-sm rounded-2xl p-4 text-center hover:bg-white/25 transition-colors">
                    <Icon className="w-8 h-8 mx-auto mb-2" strokeWidth={2.5} />
                    <p className="text-sm font-semibold">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Nav buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <button
            onClick={() => { onNavigate('signs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
          >
            Виж пътните знаци <ArrowRight className="w-5 h-5" />
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
