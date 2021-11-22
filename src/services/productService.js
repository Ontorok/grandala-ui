import axios from "axios";

const ProductService = {
  fetchProducts: async function (token) {
    try {
      const response = await axios.get("http://localhost:5000/api/product", {
        cancelToken: token
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default ProductService;
