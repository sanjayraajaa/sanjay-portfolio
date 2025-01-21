import React, { useState } from 'react';
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
    <div>
      <nav>
        <h2>
          <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </a>
        </h2>
        <div className={`burger ${isOpen ? 'active' : ''}`} onClick={handleBurgerClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isOpen ? 'active' : ''}>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;