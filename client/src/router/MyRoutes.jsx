import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Buy from "../pages/Buy";
import List from "../pages/List";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
import Register from "../pages/Register";
import View from "../pages/View";
import Landing from "../pages/Landing";
import Category from "../pages/Category";
import Sellnow from "../pages/Sellnow";
export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/list" element={<List />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/view/" element={<View />} />
      {/* <Route path="/landing" element={<Landing />} /> */}
      <Route path="/category/" element={<Category />} />
      <Route path="/sellnow" element={<Sellnow />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
