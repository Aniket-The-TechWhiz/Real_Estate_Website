import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-slide">
        <div className="hero-content">
          <h1 className="hero-title">Discover Your Dream Home</h1>
          <p className="hero-subtitle">Luxury living redefined with exceptional amenities and prime locations</p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn">Explore Projects</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
      <div className="hero-search">
        <div className="search-container">
          <h3>Find Your Property</h3>
          <form className="search-form">
            <div className="form-group">
              <select>
                <option value="">Property Type</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            <div className="form-group">
              <select>
                <option value="">Location</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>
            <div className="form-group">
              <select>
                <option value="">Budget</option>
                <option value="50l">50 Lac - 1 Cr</option>
                <option value="1cr">1 Cr - 2 Cr</option>
                <option value="2cr">2 Cr+</option>
              </select>
            </div>
            <button type="submit" className="btn">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;