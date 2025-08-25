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

    // Parallax scrolling effect
    const handleParallax = () => {
      const scrolled = window.pageYOffset;
      const heroSection = document.querySelector('.hero-section');
      const heroImage = document.querySelector('.hero-image');
      
      if (heroSection) {
        const parallaxSpeed = 0.5;
        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.05)`;
      }
      
      if (heroImage) {
        const imageSpeed = 0.3;
        heroImage.style.transform = `translateY(${scrolled * imageSpeed}px) scale(1.05)`;
      }
    };

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
      window.addEventListener('scroll', handleParallax);
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
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