import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Trainer from './pages/Trainer';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <div className="fixed bottom-0 w-full bg-gray-900 text-white text-center py-2 text-sm z-40">
        Powered By <a href="https://www.botivate.in" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">Botivate</a>
      </div>
    </div>
  );
}

export default App;