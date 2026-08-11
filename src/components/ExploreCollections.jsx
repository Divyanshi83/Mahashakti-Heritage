import "./ExploreCollections.css";

import "./ExploreCollections.css";

import rajputiBlue from "../assets/heavy.png";
import fabric from "../assets/plain.png";
import transfer from "../assets/material.png";
import cotton from "../assets/dress.png";
import odhna from "../assets/desgin.png";

function ExploreCollections() {

  const categories = [
    {
      name: "Rajputi Poshak",
      image: rajputiBlue,
    },
    {
      name: "Fabric",
      image: fabric,
    },
    {
      name: "Transfer Material",
      image: transfer,
    },
    {
      name: "Cotton",
      image: cotton,
    },
    {
      name: "Odhna",
      image: odhna,
    },
  ];

  return (
    <section className="explore">

      <div className="explore-heading">
        <span>✦ EXPLORE COLLECTIONS</span>
        <h2>Shop by Category</h2>
      </div>

      <div className="collections-grid">

        {categories.map((item) => (
          <div className="collection-card" key={item.name}>

            <div className="collection-image">
              <img src={item.image} alt={item.name} />
            </div>

            <div className="collection-info">
              <h3>{item.name}</h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default ExploreCollections;