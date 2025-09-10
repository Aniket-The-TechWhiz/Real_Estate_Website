import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProperty, submitInquiry } from '../../utils/api';
import './ProjectDetail.css';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Ahmedabad',
  'Chennai', 'Kolkata', 'Surat', 'Pune', 'Jaipur',
  'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore',
  'Thane', 'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad'
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [inquiry, setInquiry] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    city: '',
    message: ''
  });
  const [inquiryError, setInquiryError] = useState('');
  const [inquirySuccess, setInquirySuccess] = useState('');

  useEffect(() => {
    const getProperty = async () => {
      try {
        const data = await fetchProperty(id);
        setProperty(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProperty();
  }, [id]);

const handleInquiryChange = (e) => {
    const { name, value } = e.target;
    setInquiry(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setInquiryError('');
    setInquirySuccess('');
    
    try {
      await submitInquiry({
        ...inquiry,
        property: id
      });
      
      setInquirySuccess('Inquiry submitted successfully! We will contact you soon.');
      setInquiry({
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        message: ''
      });
    } catch (err) {
      setInquiryError(err.message);
      console.error('Inquiry submission error:', err);
    }
  };

  const nextImage = () => {
    if (property.images && property.images.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (property.images && property.images.length > 0) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
      );
    }
  };

  if (loading) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="loading">Loading property details...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="error">Error: {error}</div>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="error">Property not found</div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <div className="property-header">
          <h1>{property.title}</h1>
          <p className="property-location">{property.location}</p>
          <p className="property-price">₹{property.price.toLocaleString()}</p>
        </div>

        <div className="property-gallery">
          <div className="main-image">
            <img 
              src={property.images && property.images.length > 0 
                ? property.images[currentImageIndex] 
                : 'https://via.placeholder.com/800x500'} 
              alt={property.title}
            />
            {property.images && property.images.length > 1 && (
              <>
                <button className="nav-button prev" onClick={prevImage}>
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="nav-button next" onClick={nextImage}>
                  <i className="fas fa-chevron-right"></i>
                </button>
              </>
            )}
          </div>
          {property.images && property.images.length > 1 && (
            <div className="thumbnail-container">
              {property.images.map((image, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={image} alt={`${property.title} ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="property-details">
          <div className="details-content">
            <h2>Property Details</h2>
            <p className="property-description">{property.description}</p>
            
            <div className="property-features">
              <h3>Features</h3>
              <div className="features-grid">
                <div className="feature">
                  <i className="fas fa-bed"></i>
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="feature">
                  <i className="fas fa-bath"></i>
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="feature">
                  <i className="fas fa-ruler-combined"></i>
                  <span>{property.area} sq.ft</span>
                </div>
                <div className="feature">
                  <i className="fas fa-building"></i>
                  <span>{property.type || 'Residential'}</span>
                </div>
              </div>
            </div>
          </div>

   <div className="inquiry-form">
      <h3>Request Information</h3>
      <form onSubmit={handleInquirySubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            value={inquiry.name}
            onChange={handleInquiryChange}
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            value={inquiry.email}
            onChange={handleInquiryChange}
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="tel" 
            name="phoneNumber" 
            placeholder="Your Phone Number" 
            value={inquiry.phoneNumber}
            onChange={handleInquiryChange}
            required 
          />
        </div>
        <div className="form-group">
          <select 
            name="city" 
            value={inquiry.city}
            onChange={handleInquiryChange}
            required
          >
            <option value="">Select City</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <textarea 
            name="message" 
            placeholder="Your Message" 
            rows="5"
            value={inquiry.message}
            onChange={handleInquiryChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn">Submit Inquiry</button>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;