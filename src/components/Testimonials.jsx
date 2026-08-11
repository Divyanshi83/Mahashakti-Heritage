import "./Testimonials.css";

import { FaStar } from "react-icons/fa";

function Testimonials() {

  const reviews = [

    {
      name: "Dratika Rathore",
      city: "Jaipur",
      review:
        "Absolutely beautiful Rajputi Poshak. The quality exceeded my expectations and the stitching was perfect.",
    },

    {
      name: "Shiv Kanwar",
      city: "Jodhpur",
      review:
        "Premium fabric and elegant finishing. The customization was exactly as I wanted.",
    },

    {
      name: "Divyanshi Rathore",
      city: "Udaipur",
      review:
        "Luxury packaging, timely delivery and amazing craftsmanship. Highly recommended.",
    },

  ];

  return (

    <section className="testimonials">

      <div className="testimonials-heading">

        <span>✦ TESTIMONIALS</span>

        <h2>What Our Customers Say</h2>

      </div>

      <div className="testimonial-grid">

        {reviews.map((item) => (

          <div className="testimonial-card" key={item.name}>

            <div className="stars">

              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />

            </div>

            <p className="review">

              "{item.review}"

            </p>

            <h3>{item.name}</h3>

            <span className="city">{item.city}</span>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Testimonials;