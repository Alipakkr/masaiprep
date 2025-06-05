import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="loading">Loading...</p>;

  return (
    <div className="product-details">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p className="price">Price: ₹{product.price}</p>
      <p className="brand">Brand: {product.brand}</p>
      <p className="stock">In Stock: {product.stock}</p>
      <div className="tags">
        <span className="tag">{product.category}</span>
        <span className="tag">{product.rating}★</span>
      </div>
    </div>
  );
};

export default ProductDetails;
