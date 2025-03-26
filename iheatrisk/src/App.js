import React, { useState, useEffect } from 'react';
import './App.css'; // Component-specific CSS

// Import images from the assets folder
import constructorImg from './assets/constructor.jpeg';
import deliveryImg from './assets/delivery.jpeg';
import farmerImg from './assets/farmer.jpeg';
import nurseImg from './assets/nurse.jpg';

function Header() {
  return (
    <header>
      <div className="logo">iHEATRISK</div>
      <nav>
        <a href="#contact">Contact Us</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#calculate">Calculate</a>
        <a href="#activities-grants">Activities &amp; Grants</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
}

function Banner() {
  const images = [
    constructorImg,
    deliveryImg,
    farmerImg,
    nurseImg
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="banner-section">
      <div className="banner-text">
        <h1>Know Your Heat Risk</h1>
        <button onClick={() => alert('Redirecting to Calculate Page')}>
          Calculate Now
        </button>
      </div>
      <div className="banner-images">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Banner ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        ))}
      </div>
    </div>
  );
}

function Features() {
  const featureData = [
    {
      title: 'Personalized Assessment',
      description:
        'Tailor-made evaluations based on your health, demographic, and environmental data.'
    },
    {
      title: 'Physician Integrated Care',
      description:
        'Enable healthcare providers to input patient-specific data for targeted recommendations.'
    },
    {
      title: 'Advanced Bayesian Modeling',
      description:
        'Utilizing robust statistical models for precise and dynamic heat risk predictions.'
    },
    {
      title: 'Actionable Recommendations',
      description:
        'Receive personalized guidance to mitigate your heat-related health risks.'
    }
  ];

  return (
    <div className="features">
      {featureData.map((feature, index) => (
        <div className="feature-box" key={index}>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}

function HowToUse() {
  const steps = [
    {
      image: 'https://via.placeholder.com/200x150?text=Step+1',
      text: 'Enter your address to fetch local environmental data.'
    },
    {
      image: 'https://via.placeholder.com/200x150?text=Step+2',
      text: 'Input your personal and health information.'
    },
    {
      image: 'https://via.placeholder.com/200x150?text=Step+3',
      text: 'View your personalized heat risk assessment.'
    },
    {
      image: 'https://via.placeholder.com/200x150?text=Step+4',
      text: 'Follow actionable recommendations to stay safe.'
    }
  ];

  return (
    <div className="how-to-use">
      <h2>How to Use iHEATRISK</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <img src={step.image} alt={`Step ${index + 1}`} />
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Footer() {
  const brands = [
    'https://via.placeholder.com/100x50?text=Brand+1',
    'https://via.placeholder.com/100x50?text=Brand+2',
    'https://via.placeholder.com/100x50?text=Brand+3'
  ];
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} iHEATRISK. All rights reserved.</p>
        <div className="footer-brands">
          {brands.map((brand, index) => (
            <img key={index} src={brand} alt={`Brand ${index + 1}`} />
          ))}
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Features />
      <HowToUse />
      <Footer />
    </div>
  );
}

export default App;