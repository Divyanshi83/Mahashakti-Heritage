import "./WhyChoose.css";

import { GiCastle } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiRolledCloth } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";

function WhyChoose() {

  const features = [

    {
      icon: <GiCastle />,
      title: "Royal Heritage",
      text: "Authentic Rajputi designs inspired by Rajasthan's timeless royal traditions.",
    },

    {
      icon: <MdOutlineDesignServices />,
      title: "Customization",
      text: "Choose your preferred color, fabric, size and design with custom stitching.",
    },

    {
      icon: <GiRolledCloth />,
      title: "Premium Quality",
      text: "Every outfit is crafted using carefully selected premium fabrics and fine workmanship.",
    },

    {
      icon: <FaTruckFast />,
      title: "Safe Delivery",
      text: "Secure packaging with reliable delivery across India.",
    },

  ];

  return (

    <section className="why">

      <div className="why-heading">

        <span>✦ WHY CHOOSE US</span>

        <h2>Why Mahashakti Heritage?</h2>

      </div>

      <div className="why-grid">

        {features.map((item) => (

          <div className="why-card" key={item.title}>

            <div className="why-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default WhyChoose;