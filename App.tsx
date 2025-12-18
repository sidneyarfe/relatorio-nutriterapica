import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import NutriterapicaPage from './pages/NutriterapicaPage';
import LandingPage from './pages/LandingPage';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-background text-white">
      <HashRouter>
        <Routes>
          {/* A Home agora é o Portal de Relatórios com Login */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Rota específica do relatório Nutriterápica */}
          <Route path="/caso-nutriterapica" element={<NutriterapicaPage />} />
          
          {/* Fallback: redireciona para o portal */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </main>
  );
};

export default App;