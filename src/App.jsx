import "./App.css";

import { Routes, Route } from "react-router-dom";


// =========================
// Components
// =========================

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreCollections from "./components/ExploreCollections";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


// =========================
// Pages
// =========================

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";

import Collections from "./pages/Collections";
import ProductDetails from "./pages/ProductDetails";

import CustomizePoshak from "./pages/CustomizePoshak";

import OrderRequest from "./pages/OrderRequest";
import OrderDetails from "./pages/OrderDetails";
import CustomerDetails from "./pages/CustomerDetails";

import Payment from "./pages/Payment";

import OrderConfirmation from "./pages/OrderConfirmation";

import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import PasswordSuccess from "./pages/PasswordSuccess";


// =========================
// Home Page
// =========================

function HomePage() {

  return (
    <>
      <Navbar />

      <Hero />

      <ExploreCollections />

      <FeaturedProducts />

      <About />

      <WhyChoose />

      <Testimonials />

      <ContactUs />

      <Footer />
    </>
  );

}


// =========================
// Main App
// =========================

function App() {

  return (

    <Routes>


      {/* =========================
          HOME
      ========================= */}

      <Route
        path="/"
        element={<HomePage />}
      />


      {/* =========================
          COLLECTIONS
      ========================= */}

      <Route
        path="/collections"
        element={<Collections />}
      />


      {/* =========================
          PRODUCT DETAILS
      ========================= */}

      <Route
        path="/product/:slug"
        element={<ProductDetails />}
      />

      <Route
        path="/product-details/:slug"
        element={<ProductDetails />}
      />


      {/* =========================
          CUSTOMIZE POSHAK
      ========================= */}

      <Route
        path="/customize-poshak"
        element={<CustomizePoshak />}
      />

      <Route
        path="/customize-poshak/:slug"
        element={<CustomizePoshak />}
      />


      {/* =========================
          ORDER REQUEST
      ========================= */}

      <Route
        path="/order-request"
        element={<OrderRequest />}
      />


      {/* =========================
          ORDER DETAILS
      ========================= */}

      <Route
        path="/order-details"
        element={<OrderDetails />}
      />


      {/* =========================
          CUSTOMER DETAILS
      ========================= */}

      <Route
        path="/customer-details"
        element={<CustomerDetails />}
      />


      {/* =========================
          PAYMENT
      ========================= */}

      <Route
        path="/payment"
        element={<Payment />}
      />


      {/* =========================
          ORDER CONFIRMATION
      ========================= */}

      <Route
        path="/order-confirmation"
        element={<OrderConfirmation />}
      />


      {/* =========================
          AUTHENTICATION
      ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/signup"
        element={<Signup />}
      />

      <Route
        path="/admin-login"
        element={<AdminLogin />}
      />


      {/* =========================
          FORGOT PASSWORD
      ========================= */}

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/verify-otp"
        element={<VerifyOTP />}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      <Route
        path="/password-success"
        element={<PasswordSuccess />}
      />


    </Routes>

  );

}

export default App;