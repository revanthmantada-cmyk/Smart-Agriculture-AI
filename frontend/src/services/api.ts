const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000/api';

// Check backend connection
export const checkBackendConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);

    if (!response.ok) {
      throw new Error('Backend connection failed');
    }

    return await response.json();

  } catch (error) {
    console.error('Backend Error:', error);
    throw error;
  }
};

export default API_BASE_URL;