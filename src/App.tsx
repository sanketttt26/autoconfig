import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { Features } from './sections/Features';
import { RoadmapPreview } from './sections/RoadmapPreview';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { RoadmapPage } from './pages/RoadmapPage';

interface HomePageProps {
  onGetStarted: () => void;
  onViewRoadmap: () => void;
}

function HomePage({ onGetStarted, onViewRoadmap }: HomePageProps) {
  return (
    <>
      <div id="home" className="scroll-mt-28">
        <Hero onGetStarted={onGetStarted} />
      </div>
      <div id="features" className="scroll-mt-28">
        <Features />
      </div>
      <div className="scroll-mt-28">
        <RoadmapPreview onViewRoadmap={onViewRoadmap} />
      </div>
      <div id="faq" className="scroll-mt-28">
        <FAQ />
      </div>
    </>
  );
}

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return (
    <div className="app-shell min-h-screen">
      <div className="page-layer">
        <Navbar />

        <main className="pt-20">
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  onGetStarted={() => navigate('/roadmap')}
                  onViewRoadmap={() => navigate('/roadmap')}
                />
              }
            />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
