import React, { useState, useEffect } from 'react';
import './App.css'; // or rename to Home.css if you prefer
import Header from './Header';
import Footer from './Footer';

// Sample icons (replace with your own or use a real icon library)
import hero1 from './assets/constructor.jpeg';
import hero2 from './assets/delivery.jpeg';
import hero3 from './assets/farmer.jpeg';
import hero4 from './assets/nurse.jpg';

// Import your placeholder image for the How To section
import comingSoon from './assets/coming_soon.jpeg';

// Your existing HeroSection, Features, HowToSection, Footer
// remain unchanged except for removing "export default App" at the end.
// Just place them below...
// (Pasting the entire code from your prior "App.js" for completeness.)

function HeroSection() {
  const heroImages = [hero1, hero2, hero3, hero4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>Secure Heat Risk Solutions <br /> for a Healthier Future</h1>
          <p>
            iHEATRISK provides personalized heat risk assessments, empowering you to stay safe 
            during extreme weather. Discover how our advanced modeling and expert recommendations 
            can protect your well-being.
          </p>
          <button>Get Started</button>
        </div>
        <div className="hero-image">
          <img src={heroImages[currentIndex]} alt="Hero Illustration" />
        </div>
      </div>
    </section>
  );
}

function Features() {
  const featuresData = [
    {
      title: 'Personalized Assessment',
      description: 'Tailor-made evaluations based on your health, demographic, and environmental data.',
      color: '#FFD460'
    },
    {
      title: 'Physician Integrated Care',
      description: 'Healthcare providers can input patient-specific data for targeted recommendations.',
      color: '#FFB6B9'
    },
    {
      title: 'Advanced Bayesian Modeling',
      description: 'Robust statistical models for precise and dynamic heat risk predictions.',
      color: '#A0E7E5'
    },
    {
      title: 'Actionable Recommendations',
      description: 'Receive personalized guidance to mitigate your heat-related health risks.',
      color: '#B5EAD7'
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="container features-container">
        <h2>Key Features</h2>
        <div className="features-grid">
          {featuresData.map((item, idx) => (
            <div
              className="feature-card"
              key={idx}
              style={{ backgroundColor: item.color }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowToSection() {
  const steps = [
    { image: comingSoon, text: 'Coming Soon' },
    { image: comingSoon, text: 'Coming Soon' },
    { image: comingSoon, text: 'Coming Soon' },
    { image: comingSoon, text: 'Coming Soon' }
  ];

  return (
    <section id="how-it-works" className="how-to-section">
      <div className="container">
        <h2>How To Use iHEATRISK</h2>
        <div className="how-to-grid">
          {steps.map((step, idx) => (
            <div className="how-to-card" key={idx}>
              <img src={step.image} alt={step.text} />
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// This is now your "Home" component
function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Features />
      <HowToSection />
      <Footer />
    </div>
  );
}

export default Home;