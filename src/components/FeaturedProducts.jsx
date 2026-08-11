import "./FeaturedProducts.css";

function FeaturedProducts() {

  const products = [

    {
      name: "Royal Rajputi Poshak",
      price: "₹7,999",
      badge: "BESTSELLER",
      rating: "★★★★★",
    },

    {
      name: "Designer Cotton Suit",
      price: "₹2,499",
      badge: "NEW",
      rating: "★★★★★",
    },

    {
      name: "Premium Fabric",
      price: "₹899 / Meter",
      badge: "POPULAR",
      rating: "★★★★★",
    },

    {
      name: "Transfer Material",
      price: "₹499",
      badge: "LIMITED",
      rating: "★★★★★",
    },

    {
      name: "Royal Odhna",
      price: "₹1,999",
      badge: "TRENDING",
      rating: "★★★★★",
    },

    {
      name: "Bridal Rajputi Poshak",
      price: "₹12,999",
      badge: "PREMIUM",
      rating: "★★★★★",
    },

  ];

  return (

    <section className="featured">

      <div className="featured-heading">

        <span>✦ FEATURED COLLECTION</span>

        <h2>Handpicked Royal Collections</h2>

      </div>

      <div className="featured-grid">

        {products.map((item, index) => (

          <div className="product-card" key={index}>

            <div className="product-image">

              <div className="badge">
                {item.badge}
              </div>

              {/* Product Image */}
              <span>Product Image</span>

            </div>

            <div className="product-info">

              <h3>{item.name}</h3>

              <p className="rating">
                {item.rating}
              </p>

              <h4>{item.price}</h4>

              <button>
                Explore Now
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default FeaturedProducts;