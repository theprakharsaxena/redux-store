import React, { useEffect } from "react";
import ProductComponents from "./ProductComponents";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  },[]);

  return (
    <div>
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
