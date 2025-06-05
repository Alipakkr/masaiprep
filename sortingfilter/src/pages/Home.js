import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const categories = [...new Set(products.map((item) => item.category))];

  const filtered = products
    .filter((item) =>
      filterCategory === "all" ? true : item.category === filterCategory
    )
    .sort((a, b) =>
      sortOrder === "low-high"
        ? a.price - b.price
        : sortOrder === "high-low"
        ? b.price - a.price
        : 0
    );

  return (
    <div className="home">
      <h1>Explore Our Products</h1>

      <div className="controls">
        <select onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="all">All Categories</option>
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by</option>
          <option value="low-high">Price: Low ➡ High</option>
          <option value="high-low">Price: High ➡ Low</option>
        </select>
      </div>

      <div className="products-grid">
        {filtered.map((product) => (
          <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <div>
              <h3>{product.title}</h3>
              <p>₹{product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
