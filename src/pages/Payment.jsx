import { useLocation, useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {

  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;


  // =========================
  // No Order Data
  // =========================

  if (!order) {

    return (
      <section className="payment-page">

        <div className="payment-container">

          <div className="payment-heading">

            <span>✦ PAYMENT</span>

            <h1>
              No Order Found
            </h1>

            <p>
              Please complete your order details first.
            </p>

          </div>

          <button
            className="payment-back-button"
            onClick={() => navigate("/collections")}
          >
            Go To Collections
          </button>

        </div>

      </section>
    );

  }


  // =========================
  // Payment Handler
  // =========================

  const handlePayment = () => {

    /*
      This is currently a frontend demo.
      Real payment gateway will be connected later.
    */

    navigate("/order-confirmation", {
      state: order,
    });

  };


  return (

    <section className="payment-page">

      <div className="payment-container">


        {/* =========================
            Heading
        ========================= */}

        <div className="payment-heading">

          <span>
            ✦ PAYMENT
          </span>

          <h1>
            Complete Your Order
          </h1>

          <p>
            Confirm your advance payment to proceed
            with your custom Poshak order.
          </p>

        </div>


        {/* =========================
            Selected Product
        ========================= */}

        <div className="payment-product">

          <span>
            SELECTED POSHAK
          </span>

          <h2>
            {order.product}
          </h2>

        </div>


        {/* =========================
            Advance Payment
        ========================= */}

        <div className="payment-amount">

          <span>
            ADVANCE PAYMENT
          </span>

          <h2>
            ₹5,000
          </h2>

          <p>
            Initial payment required for order confirmation.
          </p>

        </div>


        {/* =========================
            Payment Methods
        ========================= */}

        <div className="payment-options">

          <h2>
            Choose Payment Method
          </h2>


          {/* UPI */}

          <button
            type="button"
            className="payment-option active"
          >

            <div className="payment-option-content">

              <strong>
                UPI
              </strong>

              <span>
                Pay using UPI
              </span>

            </div>

            <div className="payment-radio">
              ✓
            </div>

          </button>


          {/* Card */}

          <button
            type="button"
            className="payment-option disabled"
            disabled
          >

            <div className="payment-option-content">

              <strong>
                Card
              </strong>

              <span>
                Coming Soon
              </span>

            </div>

          </button>

        </div>


        {/* =========================
            Pay Button
        ========================= */}

        <button
          type="button"
          className="pay-button"
          onClick={handlePayment}
        >
          Pay ₹5,000
        </button>


        {/* =========================
            Payment Note
        ========================= */}

        <p className="payment-note">

          Your payment information will be securely
          processed once the payment gateway is connected.

        </p>


        {/* =========================
            Back Button
        ========================= */}

        <button
          type="button"
          className="payment-edit-button"
          onClick={() => navigate(-1)}
        >
          ← Back to Customer Details
        </button>

      </div>

    </section>

  );
}

export default Payment;