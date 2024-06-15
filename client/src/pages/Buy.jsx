import Navbar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Nav from "../components/Nav";
import ProductCard from "../components/ProductCard";
// import '../components/Home.css';
import '../components/Home.css'

export default function Buy() {
  return (
    <div style={{dispay:'flex'}}>
      {/* <Navbar /> */}
      <Nav/>
     <div className="home-container">
        <SideBar />
        <div className="content-container">
          <ProductCard />
          <ProductCard />
          {/* Add more ProductCard components as needed */}
        </div>
      </div>
    </div>
  );
}
