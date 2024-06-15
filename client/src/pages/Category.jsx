import Nav from "../components/Nav";
import Sidebar from "../components/SideBar";
import { useSearchParams } from "react-router-dom";
import { useEffect,useState } from "react";
import ProductCard from '../components/ProductCard'; // Assuming ProductCard component is properly defined


export default function Category() {
    const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
    
    const name = searchParams.get('name');
    console.log(name)
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`http://localhost:9000/product/category/${name}`, {
            method: 'GET',
          });
          const data = await response.json();
          console.log('response', data);
 // Update state with fetched product data
 setProducts(data)
          // Calculate days remaining until expiry if category is 'vegetable-wastes' or 'fruit-wastes'
        
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
  
      fetchProduct();
    }, [name]);
  return (
    <>
      <Nav/>
      <div className="home-container">
        {/* <div className="content-container"> */}
          <div className="flex-container">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                productName={product.productName}
                categoryName={product.categoryName}
                sellerName={product.sellerName}
                productId = {product._id}
                 // Assuming sellerName is available in your data structure
                // Add more props as needed based on your data structure
              />
            ))}
          </div>
        {/* </div> */}
      </div>
      <Sidebar/>
    </>
  )
}
