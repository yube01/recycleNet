// Home.js
import React, { useState, useEffect } from 'react';
import '../components/Home.css'; // Import CSS for styling
import Nav from '../components/Nav';
import ProductCard from '../components/ProductCard'; // Assuming ProductCard component is properly defined

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const id = JSON.parse(localStorage.getItem('userData'))._id;
        const response = await fetch(`http://localhost:9000/product/userId/${id}`, {
          method: 'GET',
        });
        const data = await response.json();
        console.log(data);
        setProducts(data); // Update state with fetched product data
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="content-container">
          <div className="grid-container">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                productName={product.productName}
                categoryName={product.categoryName}
                sellerName={product.sellerName} // Assuming sellerName is available in your data structure
                // Add more props as needed based on your data structure
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
