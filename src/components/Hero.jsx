// src/components/Hero.jsx

import React, { useState, useEffect } from 'react';

// Added a unique, professional background image for each slide
const heroData = [
  { 
    small: "Helping You Grow", 
    title: "We Simplify Taxes", 
    subtitle: "Your dedicated partners in financial clarity and compliance.",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1920&q=80"
  },
  { 
    small: "Proven Track Record", 
    title: "Achieve Your Business Goals", 
    subtitle: "With years of experience, we help individuals and organizations achieve their goals.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
  },
  { 
    small: "Expert Guidance", 
    title: "Professional GST & Tax Services", 
    subtitle: "Trusted by hundreds of businesses in and around Guntur.",
    image: "https://images.unsplash.com/photo-1579621970795-87f54f19b5a5?auto=format&fit=crop&w=1920&q=80"
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleNext = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
      setFade(true);
    }, 500);
  };

  const handlePrev = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + heroData.length) % heroData.length);
      setFade(true);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    // The background image is now set dynamically from the heroData array
    <section 
      id="home" 
      className="hero-section d-flex align-items-center text-white" 
      style={{ backgroundImage: `url('${heroData[currentIndex].image}')` }}
    >
      <div className="hero-overlay"></div>
      <div className="container position-relative z-index-2">
        <div className="row">
          <div className="col-lg-7 col-md-9">
            <div className={`hero-text-content ${fade ? 'fade-in' : 'fade-out'}`}>
              <p className="hero-small-text text-uppercase fw-bold">{heroData[currentIndex].small}</p>
              <h1 className="display-3 fw-bold mb-3">{heroData[currentIndex].title}</h1>
              <p className="lead mb-4">{heroData[currentIndex].subtitle}</p>
            </div>
            <a href="#contact" className="btn btn-hero">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <button className="carousel-control-prev" type="button" onClick={handlePrev}>
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" onClick={handleNext}>
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </section>
  );
};

export default Hero;