import React from 'react';
import Hero from '../../components/Hero/Hero';
import ProjectHighlights from '../../components/ProjectHighlights/ProjectHighlights';
import Amenities from '../../components/Amenities/Amenities';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactForm from '../../components/ContactForm/ContactForm';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ProjectHighlights />
      <Amenities />
      <Testimonials />
      <ContactForm />
    </div>
  );
};

export default Home;