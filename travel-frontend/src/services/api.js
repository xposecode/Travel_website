import axios from 'axios';

// Create axios instance
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:8000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for token refresh
API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      
      try {
        const refreshToken = localStorage.getItem('refresh_token');
        const response = await axios.post(
          `${process.env.REACT_APP_API_URL}/token/refresh/`,
          { refresh: refreshToken }
        );
        
        const newAccessToken = response.data.access;
        localStorage.setItem('access_token', newAccessToken);
        
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return API(originalRequest);
      } catch (refreshError) {
        // Redirect to login
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('user');
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }
    
    return Promise.reject(error);
  }
);

// API endpoints
export const authAPI = {
  login: (credentials) => API.post('/token/', credentials),
  register: (userData) => API.post('/register/', userData),
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user');
  },
  getProfile: () => API.get('/profile/'),
};

export const destinationAPI = {
  getAll: (params) => API.get('/destinations/', { params }),
  getById: (id) => API.get(`/destinations/${id}/`),
  create: (data) => API.post('/destinations/', data),
  update: (id, data) => API.put(`/destinations/${id}/`, data),
  delete: (id) => API.delete(`/destinations/${id}/`),
  search: (query) => API.get('/destinations/search/', { params: { q: query } }),
};

export default API;