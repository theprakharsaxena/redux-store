import React, { useEffect } from "react";
import ProductComponents from "./ProductComponents";
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/productAction";

const ProductListing = () => {
  const dispatch = useDispatch();

  // const fetchAllProduct = async () => {
  //   const response = await axios
  //     .get("https://fakestoreapi.com/products")
  //     .catch((err) => console.log(err));
  //   dispatch(setProducts(response.data));
  // };

  useEffect(() => {
    dispatch(setProducts());
  });

  return (
    <div>
      <ProductComponents />
    </div>
  );
};

export default ProductListing;
