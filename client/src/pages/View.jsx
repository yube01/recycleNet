import Nav from "../components/Nav";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrganizationImage from "../../../server/uploads/1718411254166.png"; // Example image path

export default function View() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [product, setProduct] = useState(null); // State to store product details

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:9000/product/productDetail/${id}`, {
          method: 'GET',
        });
        const data = await response.json();
        console.log('response', data);
        setProduct(data); // Update state with fetched product data
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return (
    <>
      <Nav />
      <div className="product-details-container">
        {product ? (
          <>
            <div>
              <img src={OrganizationImage} alt="" height={100} width={100} />
            </div>
            <div>
              <h1>{product.productName}</h1>
            </div>
            <div>
              <h4>Category:</h4>
              <p>{product.categoryName}</p>
            </div>
            <div>
              <h4>Quantity:</h4>
              <p>{product.quantity}</p>
            </div>
            <div>
              <h4>Organization Name:</h4>
              <p>{product.organizationName}</p>
            </div>
            {/* Display all other fields dynamically */}
            <div>
              <h4>Created At:</h4>
              <p>{product.createdAt}</p>
            </div>
            <div>
              <h4>Updated At:</h4>
              <p>{product.updatedAt}</p>
            </div>
            <div>
              <h4>Expiry Date:</h4>
              <p>{product.expiryDate}</p>
            </div>
            {/* Add more fields as needed */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
