import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Collections.css";

function Collections() {

  const navigate = useNavigate();

  const categories = [
    "All",
    "Rajputi Poshak",
    "Fabric",
    "Odhna",
    "Transfer Material",
    "Cotton",
  ];


  const products = [
    {
      name: "Peacock Poshak",
      slug: "peacock-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Chanderi Poshak",
      slug: "chanderi-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Ghughroo Poshak",
      slug: "ghughroo-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Udaipuri Danka Poshak",
      slug: "udaipuri-danka-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Jaipuri Danka Poshak",
      slug: "jaipuri-danka-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Calcutti Poshak",
      slug: "calcutti-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Resham Poshak",
      slug: "resham-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Gota Patti Poshak",
      slug: "gota-patti-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Copper & Silver Lace Poshak",
      slug: "copper-silver-lace-poshak",
      category: "Rajputi Poshak",
    },
    {
      name: "Silver Lafaa Poshak",
      slug: "silver-lafaa-poshak",
      category: "Rajputi Poshak",
    },
  ];


  // Selected category
  const [selectedCategory, setSelectedCategory] = useState("All");


  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory
        );


  // Open product details
  const handleViewDetails = (slug) => {
    navigate(`/product-details/${slug}`);
  };


  return (

    <section className="collections-page">

      {/* =========================
          Page Heading
      ========================= */}

      <div className="collections-heading">

        <span>✦ OUR COLLECTIONS</span>

        <h1>Explore Our Royal Collections</h1>

        <p>
          Discover handcrafted Rajputi Poshaks, premium fabrics,
          elegant odhnas and traditional materials crafted with
          timeless royal elegance.
        </p>

      </div>


      {/* =========================
          Category Navigation
      ========================= */}

      <div className="collection-categories">

        {categories.map((category) => (

          <button
            key={category}
            className={`category-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>

        ))}

      </div>


      {/* =========================
          Product Section
      ========================= */}

      <div className="products-section">

        <div className="products-heading">

          <div>

            <span>ROYAL COLLECTION</span>

            <h2>
              {selectedCategory === "All"
                ? "All Collections"
                : selectedCategory}
            </h2>

          </div>

          <p>
            Handcrafted collections inspired by Rajasthan's
            royal heritage.
          </p>

        </div>


        {/* =========================
            Product Grid
        ========================= */}

        <div className="collections-products">

          {filteredProducts.length > 0 ? (

            filteredProducts.map((product) => (

              <div
                className="collection-product-card"
                key={product.slug}
              >

                {/* Product Image */}

                <div className="collection-product-image">

                  <span>
                    Product Image
                  </span>

                </div>


                {/* Product Information */}

                <div className="collection-product-info">

                  <span className="product-category">
                    {product.category}
                  </span>

                  <h3>
                    {product.name}
                  </h3>


                  {/* View Details */}

                  <button
                    className="view-product-button"
                    onClick={() =>
                      handleViewDetails(product.slug)
                    }
                  >
                    View Details
                  </button>

                </div>

              </div>

            ))

          ) : (

            <div className="no-products">

              <h3>
                No products available
              </h3>

              <p>
                Products for this category will be added soon.
              </p>

            </div>

          )}

        </div>

      </div>

    </section>

  );
}

export default Collections;