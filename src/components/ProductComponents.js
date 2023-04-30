import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);

  const renderList = products.map(({id, title, image }) => {
    return (
      <div key={id}>
        <Link to={`product/${id}`}>
          <img src={image} alt={title} className="h-52 w-52"></img>
          <h2>{title}</h2>
        </Link>
      </div>
    );
  });
  return <div className="grid grid-cols-3 gap-10">{renderList}</div>;
};

export default ProductComponents;
