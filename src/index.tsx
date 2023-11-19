import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Route, Router, Routes, BrowserRouter } from "react-router-dom";
import AnimatedPage from "./Animated";
import LandingPage from "./pages/LandingPage/LandingPage";
import Register from "./components/SignIn/Register";
import Login from "./components/Login/Login";
import PageIntroduction from "./pages/PageIntroduction/PageIntroduction";
import Contact from "./pages/PageIntroduction/Contact";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import UserProfile from "./components/UserProfile/UserProfile";
import ProductInformation from "./components/ProductInformation/ProductInformation";
import { ToastContainer } from "react-toastify";
import AddProduct from "./components/AddProduct/AddProduct";
import FeedbackList from "./components/FeedbackList/FeedbackList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <ToastContainer />
    <BrowserRouter>
      <AnimatedPage>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/introduction" element={<PageIntroduction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/search" element={<ProductDetail />} />
          <Route path="/user/detail" element={<UserProfile />} />
          <Route path="/detail/:id" element={<ProductInformation />} />
          <Route path="/add/product" element={<AddProduct />} />
          <Route path="/feedbacklist" element={<FeedbackList />} />
        </Routes>
      </AnimatedPage>
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
