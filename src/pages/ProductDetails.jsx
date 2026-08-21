import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails() {

  const { slug } = useParams();

  const navigate = useNavigate();


  // =========================
  // Products
  // =========================

  const products = {

    "peacock-poshak": {
      name: "Peacock Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A beautifully handcrafted Rajputi Poshak inspired by the timeless royal heritage of Rajasthan. Designed with traditional craftsmanship and elegant detailing.",
      details: [
        "Traditional Rajputi craftsmanship",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "chanderi-poshak": {
      name: "Chanderi Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "An elegant Chanderi Poshak crafted with traditional Rajputi aesthetics and delicate detailing.",
      details: [
        "Premium Chanderi fabric",
        "Traditional Rajputi craftsmanship",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "ghughroo-poshak": {
      name: "Ghughroo Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A traditional Ghughroo Poshak featuring elegant craftsmanship inspired by Rajasthan's royal heritage.",
      details: [
        "Traditional Ghughroo detailing",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "udaipuri-danka-poshak": {
      name: "Udaipuri Danka Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A graceful Udaipuri Danka Poshak inspired by the rich traditional craftsmanship of Rajasthan.",
      details: [
        "Traditional Udaipuri Danka work",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "jaipuri-danka-poshak": {
      name: "Jaipuri Danka Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A beautifully detailed Jaipuri Danka Poshak combining traditional craftsmanship with royal elegance.",
      details: [
        "Traditional Jaipuri Danka work",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "calcutti-poshak": {
      name: "Calcutti Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A refined Calcutti Poshak designed with traditional detailing and timeless Rajputi elegance.",
      details: [
        "Traditional Calcutti detailing",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "resham-poshak": {
      name: "Resham Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A luxurious Resham Poshak featuring elegant traditional craftsmanship and rich royal detailing.",
      details: [
        "Premium Resham detailing",
        "Traditional Rajputi craftsmanship",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "gota-patti-poshak": {
      name: "Gota Patti Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A graceful Gota Patti Poshak featuring traditional decorative craftsmanship and royal elegance.",
      details: [
        "Traditional Gota Patti work",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "copper-silver-lace-poshak": {
      name: "Copper & Silver Lace Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "A statement Rajputi Poshak featuring elegant copper and silver lace detailing.",
      details: [
        "Copper and silver lace detailing",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },


    "silver-lafaa-poshak": {
      name: "Silver Lafaa Poshak",
      category: "Rajputi Poshak",
      price: "Price on Request",
      availability: "Available",
      description:
        "An elegant Silver Lafaa Poshak inspired by traditional Rajputi craftsmanship and royal aesthetics.",
      details: [
        "Traditional Silver Lafaa detailing",
        "Premium quality fabric",
        "Customizable design",
        "Made according to customer requirements",
      ],
    },

  };


  // =========================
  // Get Selected Product
  // =========================

  const product = products[slug];


  // =========================
  // Product Not Found
  // =========================

  if (!product) {

    return (

      <section className="product-details-page">

        <div className="product-details-info">

          <h1>
            Product Not Found
          </h1>

          <p>
            The product you are looking for is not available.
          </p>

          <button
            className="enquire-product-btn"
            onClick={() => navigate("/collections")}
          >
            Back To Collections
          </button>

        </div>

      </section>

    );

  }


  // =========================
  // Customize Product
  // =========================

  const handleCustomize = () => {

    navigate(`/customize-poshak/${slug}`, {

      state: {
        product: product.name,
        slug: slug,
      },

    });

  };


  // =========================
  // Enquire / Order
  // =========================

  const handleOrder = () => {

    navigate("/order-request", {

      state: {
        product: product.name,
        slug: slug,
      },

    });

  };


  // =========================
  // Page
  // =========================

  return (

    <section className="product-details-page">

      <div className="product-details-container">


        {/* =========================
            Product Image
        ========================= */}

        <div className="product-details-image">

          <span>
            Product Image
          </span>

        </div>


        {/* =========================
            Product Information
        ========================= */}

        <div className="product-details-info">


          {/* Category */}

          <span className="product-details-category">
            {product.category}
          </span>


          {/* Product Name */}

          <h1>
            {product.name}
          </h1>


          {/* Line */}

          <div className="product-details-line"></div>


          {/* Description */}

          <p className="product-details-description">
            {product.description}
          </p>


          {/* =========================
              Price
          ========================= */}

          <div className="product-price">

            <span>
              {product.price}
            </span>

          </div>


          {/* =========================
              Availability
          ========================= */}

          <div className="product-availability">

            <span className="availability-dot"></span>

            {product.availability}

          </div>


          {/* =========================
              Product Details
          ========================= */}

          <div className="product-features">

            <h3>
              Product Details
            </h3>

            <ul>

              {product.details.map((detail, index) => (

                <li key={index}>
                  {detail}
                </li>

              ))}

            </ul>

          </div>


          {/* =========================
              Buttons
          ========================= */}

          <div className="product-details-buttons">


            {/* Customize */}

            <button
              className="customize-product-btn"
              onClick={handleCustomize}
            >
              Customize This Poshak
            </button>


            {/* Enquire / Order */}

            <button
              className="enquire-product-btn"
              onClick={handleOrder}
            >
              Enquire / Order
            </button>


          </div>

        </div>

      </div>

    </section>

  );

}

export default ProductDetails;