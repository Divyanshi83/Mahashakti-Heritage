import { useLocation, useNavigate } from "react-router-dom";
import "./OrderConfirmation.css";

function OrderConfirmation() {

  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;


  if (!order) {

    return (
      <section className="confirmation-page">

        <div className="confirmation-card">

          <span className="confirmation-icon">
            ✦
          </span>

          <h1>
            No Order Found
          </h1>

          <p>
            We could not find your order details.
            Please start your order again.
          </p>

          <button
            onClick={() => navigate("/collections")}
          >
            Go To Collections
          </button>

        </div>

      </section>
    );

  }


  return (

    <section className="confirmation-page">

      <div className="confirmation-card">

        {/* =========================
            Success Icon
        ========================= */}

        <div className="success-icon">
          ✓
        </div>


        {/* =========================
            Heading
        ========================= */}

        <span className="confirmation-tag">
          ✦ ORDER REQUEST RECEIVED
        </span>

        <h1>
          Thank You!
        </h1>

        <p className="confirmation-message">
          Your custom Poshak request has been successfully
          submitted. Our team will contact you shortly to
          discuss your order.
        </p>


        {/* =========================
            Product
        ========================= */}

        <div className="confirmation-product">

          <span>
            SELECTED POSHAK
          </span>

          <h2>
            {order.product}
          </h2>

        </div>


        {/* =========================
            Customer
        ========================= */}

        <div className="confirmation-details">

          <div className="confirmation-row">

            <strong>
              Customer
            </strong>

            <span>
              {order.customer?.name}
            </span>

          </div>


          <div className="confirmation-row">

            <strong>
              Phone
            </strong>

            <span>
              {order.customer?.phone}
            </span>

          </div>


          <div className="confirmation-row">

            <strong>
              Email
            </strong>

            <span>
              {order.customer?.email}
            </span>

          </div>


          <div className="confirmation-row">

            <strong>
              City
            </strong>

            <span>
              {order.customer?.city}
            </span>

          </div>

        </div>


        {/* =========================
            Note
        ========================= */}

        <div className="confirmation-note">

          <h3>
            What happens next?
          </h3>

          <p>
            Our team will review your customization request
            and contact you regarding pricing, availability,
            measurements and final order confirmation.
          </p>

        </div>


        {/* =========================
            Buttons
        ========================= */}

        <div className="confirmation-actions">

          <button
            className="home-button"
            onClick={() => navigate("/")}
          >
            Back To Home
          </button>

          <button
            className="collection-button"
            onClick={() => navigate("/collections")}
          >
            Explore Collections
          </button>

        </div>

      </div>

    </section>

  );
}

export default OrderConfirmation;