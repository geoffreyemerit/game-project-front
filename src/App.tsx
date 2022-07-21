import './App.scss';
import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Games from './pages/Games';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<Games />} />
          <Route path="/" element={<Games />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
