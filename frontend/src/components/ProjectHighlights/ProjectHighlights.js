import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProjectHighlights.css';

const ProjectHighlights = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch('/api/properties');
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        const data = await response.json();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <section className="project-highlights">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="loading">Loading properties...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="project-highlights">
        <div className="container">
          <h2 className="section-title">Featured Properties</h2>
          <div className="error">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="project-highlights">
      <div className="container">
        <h2 className="section-title">Featured Properties</h2>
        <div className="projects-grid">
          {properties.slice(0, 3).map(property => (
            <div key={property._id} className="project-card">
              <div className="project-image">
                <img 
                  src={property.images && property.images.length > 0 
                    ? property.images[0] 
                    : 'https://via.placeholder.com/400x300'} 
                  alt={property.title}
                />
                <div className="project-overlay">
                  <Link to={`/project/${property._id}`} className="btn">View Details</Link>
                </div>
              </div>
              <div className="project-info">
                <h3>{property.title}</h3>
                <p className="project-location">{property.location}</p>
                <div className="project-features">
                  <span><i className="fas fa-bed"></i> {property.bedrooms} Beds</span>
                  <span><i className="fas fa-bath"></i> {property.bathrooms} Baths</span>
                  <span><i className="fas fa-ruler-combined"></i> {property.area} sq.ft</span>
                </div>
                <p className="project-price">₹{property.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/projects" className="btn">View All Properties</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectHighlights;