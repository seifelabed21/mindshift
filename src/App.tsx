import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import MentalGym from './pages/MentalGym';
import MindfulGames from './pages/MindfulGames';
import AnonymousForum from './pages/AnonymousForum';
import ConsultationPage from './pages/ConsultationPage';
import SuggestionsPage from './pages/SuggestionsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignPage';


function App() {
  return (
    <Router>
      <div className="min-h-screen bg-sage-50">
        <Sidebar />
        <Navbar />
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/assessment" element={<Assessment />} />
            <Route path="/gym" element={<MentalGym />} />
            <Route path="/forum" element={<AnonymousForum />} />
            <Route path="/games" element={<MindfulGames />} />
            <Route path="/consultation" element={<ConsultationPage />} />
            <Route path="/suggestions" element={<SuggestionsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
