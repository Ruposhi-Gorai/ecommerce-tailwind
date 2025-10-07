import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/css/style.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RootLayout from "./Components/RootLayout.jsx";
import Home from "./Components/Home.jsx";
import Products from "./Components/ProductListing.jsx";
import { Provider } from "react-redux";
import { reduxToolkit } from "./Components/Redux Toolkit/reduxToolkit";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <Provider store={reduxToolkit}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </>
);
