import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="page-title">About EstateElite</h1>
        
        <section className="about-hero">
          <div className="about-content">
            <div className="about-text">
              <h2>Creating Dream Spaces Since 2010</h2>
              <p>
                EstateElite is a premier real estate developer known for creating luxurious and sustainable 
                living spaces. With over a decade of experience, we have delivered numerous landmark projects 
                that redefine modern living.
              </p>
              <p>
                Our commitment to quality, innovation, and customer satisfaction has made us one of the most 
                trusted names in the real estate industry.
              </p>
            </div>
            <div className="about-image">
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80" alt="About EstateElite" />
            </div>
          </div>
        </section>

        <section className="stats-section">
          <div className="stats-grid">
            <div className="stat">
              <h3>500+</h3>
              <p>Happy Families</p>
            </div>
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>12+</h3>
              <p>Years of Experience</p>
            </div>
            <div className="stat">
              <h3>10</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To create exceptional living and working spaces that enhance the quality of life for our 
              customers while delivering sustainable value to our stakeholders.
            </p>
          </div>
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be the most trusted and admired real estate developer known for innovation, quality, 
              and customer-centric approach.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;