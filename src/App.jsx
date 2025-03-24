import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-slate-900">
          <div className="relative">
            {/* Background decorations */}
            <div className="fixed inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 [mask-image:linear-gradient(0deg,transparent,black)]" style={{ backgroundSize: '32px 32px' }}></div>
            <div className="fixed inset-0 bg-dot-pattern opacity-50"></div>
            <div className="fixed inset-0 noise opacity-20"></div>
            {/* Content */}
            <div className="relative">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
