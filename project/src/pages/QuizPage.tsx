import { useState } from 'react';
import { HelpCircle, Check, X, RotateCcw, ArrowRight, Trophy, ThumbsUp, Dumbbell, BookOpen, Sparkles, Home } from 'lucide-react';
import type { PageId } from '../components/Navbar';
import { quizQuestions } from '../data/quizQuestions';

interface QuizPageProps {
  onNavigate: (page: PageId) => void;
}

function getResultMessage(score: number) {
  if (score >= 13) return { text: 'Отлично! Познаваш правилата много добре!', icon: Trophy, color: 'from-accent-400 to-accent-500' };
  if (score >= 10) return { text: 'Много добре! Само още малко практика!', icon: ThumbsUp, color: 'from-brand-400 to-brand-500' };
  if (score >= 7) return { text: 'Добър резултат, но можеш да се справиш още по-добре!', icon: Dumbbell, color: 'from-success-400 to-success-500' };
  return { text: 'Научи още малко за безопасността и опитай отново!', icon: BookOpen, color: 'from-danger-400 to-danger-500' };
}

export function QuizPage({ onNavigate }: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quizQuestions.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  const question = quizQuestions[currentIndex];
  const total = quizQuestions.length;
  const score = answers.reduce<number>((acc, ans, i) => {
    if (ans !== null && ans === quizQuestions[i].correctIndex) return acc + 1;
    return acc;
  }, 0);
  const progress = ((currentIndex + 1) / total) * 100;
  const isAnswered = selectedAnswer !== null;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    const newAnswers = [...answers];
    newAnswers[currentIndex] = index;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(answers[currentIndex + 1]);
    } else {
      setShowResult(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers(Array(quizQuestions.length).fill(null));
    setShowResult(false);
  };

  const percentage = Math.round((score / total) * 100);
  const result = getResultMessage(score);
  const ResultIcon = result.icon;

  // Result screen
  if (showResult) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-brand-600 to-brand-400">
          <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
              <HelpCircle className="w-8 h-8" strokeWidth={2.5} />
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Куиз – Познаваш ли правилата?</h1>
            <p className="text-lg sm:text-xl text-white/90">Виж резултата си!</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 text-center animate-bounce-in">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br ${result.color} shadow-lg mb-6`}>
              <ResultIcon className="w-12 h-12 text-white" strokeWidth={2.5} />
            </div>

            <div className="mb-6">
              <div className="font-display font-extrabold text-6xl text-gray-800 mb-2">
                {score}<span className="text-3xl text-gray-400">/{total}</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 font-bold px-4 py-2 rounded-xl">
                <Sparkles className="w-5 h-5" />
                {percentage}% успеваемост
              </div>
            </div>

            <p className="font-display font-bold text-xl text-gray-700 mb-8">{result.text}</p>

            {/* Progress bar */}
            <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-8">
              <div
                className={`h-full bg-gradient-to-r ${result.color} rounded-full transition-all duration-1000`}
                style={{ width: `${percentage}%` }}
              />
            </div>

            {/* Review */}
            <div className="text-left mb-8">
              <h3 className="font-display font-bold text-lg text-gray-700 mb-4">Преглед на отговорите:</h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {quizQuestions.map((q, i) => {
                  const correct = answers[i] === q.correctIndex;
                  return (
                    <div key={q.id} className={`flex items-start gap-3 p-3 rounded-xl ${correct ? 'bg-success-50' : 'bg-danger-50'}`}>
                      {correct ? (
                        <Check className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      ) : (
                        <X className="w-5 h-5 text-danger-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      )}
                      <div className="flex-1 text-sm">
                        <p className="font-semibold text-gray-700">{i + 1}. {q.question}</p>
                        {!correct && (
                          <p className="text-success-700 mt-1">
                            Верният отговор: {q.answers[q.correctIndex]}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white font-display font-extrabold text-lg px-8 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                Опитай отново
              </button>
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-brand-700 border-2 border-brand-200 font-display font-extrabold text-lg px-8 py-4 rounded-2xl shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <Home className="w-5 h-5" />
                Към началната страница
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-28 pb-12 px-4 sm:px-6 bg-gradient-to-br from-brand-600 to-brand-400">
        <div className="max-w-7xl mx-auto text-center text-white animate-fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4">
            <HelpCircle className="w-8 h-8" strokeWidth={2.5} />
          </div>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl mb-3">Куиз – Познаваш ли правилата?</h1>
          <p className="text-lg sm:text-xl text-white/90">15 въпроса за безопасност на движението</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="font-display font-bold text-lg text-gray-700">
              Въпрос {currentIndex + 1} от {total}
            </span>
            <span className="text-sm font-bold text-brand-600 bg-brand-50 px-3 py-1 rounded-lg">
              {question.topic}
            </span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-500 to-brand-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question card */}
        <div key={currentIndex} className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 animate-fade-in-up border border-gray-100">
          <h2 className="font-display font-bold text-xl sm:text-2xl text-gray-800 mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Answers */}
          <div className="space-y-3">
            {question.answers.map((answer, i) => {
              let stateClass = 'bg-white border-gray-200 hover:border-brand-300 hover:bg-brand-50';
              if (isAnswered) {
                if (i === question.correctIndex) {
                  stateClass = 'bg-success-50 border-success-500 ring-2 ring-success-200';
                } else if (i === selectedAnswer) {
                  stateClass = 'bg-danger-50 border-danger-500 ring-2 ring-danger-200 animate-shake';
                } else {
                  stateClass = 'bg-gray-50 border-gray-200 opacity-60';
                }
              }

              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  disabled={isAnswered}
                  className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${stateClass} ${
                    !isAnswered ? 'cursor-pointer active:scale-[0.98]' : 'cursor-default'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-sm flex-shrink-0 ${
                    isAnswered && i === question.correctIndex
                      ? 'bg-success-500 text-white'
                      : isAnswered && i === selectedAnswer
                      ? 'bg-danger-500 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {isAnswered && i === question.correctIndex ? (
                      <Check className="w-5 h-5" strokeWidth={2.5} />
                    ) : isAnswered && i === selectedAnswer ? (
                      <X className="w-5 h-5" strokeWidth={2.5} />
                    ) : (
                      String.fromCharCode(65 + i)
                    )}
                  </span>
                  <span className="font-semibold text-gray-700 flex-1">{answer}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation */}
          {isAnswered && (
            <div className={`mt-6 p-4 rounded-2xl animate-fade-in-up ${
              selectedAnswer === question.correctIndex ? 'bg-success-50' : 'bg-danger-50'
            }`}>
              <div className="flex items-start gap-3">
                {selectedAnswer === question.correctIndex ? (
                  <Check className="w-6 h-6 text-success-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                ) : (
                  <X className="w-6 h-6 text-danger-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                )}
                <div>
                  <p className={`font-display font-bold mb-1 ${
                    selectedAnswer === question.correctIndex ? 'text-success-700' : 'text-danger-700'
                  }`}>
                    {selectedAnswer === question.correctIndex ? 'Правилно!' : 'Грешен отговор!'}
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">{question.explanation}</p>
                </div>
              </div>
            </div>
          )}

          {/* Next button */}
          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`w-full mt-6 flex items-center justify-center gap-2 font-display font-extrabold text-lg px-6 py-4 rounded-2xl transition-all ${
              isAnswered
                ? 'bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:scale-[1.02] active:scale-[0.98]'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentIndex === total - 1 ? 'Виж резултата' : 'Следващ въпрос'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Score so far */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Досега: <span className="font-bold text-success-600">{score}</span> верни от {currentIndex + (isAnswered ? 1 : 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
