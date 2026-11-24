import { useState } from 'react';
import { Navbar, type PageId } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { PedestriansPage } from '@/pages/PedestriansPage';
import { CyclistsPage } from '@/pages/CyclistsPage';
import { SignsPage } from '@/pages/SignsPage';
import { TrafficLightPage } from '@/pages/TrafficLightPage';
import { QuizPage } from '@/pages/QuizPage';
import { SituationsPage } from '@/pages/SituationsPage';
import { EmergencyPage } from '@/pages/EmergencyPage';

function App() {
  const [page, setPage] = useState<PageId>('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'pedestrians':
        return <PedestriansPage onNavigate={setPage} />;
      case 'cyclists':
        return <CyclistsPage onNavigate={setPage} />;
      case 'signs':
        return <SignsPage onNavigate={setPage} />;
      case 'traffic-light':
        return <TrafficLightPage onNavigate={setPage} />;
      case 'quiz':
        return <QuizPage onNavigate={setPage} />;
      case 'situations':
        return <SituationsPage onNavigate={setPage} />;
      case 'emergency':
        return <EmergencyPage onNavigate={setPage} />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
