import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../../utils/api';
import './Projects.css';

const Projects = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState({
    type: '',
    location: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    const getProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProperties();
  }, []);


  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (filter.type === '' || property.type === filter.type) &&
      (filter.location === '' || property.location.toLowerCase().includes(filter.location.toLowerCase())) &&
      (filter.minPrice === '' || property.price >= parseInt(filter.minPrice)) &&
      (filter.maxPrice === '' || property.price <= parseInt(filter.maxPrice))
    );
  });

  if (loading) {
    return (
      <div className="projects-page">
        <div className="container">
          <h1 className="page-title">Our Properties</h1>
          <div className="loading">Loading properties...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-page">
        <div className="container">
          <h1 className="page-title">Our Properties</h1>
          <div className="error">Error: {error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="projects-page">
      <div className="container">
        <h1 className="page-title">Our Properties</h1>
        
        <div className="filter-section">
          <h3>Filter Properties</h3>
          <div className="filter-form">
            <div className="form-group">
              <select name="type" value={filter.type} onChange={handleFilterChange}>
                <option value="">All Types</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
              </select>
            </div>
            <div className="form-group">
              <input 
                type="text" 
                name="location" 
                placeholder="Location" 
                value={filter.location} 
                onChange={handleFilterChange} 
              />
            </div>
            <div className="form-group">
              <input 
                type="number" 
                name="minPrice" 
                placeholder="Min Price" 
                value={filter.minPrice} 
                onChange={handleFilterChange} 
              />
            </div>
            <div className="form-group">
              <input 
                type="number" 
                name="maxPrice" 
                placeholder="Max Price" 
                value={filter.maxPrice} 
                onChange={handleFilterChange} 
              />
            </div>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProperties.length > 0 ? (
            filteredProperties.map(property => (
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
            ))
          ) : (
            <div className="no-results">No properties match your filters.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;