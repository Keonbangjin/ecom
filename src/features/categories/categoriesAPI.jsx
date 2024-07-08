export const categoriesAPI = {
    fetchAll: async () => {
      const response = await fetch('https://ecommerce-backend-fawn-eight.vercel.app/api/categories');
      return response.json();
    },
  };
  