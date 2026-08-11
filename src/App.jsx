import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExploreCollections from "./components/ExploreCollections";
import FeaturedProducts from "./components/FeaturedProducts";
import About from "./components/About";
import WhyChoose from "./components/WhyChoose";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminLogin from "./pages/AdminLogin";
import ForgotPassword from "./pages/ForgotPassword";
import VerifyOTP from "./pages/VerifyOTP";
import ResetPassword from "./pages/ResetPassword";
import PasswordSuccess from "./pages/PasswordSuccess";

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

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/verify-otp" element={<VerifyOTP />} />

      <Route path="/reset-password" element={<ResetPassword />} />
     
      <Route path="/password-success" element={<PasswordSuccess />} />
    </Routes>
  );
}

export default App;