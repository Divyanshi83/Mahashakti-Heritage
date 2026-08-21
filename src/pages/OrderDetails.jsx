import { useLocation, useNavigate } from "react-router-dom";
import "./OrderDetails.css";

function OrderDetails() {

  const location = useLocation();
  const navigate = useNavigate();

  const order = location.state;


  // =========================
  // No Order Details
  // =========================

  if (!order) {

    return (
      <section className="order-details-page">

        <div className="order-details-container">

          <div className="order-details-heading">

            <span>
              ✦ ORDER DETAILS
            </span>

            <h1>
              No Order Details Found
            </h1>

            <p>
              Please complete the customization form first.
            </p>

          </div>

          <button
            className="back-to-collections"
            onClick={() => navigate("/collections")}
          >
            Go To Collections
          </button>

        </div>

      </section>
    );
  }


  // =========================
  // Continue To Customer Details
  // =========================

  const handleContinue = () => {

    navigate("/customer-details", {
      state: order,
    });

  };


  return (

    <section className="order-details-page">

      <div className="order-details-container">


        {/* =========================
            Heading
        ========================= */}

        <div className="order-details-heading">

          <span>
            ✦ ORDER DETAILS
          </span>

          <h1>
            Review Your Custom Poshak
          </h1>

          <p>
            Please review your customization details
            before continuing with your order.
          </p>

        </div>


        {/* =========================
            Selected Product
        ========================= */}

        <div className="order-product-card">

          <span>
            SELECTED POSHAK
          </span>

          <h2>
            {order.product}
          </h2>

        </div>


        {/* =========================
            Customization Summary
        ========================= */}

        <div className="order-summary">

          <h2>
            Customization Summary
          </h2>


          <div className="order-row">

            <strong>
              Fabric
            </strong>

            <span>
              {order.fabric || "Not selected"}
            </span>

          </div>


          <div className="order-row">

            <strong>
              Colour
            </strong>

            <span>
              {order.colour || "Not selected"}
            </span>

          </div>


          <div className="order-row">

            <strong>
              Odhna
            </strong>

            <span>
              {order.odhna || "Not selected"}
            </span>

          </div>


          <div className="order-row">

            <strong>
              Work / Design
            </strong>

            <span>
              {order.work || "Not selected"}
            </span>

          </div>


          <div className="order-row">

            <strong>
              Lace / Border
            </strong>

            <span>
              {order.lace || "Not selected"}
            </span>

          </div>


          <div className="order-row">

            <strong>
              Measurements
            </strong>

            <span>
              {order.measurements || "Not provided"}
            </span>

          </div>


          <div className="order-row">

            <strong>
              Additional Customization
            </strong>

            <span>
              {order.additionalDetails || "None"}
            </span>

          </div>

        </div>


        {/* =========================
            Customer Details
        ========================= */}

        <div className="customer-section">

          <h2>
            Customer Details
          </h2>

          <p>
            Your name, phone number and address will be
            collected in the next step.
          </p>

        </div>


        {/* =========================
            Buttons
        ========================= */}

        <div className="order-actions">

          <button
            className="edit-order-button"
            onClick={() => navigate(-1)}
          >
            Edit Customization
          </button>


          <button
            className="continue-order-button"
            onClick={handleContinue}
          >
            Continue
          </button>

        </div>

      </div>

    </section>

  );
}

export default OrderDetails;