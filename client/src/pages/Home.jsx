// Home.js
import React, { useState, useEffect } from "react";
import "../components/Home.css"; // Import CSS for styling
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard"; // Assuming ProductCard component is properly defined

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const id = JSON.parse(localStorage.getItem("userData"))._id;
        const response = await fetch(
          `http://localhost:9000/product/userId/${id}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log(data);
        setProducts(data); // Update state with fetched product data
        checkExpiryDates(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures useEffect runs only once on component mount
  async function checkExpiryDates(dataArray) {
    // Iterate through each item in the dataArray
    for (let i = 0; i < dataArray.length; i++) {
      const item = dataArray[i];
      const expiryDate = new Date(item.expiryDate); // Convert expiryDate string to Date object

      // Calculate the difference in days between current date and expiry date
      const currentDate = new Date();
      const timeDiff = expiryDate.getTime() - currentDate.getTime();
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Convert milliseconds to days

      // Check if expiry is less than 10 days
      if (diffDays < 5) {
        // Alert the user or log a message
        const productName = item.productName;
        const pId = item._id;
        const isAlerted = item.isAlerted;
        const email = JSON.parse(localStorage.getItem("userData")).email;
        if (isAlerted === false) {
          await sendEmailNotification(productName, diffDays, email, pId);
        }
        // You can also console log or perform any other action here
      }
      if (diffDays < 0) {
        const productName = item.productName;
        const pId = item._id;
        const isExpired = item.isExpired;
        const email = JSON.parse(localStorage.getItem("userData")).email;
        if (isExpired === false) {
          await isExpiredEmailNotification(productName, diffDays, email, pId);
        }
      }
    }
  }
  async function sendEmailNotification(
    productName,
    daysUntilExpiry,
    email,
    pId
  ) {
    try {
      const response = await fetch(
        `http://localhost:9000/send-email/alert/${pId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: email, // Assuming 'email' is a variable containing the recipient's email address
            subject: "Expiry Alert",
            text: `${productName} expires in ${daysUntilExpiry} days.`,
            html: `<p>Product expired <br> ${productName} expires in ${daysUntilExpiry} days.</p>`, // HTML content for the email body
          }),
        }
      );
      const data = await response.json();
      console.log("Email sent successfully:", data);
    } catch (error) {
      console.log("Error sending email:", error);
    }
  }
  async function isExpiredEmailNotification(
    productName,
    daysUntilExpiry,
    email,
    pId
  ) {
    try {
      const response = await fetch(
        `http://localhost:9000/send-email/isExpired/${pId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: email, // Assuming 'email' is a variable containing the recipient's email address
            subject: "Already expired",
            text: `${productName} expires in ${daysUntilExpiry} days.`,
            html: `<p>Product expired <br> ${productName} expires in ${daysUntilExpiry} days.</p>`, // HTML content for the email body
          }),
        }
      );
      const data = await response.json();
      console.log("Email sent successfully:", data);
    } catch (error) {
      console.log("Error sending email:", error);
    }
  }

  return (
    <>
      <Nav />
      <div className="home-container">
        <div className="content-container">
          <div className="flex-container">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                productName={product.productName}
                categoryName={product.categoryName}
                // sellerName={product.sellerName}
                productId={product._id}
                productImage={product.productImage}
                // Assuming sellerName is available in your data structure
                // Add more props as needed based on your data structure
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
