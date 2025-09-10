import React from 'react';
import './Amenities.css';

const Amenities = () => {
  const amenities = [
    {
      icon: 'fas fa-swimming-pool',
      title: 'Swimming Pool',
      description: 'Luxurious swimming pool for relaxation and exercise.'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Fitness Center',
      description: 'State-of-the-art gym with modern equipment.'
    },
    {
      icon: 'fas fa-tree',
      title: 'Green Spaces',
      description: 'Beautifully landscaped gardens and parks.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: '24/7 Security',
      description: 'Round-the-clock security for your safety.'
    },
    {
      icon: 'fas fa-parking',
      title: 'Parking',
      description: 'Ample parking space for residents and visitors.'
    },
    {
      icon: 'fas fa-gamepad',
      title: 'Play Area',
      description: 'Dedicated play areas for children.'
    }
  ];

  return (
    <section className="amenities">
      <div className="container">
        <h2 className="section-title">World-Class Amenities</h2>
        <div className="amenities-grid">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <div className="amenity-icon">
                <i className={amenity.icon}></i>
              </div>
              <h3>{amenity.title}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;