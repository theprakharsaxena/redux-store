import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  setSelectedProduct,
  RemoveSelectedProduct,
} from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { title, image, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId.length !== "")
      dispatch(setSelectedProduct(productId));
    return () => {
      dispatch(RemoveSelectedProduct());
    };
  }, [productId]);

  return (
    <div>
      <img src={image} alt={title} className="h-52 w-52"></img>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default ProductDetails;
