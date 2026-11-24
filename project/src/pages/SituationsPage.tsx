import { useState } from 'react';
import {
  Siren, Footprints, Bike, Car, Crosshair, CircleAlert, Bus,
  Check, X, ArrowRight, RotateCcw, Lightbulb
} from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { Reveal } from '../components/Reveal';
import { situations } from '../data/situations';

interface SituationsPageProps {
  onNavigate: (page: PageId) => void;
}

const iconMap: Record<string, typeof Siren> = {
  Footprints,
  Bike,
  Car,
  Crosshair,
  CircleAlert,
  Bus,
};

export function SituationsPage({ onNavigate }: SituationsPageProps) {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [completed, setCompleted] = useState<number[]>([]);

  const activeSituation = situations.find((s) => s.id === activeId);

  const handleStart = (id: number) => {
    setActiveId(id);
    setSelectedOption(null);
  };

  const handleSelect = (index: number) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (activeSituation && selectedOption === activeSituation.correctIndex) {
      if (!completed.includes(activeSituation.id)) {
        setCompleted([...completed, activeSituation.id]);
      }
    }
    const nextSituation = situations.find((s) => s.id === activeId! + 1);
    if (nextSituation) {
      handleStart(nextSituation.id);
    } else {
      setActiveId(null);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setActiveId(null);
    setSelectedOption(null);
    setCompleted([]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-danger-600 to-danger-400">
        <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <Siren className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Сигнали и ситуации</h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Разгледай реални ситуации на пътя и избери най-правилното решение.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {situations.map((s) => (
            <div
              key={s.id}
              className={`h-2 rounded-full transition-all ${
                completed.includes(s.id)
                  ? 'bg-success-500 w-8'
                  : activeId === s.id
                  ? 'bg-brand-500 w-8'
                  : 'bg-gray-300 w-4'
              }`}
            />
          ))}
        </div>

        {/* Active situation */}
        {activeSituation ? (
          <div key={activeSituation.id} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 animate-fade-in-up border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-danger-50 flex items-center justify-center flex-shrink-0">
                {(() => {
                  const Icon = iconMap[activeSituation.icon] || CircleAlert;
                  return <Icon className="w-7 h-7 text-danger-600" strokeWidth={2.5} />;
                })()}
              </div>
              <h2 className="font-display font-bold text-xl text-gray-800">{activeSituation.title}</h2>
            </div>

            <div className="bg-brand-50 rounded-2xl p-5 mb-6 border-l-4 border-brand-400">
              <p className="text-gray-700 leading-relaxed">{activeSituation.scenario}</p>
            </div>

            <p className="font-display font-bold text-gray-700 mb-3">Какво трябва да направиш?</p>

            <div className="space-y-3">
              {activeSituation.options.map((option, i) => {
                let stateClass = 'bg-white border-gray-200 hover:border-brand-300 hover:bg-brand-50';
                if (selectedOption !== null) {
                  if (i === activeSituation.correctIndex) {
                    stateClass = 'bg-success-50 border-success-500 ring-2 ring-success-200';
                  } else if (i === selectedOption) {
                    stateClass = 'bg-danger-50 border-danger-500 ring-2 ring-danger-200 animate-shake';
                  } else {
                    stateClass = 'bg-gray-50 border-gray-200 opacity-60';
                  }
                }

                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(i)}
                    disabled={selectedOption !== null}
                    className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${stateClass}`}
                  >
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 ${
                      selectedOption !== null && i === activeSituation.correctIndex
                        ? 'bg-success-500 text-white'
                        : selectedOption !== null && i === selectedOption
                        ? 'bg-danger-500 text-white'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {selectedOption !== null && i === activeSituation.correctIndex ? (
                        <Check className="w-5 h-5" strokeWidth={2.5} />
                      ) : selectedOption !== null && i === selectedOption ? (
                        <X className="w-5 h-5" strokeWidth={2.5} />
                      ) : (
                        String.fromCharCode(65 + i)
                      )}
                    </span>
                    <span className="font-semibold text-gray-700 flex-1">{option}</span>
                  </button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <div className={`mt-6 p-5 rounded-2xl animate-fade-in-up ${
                selectedOption === activeSituation.correctIndex ? 'bg-success-50' : 'bg-danger-50'
              }`}>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-accent-500 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                  <div>
                    <p className={`font-display font-bold mb-1 ${
                      selectedOption === activeSituation.correctIndex ? 'text-success-700' : 'text-danger-700'
                    }`}>
                      {selectedOption === activeSituation.correctIndex ? 'Правилно решение!' : 'Не е правилният отговор!'}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">{activeSituation.explanation}</p>
                  </div>
                </div>
                <button
                  onClick={handleNext}
                  className="w-full mt-4 flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-[1.02]"
                >
                  {situations.find((s) => s.id === activeSituation.id + 1) ? 'Следваща ситуация' : 'Завърши'}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : completed.length === situations.length ? (
          /* All done */
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce-in">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-success-400 to-success-600 shadow-lg mb-6">
              <Check className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-gray-800 mb-3">
              Браво! Премина през всички ситуации!
            </h2>
            <p className="text-gray-600 mb-8">
              Реши {completed.length} от {situations.length} ситуации правилно. Продължавай да практикуваш!
            </p>
            <button
              onClick={handleRestart}
              className="inline-flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105"
            >
              <RotateCcw className="w-5 h-5" />
              Започни отначало
            </button>
          </div>
        ) : (
          /* Situation list */
          <div className="space-y-4">
            {situations.map((sit, i) => {
              const Icon = iconMap[sit.icon] || CircleAlert;
              const isDone = completed.includes(sit.id);
              return (
                <Reveal key={sit.id} delay={i * 80}>
                  <button
                    onClick={() => handleStart(sit.id)}
                    className="group w-full text-left bg-white rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 p-5 border border-gray-100 flex items-center gap-4"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                      isDone ? 'bg-success-100' : 'bg-danger-50 group-hover:bg-danger-100'
                    }`}>
                      {isDone ? (
                        <Check className="w-7 h-7 text-success-600" strokeWidth={2.5} />
                      ) : (
                        <Icon className="w-7 h-7 text-danger-600" strokeWidth={2.5} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-gray-800">{sit.title}</h3>
                      <p className="text-gray-500 text-sm line-clamp-2">{sit.scenario}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-brand-600 group-hover:translate-x-1 transition-all" />
                  </button>
                </Reveal>
              );
            })}
          </div>
        )}

        {/* Nav button */}
        {activeId === null && completed.length < situations.length && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => { onNavigate('quiz'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-bold px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105"
            >
              Опитай куиза <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
