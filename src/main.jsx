import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./Components/RootLayout.jsx";
import Home from "./Components/Home.jsx";
import Products from "./Components/ProductListing.jsx";
import { Provider } from "react-redux";
import { reduxToolkit } from "./Components/Redux Toolkit/reduxToolkit";
import ViewCart from "./Components/ViewCart.jsx";
import ProductDetails from "./Components/ProductDetails.jsx";
import Contact from "./Components/Contact.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={reduxToolkit}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/view-cart" element={<ViewCart />} />
            <Route path="/products-details/:id" element={<ProductDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
