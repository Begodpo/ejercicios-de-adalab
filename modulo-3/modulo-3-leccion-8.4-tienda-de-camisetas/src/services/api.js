const callToApi = () => {
  return fetch("https://beta.adalab.es/ejercicios-extra/api/eshop/v2/cart.json")
    .then((response) => response.json())
    .then((data) => {
      const productList = data.cart.items.map((product) => {
        return {
          name: product.name,
          price: product.price,
          imageUrl: product.imageUrl,
          description: product.description,
          sizes: product.sizes,
        };
      });
      return productList;
    });
};

export default callToApi;
