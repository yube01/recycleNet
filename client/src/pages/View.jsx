import axios from "axios";
import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { sellConfirm } from "../../server/controller/product.controller";
import './View.css'
export default function View() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [product, setProduct] = useState(null);
  const [daysRemaining, setDaysRemaining] = useState(null); // State to store days remaining until expiry
  const [expired, setExpired] = useState(false); // State to track if product is expired
  const navigate = useNavigate();

  // Retrieve userType from localStorage
  const userData = localStorage.getItem("userData");
  const userType = JSON.parse(userData).userType;
  console.log("User Type:", userType);
  let boolCheck = false;
  if (userType === "buyer") {
    boolCheck = true;
    console.log("checked true");
  }

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:9000/product/productDetail/${id}`,
          {
            method: "GET",
          }
        );
        const data = await response.json();
        console.log("Product Data:", data);
        setProduct(data); // Update state with fetched product data

        // Calculate days remaining until expiry if category is 'vegetable-wastes' or 'fruit-wastes'
        if (
          data.product.categoryName === "vegetable-wastes" ||
          data.product.categoryName === "fruit-wastes"
        ) {
          const expiryDate = new Date(data.product.expiryDate);
          const currentDate = new Date();
          const differenceInTime = expiryDate.getTime() - currentDate.getTime();
          const days = Math.ceil(differenceInTime / (1000 * 3600 * 24));
          setDaysRemaining(days);

          // Check if product is expired
          if (expiryDate < currentDate) {
            setExpired(true);
          } else {
            setExpired(false);
          }
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleSellNow = async () => {
    // Implement logic to handle "Sell Now" action
    const sellItem = {
      productName: product.productName,
      quantity: product.quantity,
      categoryName: product.categoryName,
      userId: product.userId,
      productImage: product.productImage,
      sellConfirm: true,
    };
    console.log("Test Object", sellItem);
    const response = await axios.put(
      `http://localhost:9000/product/setListTrue/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      navigate("/home");
    } else {
      setError("Failed to sell item");
    }
    console.log("Item Sold", response.data);
    console.log("Sell Now clicked", id);
  };

  const handleInterested = async () => {
    const getId = JSON.parse(localStorage.getItem('userData'))._id
    console.log('give product id',product.product.userId)
  const values =  {
    buyerId: getId,
    sellerId:product.product.userId,
    productId:id
  }
  console.log("VAles",values)
    // Implement logic to handle "I'm interested" action
    const response = await axios.post(
      `http://localhost:9000/interest/addInterested`,
      values,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Request Sent", response.data);

    console.log("I'm interested clicked", id);
  };

  return (
    <>
      <Nav />
      <div className="product-details-container">
        {product ? (
          <>
            <div>
              <img
                src={`../../server/public/uploads/${product.product.productImage}`}
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div>
              <h1>{product.product.productName}</h1>
            </div>
            <div>
              <h4>Category:</h4>
              <p>{product.product.categoryName}</p>
            </div>
            <div>
              <h4>Quantity:</h4>
              <p>{product.product.quantity}</p>
            </div>
            <div>
              <h4>Organization Name:</h4>
              <p>{product.user.name}</p>
            </div>
            <div>
              <h4>Created At:</h4>
              <p>{product.product.createdAt}</p>
            </div>
            <div>
              <h4>Updated At:</h4>
              <p>{product.product.updatedAt}</p>
            </div>
            {(product.product.categoryName === "vegetable-wastes" ||
              product.product.categoryName === "fruit-wastes") && (
              <>
                <div>
                  <h4>Expiry Date:</h4>
                  <p>{product.product.expiryDate}</p>
                </div>
                {userType === "seller" && (
                  <>
                    {expired ? (
                      <div>
                        <h4>Product Expired!</h4>
                        <button onClick={handleSellNow}>Sell Now</button>
                      </div>
                    ) : (
                      <div>
                        <h4>Days Remaining until Expiry:</h4>
                        <p>{daysRemaining}</p>
                      </div>
                    )}
                  </>
                )}
              </>
            )}
            {boolCheck && (
              <div>
                <button onClick={handleInterested}>Im interested</button>
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
