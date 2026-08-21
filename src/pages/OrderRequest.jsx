import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderRequest.css";

function OrderRequest() {

  const location = useLocation();
  const navigate = useNavigate();

  const selectedProduct =
    location.state?.product || "Rajputi Poshak";

  const customization =
    location.state?.customization || {};


  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });


  const handleChange = (event) => {

    const { name, value } = event.target;

    setCustomerData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    const orderRequest = {
      product: selectedProduct,
      customization,
      customer: customerData,
    };

    console.log("Order Request:", orderRequest);

    navigate("/order-success", {
      state: {
        product: selectedProduct,
      },
    });

  };


  return (

    <section className="order-page">

      {/* =========================
          Heading
      ========================= */}

      <div className="order-heading">

        <span>✦ CUSTOMER DETAILS</span>

        <h1>Complete Your Request</h1>

        <p>
          Please provide your details so we can contact you
          regarding your customized Poshak.
        </p>

      </div>


      {/* =========================
          Selected Product
      ========================= */}

      <div className="order-selected">

        <span>SELECTED POSHAK</span>

        <h2>
          {selectedProduct}
        </h2>

      </div>


      {/* =========================
          Customer Form
      ========================= */}

      <form
        className="order-form"
        onSubmit={handleSubmit}
      >

        {/* Name */}

        <div className="order-form-group">

          <label htmlFor="name">
            Full Name
          </label>

          <input
            type="text"
            id="name"
            name="name"
            value={customerData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

        </div>


        {/* Phone */}

        <div className="order-form-group">

          <label htmlFor="phone">
            Phone Number
          </label>

          <input
            type="tel"
            id="phone"
            name="phone"
            value={customerData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />

        </div>


        {/* Email */}

        <div className="order-form-group">

          <label htmlFor="email">
            Email Address
          </label>

          <input
            type="email"
            id="email"
            name="email"
            value={customerData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
          />

        </div>


        {/* Address */}

        <div className="order-form-group full-width">

          <label htmlFor="address">
            Address
          </label>

          <textarea
            id="address"
            name="address"
            value={customerData.address}
            onChange={handleChange}
            placeholder="Enter your complete address"
            rows="4"
            required
          ></textarea>

        </div>


        {/* City */}

        <div className="order-form-group">

          <label htmlFor="city">
            City
          </label>

          <input
            type="text"
            id="city"
            name="city"
            value={customerData.city}
            onChange={handleChange}
            placeholder="Enter your city"
            required
          />

        </div>


        {/* State */}

        <div className="order-form-group">

          <label htmlFor="state">
            State
          </label>

          <input
            type="text"
            id="state"
            name="state"
            value={customerData.state}
            onChange={handleChange}
            placeholder="Enter your state"
            required
          />

        </div>


        {/* Pincode */}

        <div className="order-form-group">

          <label htmlFor="pincode">
            Pincode
          </label>

          <input
            type="text"
            id="pincode"
            name="pincode"
            value={customerData.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
            required
          />

        </div>


        {/* Submit */}

        <div className="order-submit">

          <button type="submit">
            Submit Request
          </button>

        </div>

      </form>

    </section>

  );
}

export default OrderRequest;