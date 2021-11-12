const ProductService = {
  getProducts: async function (id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "GET"
        }
      );
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.log(error);
    }
  }
};

export default ProductService;
