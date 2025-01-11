import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import CoinPage from './components/pages/CoinPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <Routes>
          <Route path="/:coinId" element={<CoinPage />} />
          <Route path="/" element={<CoinPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
