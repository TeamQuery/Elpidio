import React from "react";
import "./bootstrap/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Aboutpage from "./components/About/Aboutpage";
import ProjectsPage from "./components/Projects/ProjectsPage";
import Landingpage from "./components/Landingpage/Landingpage";
import Contactspage from "./components/Contacts/Contactspage";
import Projectdetails from "./components/ProjectDetails/Projectdetails";
// Dasboard
import Home from "./pages/home/Home";
import CreateProduct from "./pages/createProduct/createProduct";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";

export default function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/About" element={<Aboutpage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
          <Route path="/Details" element={<Projectdetails />} />
          <Route path="/Contacts" element={<Contactspage />} />
          {/* dashboard */}
          <Route path="/dashboard" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product" element={<Product />} />
          <Route path="/newproduct" element={<CreateProduct />} />
        </Routes>
      </Router>
    </div>
  );
}
