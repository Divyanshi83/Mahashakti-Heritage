import "./FeaturedProducts.css";
import { useNavigate } from "react-router-dom";

import resham from "../assets/Resham poshak.png";

function FeaturedProducts() {

  const navigate = useNavigate();

  const collections = [
    {
      name: "Peacock Poshak",
      slug: "peacock-poshak",
    },
    {
      name: "Chanderi Poshak",
      slug: "chanderi-poshak",
    },
    {
      name: "Ghughroo Poshak",
      slug: "ghughroo-poshak",
    },
    {
      name: "Udaipuri Danka Poshak",
      slug: "udaipuri-danka-poshak",
    },
    {
      name: "Jaipuri Danka Poshak",
      slug: "jaipuri-danka-poshak",
    },
    {
      name: "Calcutti Poshak",
      slug: "calcutti-poshak",
    },
    {
      name: "Resham Poshak",
      slug: "resham-poshak",
      image: resham,
    },
    {
      name: "Gota Patti Poshak",
      slug: "gota-patti-poshak",
    },
    {
      name: "Copper & Silver Lace Poshak",
      slug: "copper-silver-lace-poshak",
    },
    {
      name: "Silver Lafaa Poshak",
      slug: "silver-lafaa-poshak",
    },
    {
      name: "Sikka Poshak",
      slug: "sikka-poshak",
    },
  ];

  return (
    <section className="featured">

      {/* =========================
          Heading
      ========================= */}

      <div className="featured-heading">

        <span>
          ✦ FEATURED COLLECTION
        </span>

        <h2>
          Handpicked Royal Collections
        </h2>

      </div>


      {/* =========================
          Products Grid
      ========================= */}

      <div className="featured-grid">

        {collections.map((item) => (

          <div
            className="product-card"
            key={item.slug}
          >

            {/* Product Image */}

            <div className="product-image">

              {item.image ? (

                <img
                  src={item.image}
                  alt={item.name}
                />

              ) : (

                <span>
                  Product Image
                </span>

              )}

            </div>


            {/* Product Information */}

            <div className="product-info">

              <h3>
                {item.name}
              </h3>


              {/* View / Customize Button */}

              <button
                onClick={() =>
                  navigate(`/product-details/${item.slug}`)
                }
              >
                Customize Your Poshak
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;