import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import SuccessStories from './components/SuccessStories';
import Teachers from './components/Teachers';
import Universities from './components/Universities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import heroBgImage from '/images/1.jpg';
import './App.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true
      });
    }

    // Removed parallax scrolling effect to prevent content movement

    // Smooth scrolling
    const setupSmoothScrolling = () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    };

    // Add loading animation
    const handleLoad = () => {
      document.body.style.opacity = '0';
      setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
      }, 100);
    };

    // Initialize after a short delay to ensure DOM is ready
    setTimeout(() => {
      setupSmoothScrolling();
      handleLoad();
    }, 100);

    return () => {
      // Cleanup removed
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero backgroundImage={heroBgImage} />
      <Features />
      <Services />
      <SuccessStories />
      <Teachers />
      <Universities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;