import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <nav>
        <h2>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>
        </h2>
        <div className={`burger ${isOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;