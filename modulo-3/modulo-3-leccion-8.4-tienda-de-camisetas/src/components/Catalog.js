import { Link, Route } from "react-router-dom";
function Catalog(props) {
  const renderProducts = props.products.map((product, index) => {
    return (
      <div key={index}>
        <img src={product.imageUrl} alt="" />
        <h2>{product.name}</h2>
        <p>{product.price}</p>
        <Link to="/product-detail/:productId">Ver detalle del producto</Link>
      </div>
    );
  });

  return <div>{renderProducts}</div>;
}

export default Catalog;
