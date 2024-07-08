// src/features/products/productsAPI.js
export const productsAPI = {
    fetchAll: async () => {
      const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/products');
      return response.json();
    },
  };
  
  
  
  