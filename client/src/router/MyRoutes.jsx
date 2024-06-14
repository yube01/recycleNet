import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Buy from "../pages/Buy"
import List from "../pages/List"
import NotFound from "../pages/NotFound"
export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path ="/buy" element={<Buy/>}/>
        <Route path ="/list" element={<List/>}/>

        <Route path = "*" element={<NotFound/>}/>

      </Routes>
    </BrowserRouter>
  )
}
