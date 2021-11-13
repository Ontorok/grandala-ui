import axios from 'axios';

const ProductService = {
  getProducts: async function (token) {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/userss", {
        cancelToken: token

      });
      return response.data
    } catch (error) {
      throw error
    }
  }
};

export default ProductService;
