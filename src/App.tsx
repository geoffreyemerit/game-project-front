import './App.scss';
import React, { useContext } from 'react';
import { HashRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import VideoGameList from './components/VideoGameList';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/address">Adresses</Link>
          <Link to="/click">Click</Link>
        </nav>
        <main>
          <Routes>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<VideoGameList />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
