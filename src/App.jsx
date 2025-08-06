import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './components/about';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<About />} /> {/* Default fallback */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

