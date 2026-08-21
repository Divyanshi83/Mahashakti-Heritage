import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CustomizePoshak.css";

function CustomizePoshak() {

  const location = useLocation();
  const navigate = useNavigate();

  const selectedProduct =
    location.state?.product || "Rajputi Poshak";


  const [formData, setFormData] = useState({
    fabric: "",
    colour: "",
    odhna: "",
    work: "",
    lace: "",
    measurements: "",
    additionalDetails: "",
  });


  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    const orderData = {
      product: selectedProduct,
      ...formData,
    };

    navigate("/order-details", {
      state: orderData,
    });

  };


  return (

    <section className="customize-page">

      {/* =========================
          Heading
      ========================= */}

      <div className="customize-heading">

        <span>
          ✦ CUSTOMIZE YOUR POSHAK
        </span>

        <h1>
          Create Your Royal Poshak
        </h1>

        <p>
          Personalize your poshak with your preferred fabric,
          colour, work and traditional details.
        </p>

      </div>


      {/* =========================
          Selected Poshak
      ========================= */}

      <div className="selected-poshak">

        <span>
          SELECTED POSHAK
        </span>

        <h2>
          {selectedProduct}
        </h2>

      </div>


      {/* =========================
          Customization Form
      ========================= */}

      <form
        className="customize-form"
        onSubmit={handleSubmit}
      >

        {/* =========================
            Fabric
        ========================= */}

        <div className="form-group">

          <label htmlFor="fabric">
            Select Fabric
          </label>

          <select
            id="fabric"
            name="fabric"
            value={formData.fabric}
            onChange={handleChange}
            required
          >

            <option value="">
              Choose Fabric
            </option>

            <option value="Chanderi">
              Chanderi
            </option>

            <option value="Resham">
              Resham
            </option>

            <option value="Cotton">
              Cotton
            </option>

            <option value="Premium Fabric">
              Premium Fabric
            </option>

          </select>

        </div>


        {/* =========================
            Colour
        ========================= */}

        <div className="form-group">

          <label htmlFor="colour">
            Select Colour
          </label>

          <select
            id="colour"
            name="colour"
            value={formData.colour}
            onChange={handleChange}
            required
          >

            <option value="">
              Choose Colour
            </option>

            <option value="Maroon">
              Maroon
            </option>

            <option value="Royal Blue">
              Royal Blue
            </option>

            <option value="Green">
              Green
            </option>

            <option value="Pink">
              Pink
            </option>

            <option value="Mustard">
              Mustard
            </option>

            <option value="Custom Colour">
              Custom Colour
            </option>

          </select>

        </div>


        {/* =========================
            Odhna
        ========================= */}

        <div className="form-group">

          <label htmlFor="odhna">
            Odhna
          </label>

          <select
            id="odhna"
            name="odhna"
            value={formData.odhna}
            onChange={handleChange}
          >

            <option value="">
              Choose Odhna
            </option>

            <option value="Chanderi Odhna">
              Chanderi Odhna
            </option>

            <option value="Printed Odhna">
              Printed Odhna
            </option>

            <option value="Designer Odhna">
              Designer Odhna
            </option>

            <option value="Custom Odhna">
              Custom Odhna
            </option>

          </select>

        </div>


        {/* =========================
            Work / Design
        ========================= */}

        <div className="form-group">

          <label htmlFor="work">
            Select Work / Design
          </label>

          <select
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          >

            <option value="">
              Choose Work
            </option>

            <option value="Peacock Work">
              Peacock Work
            </option>

            <option value="Udaipuri Danka Work">
             Udaipuri Danka Work
            </option>

            <option value="Gota Patti">
              Gota Patti
            </option>

            <option value="Ghughroo">
              Ghughroo
            </option>

            <option value="Resham Work">
              Resham Work
            </option>

            <option value="Chanderi Work">
              Chanderi Work
            </option>

            <option value="Sikiya Work">
              Sikiya Work
            </option>

            <option value="Jaipuri danka Work">
              Jaipuri Danka Work
            </option>

            <option value="Calcutti Work">
              Calcutti Work
            </option>

            <option value="Silver laffa Work">
              Silver laffa Work
            </option>

            <option value="Sikka Work">
              Sikka Work
            </option>
          </select>

        </div>


        {/* =========================
            Lace / Border
        ========================= */}

        <div className="form-group">

          <label htmlFor="lace">
            Lace / Border
          </label>

          <select
            id="lace"
            name="lace"
            value={formData.lace}
            onChange={handleChange}
          >

            <option value="">
              Choose Lace / Border
            </option>

            <option value="Copper Lace">
              Copper Lace
            </option>

            <option value="Silver Lace">
              Silver Lace
            </option>

            <option value="Gota Patti Lace">
              Gota Patti Lace
            </option>

            <option value="Silver Lafaa">
              Silver Lafaa
            </option>

            <option value="No Lace">
              No Lace
            </option>

          </select>

        </div>


        {/* =========================
            Measurements
        ========================= */}

        <div className="form-group full-width">

          <label htmlFor="measurements">
            Measurements
          </label>

          <textarea
            id="measurements"
            name="measurements"
            value={formData.measurements}
            onChange={handleChange}
            placeholder="Enter your required measurements..."
            rows="4"
          ></textarea>

        </div>


        {/* =========================
            Additional Customization
        ========================= */}

        <div className="form-group full-width">

          <label htmlFor="additionalDetails">
            Additional Customization
          </label>

          <textarea
            id="additionalDetails"
            name="additionalDetails"
            value={formData.additionalDetails}
            onChange={handleChange}
            placeholder="Tell us anything else you would like to customize..."
            rows="5"
          ></textarea>

        </div>


        {/* =========================
            Submit
        ========================= */}

        <div className="customize-submit">

          <button type="submit">
            Continue with Order Details
          </button>

        </div>

      </form>

    </section>

  );
}

export default CustomizePoshak;