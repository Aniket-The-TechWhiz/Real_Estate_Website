const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  try {
    const response = await fetch(url, { ...defaultOptions, ...options });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
};

// Specific API functions
export const submitInquiry = (inquiryData) => {
  return apiRequest('/api/inquiries', {
    method: 'POST',
    body: JSON.stringify(inquiryData),
  });
};

export const fetchProperties = () => {
  return apiRequest('/api/properties');
};

export const fetchProperty = (id) => {
  return apiRequest(`/api/properties/${id}`);
};