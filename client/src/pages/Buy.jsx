import SideBar from "../components/SideBar";
import "./Buy.css";

import ProductCard from "../components/ProductCard";
import Nav from "../components/Nav";
// import '../components/Home.css';
import "../components/Home.css";
import { useEffect, useState } from "react";

export default function Buy() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("userData"))._id;
        const response = await fetch(
          `http://localhost:9000/product/allSellConfirm`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        setProducts(data); // Update state with fetched product data
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <Nav />
      <div style={{ dispay: "flex" }}>
        <div className="home-container">
          <SideBar />
          <div className="content-container">
            <div className="flex-container">
              {products.map((product) => (
                <ProductCard
                  key={product._id}
                  productName={product.productName}
                  categoryName={product.categoryName}
                  sellerName={product.sellerName}
                  productId={product._id}
                  productImage={product.productImage}
                  // Assuming sellerName is available in your data structure
                  // Add more props as needed based on your data structure
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
