const ProductService = {
  getProducts: async function (id) {
    const abortController = new AbortController();
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
        {
          method: "GET",
          signal: abortController.signal
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
