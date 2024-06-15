import Navbar from "../components/NavBar";
import Sidebar from "../components/SideBar";
import { useSearchParams } from "react-router-dom";

export default function Category() {
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');
    console.log(name)
  return (
    <>
      <Navbar/>
      <Sidebar/>
    </>
  )
}
