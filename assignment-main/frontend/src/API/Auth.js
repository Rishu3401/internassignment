import axios from 'axios';

const baseURL = 'http://localhost:5000/api/V0';


export const Auth = async (userData, endpoint) => {
  try {
    const response = await axios.post(`${baseURL}${endpoint}`, userData);
    
    if (response.status === 200 || response.status === 201) {
      return { success: true, data: response.data };
    } else {
    
      return { success: false, message: response.statusText };
    }
  } catch (error) {

    if (error.response) {
      return {
        success: false,
        status: error.response.status,
        message: error.response.data.message || 'An error occurred',
      };
    } else if (error.request) {
      
      return {
        success: false,
        message: 'No response from server',
      };
    } else {

      return {
        success: false,
        message: 'Request error',
      };
    }
  }
};
