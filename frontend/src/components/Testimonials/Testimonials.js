import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Home Owner',
      content: 'EstateElite helped me find my dream home. Their service was exceptional and they made the entire process smooth.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg'
    },
    {
      name: 'Priya Sharma',
      role: 'Investor',
      content: 'I have invested in multiple properties through EstateElite. Their market knowledge is impressive and returns have been great.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg'
    },
    {
      name: 'Vikram Singh',
      role: 'First-time Buyer',
      content: 'As a first-time home buyer, I was nervous. But the team at EstateElite guided me through every step. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/3.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonials-carousel">
          <div className="testimonial-content">
            <div className="testimonial-image">
              <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
            </div>
            <div className="testimonial-text">
              <p>"{testimonials[currentIndex].content}"</p>
              <h4>{testimonials[currentIndex].name}</h4>
              <span>{testimonials[currentIndex].role}</span>
            </div>
          </div>
          <button className="carousel-button prev" onClick={goToPrev}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="carousel-button next" onClick={goToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;