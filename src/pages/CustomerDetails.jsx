import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CustomerDetails.css";

function CustomerDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;


  // =========================
  // Customer State
  // =========================

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });


  // =========================
  // Handle Input Changes
  // =========================

  const handleChange = (event) => {

    const { name, value } = event.target;

    setCustomer((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  // =========================
  // Submit Customer Details
  // =========================

  const handleSubmit = (event) => {

    event.preventDefault();


    // Check all fields

    if (
      !customer.name.trim() ||
      !customer.phone.trim() ||
      !customer.email.trim() ||
      !customer.address.trim() ||
      !customer.city.trim() ||
      !customer.state.trim() ||
      !customer.pincode.trim()
    ) {

      alert("Please fill all customer details.");

      return;
    }


    // Phone validation

    if (!/^[0-9]{10}$/.test(customer.phone)) {

      alert("Please enter a valid 10 digit phone number.");

      return;
    }


    // Pincode validation

    if (!/^[0-9]{6}$/.test(customer.pincode)) {

      alert("Please enter a valid 6 digit pincode.");

      return;
    }


    // =========================
    // Go To Payment
    // =========================

    navigate("/payment", {

      state: {
        ...order,

        customer: {
          ...customer,
        },
      },

    });

  };


  // =========================
  // No Order Data
  // =========================

  if (!order) {

    return (

      <section className="customer-details-page">

        <div className="customer-details-container">

          <div className="customer-details-heading">

            <span>
              ✦ CUSTOMER DETAILS
            </span>

            <h1>
              No Order Found
            </h1>

            <p>
              Please complete the customization process first.
            </p>

          </div>


          <button
            type="button"
            className="customer-back-button"
            onClick={() => navigate("/collections")}
          >
            Go To Collections
          </button>

        </div>

      </section>

    );

  }


  return (

    <section className="customer-details-page">

      <div className="customer-details-container">


        {/* =========================
            Heading
        ========================= */}

        <div className="customer-details-heading">

          <span>
            ✦ CUSTOMER DETAILS
          </span>

          <h1>
            Tell Us About Yourself
          </h1>

          <p>
            Please provide your contact and delivery details
            to continue with your order.
          </p>

        </div>


        {/* =========================
            Selected Product
        ========================= */}

        <div className="customer-product-card">

          <span>
            SELECTED POSHAK
          </span>

          <h2>
            {order.product}
          </h2>

        </div>


        {/* =========================
            Customer Form
        ========================= */}

        <form
          className="customer-form"
          onSubmit={handleSubmit}
        >


          {/* Full Name */}

          <div className="customer-form-group">

            <label htmlFor="name">
              Full Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={customer.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />

          </div>


          {/* Phone */}

          <div className="customer-form-group">

            <label htmlFor="phone">
              Phone Number
            </label>

            <input
              type="tel"
              id="phone"
              name="phone"
              value={customer.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit phone number"
              maxLength="10"
            />

          </div>


          {/* Email */}

          <div className="customer-form-group">

            <label htmlFor="email">
              Email Address
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={customer.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />

          </div>


          {/* Address */}

          <div className="customer-form-group full-width">

            <label htmlFor="address">
              Delivery Address
            </label>

            <textarea
              id="address"
              name="address"
              value={customer.address}
              onChange={handleChange}
              placeholder="Enter your complete delivery address"
              rows="4"
            ></textarea>

          </div>


          {/* City */}

          <div className="customer-form-group">

            <label htmlFor="city">
              City
            </label>

            <input
              type="text"
              id="city"
              name="city"
              value={customer.city}
              onChange={handleChange}
              placeholder="Enter your city"
            />

          </div>


          {/* State */}

          <div className="customer-form-group">

            <label htmlFor="state">
              State
            </label>

            <input
              type="text"
              id="state"
              name="state"
              value={customer.state}
              onChange={handleChange}
              placeholder="Enter your state"
            />

          </div>


          {/* Pincode */}

          <div className="customer-form-group">

            <label htmlFor="pincode">
              Pincode
            </label>

            <input
              type="text"
              id="pincode"
              name="pincode"
              value={customer.pincode}
              onChange={handleChange}
              placeholder="Enter 6 digit pincode"
              maxLength="6"
            />

          </div>


          {/* =========================
              Buttons
          ========================= */}

          <div className="customer-form-actions">

            <button
              type="button"
              className="customer-back-button"
              onClick={() => navigate(-1)}
            >
              Back
            </button>


            <button
              type="submit"
              className="customer-submit-button"
            >
              Continue To Payment
            </button>

          </div>

        </form>

      </div>

    </section>

  );

}

export default CustomerDetails;