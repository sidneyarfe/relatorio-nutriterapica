import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import NutriterapicaPage from './pages/NutriterapicaPage';
import JCMoreiraPage from './pages/JCMoreiraPage';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-background text-white">
      <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/caso-nutriterapica" element={<NutriterapicaPage />} />
          <Route path="/caso-jcmoreira" element={<JCMoreiraPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;