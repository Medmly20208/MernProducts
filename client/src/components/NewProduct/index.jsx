import React, { useState } from "react";

//api
import { postProduct } from "../../api/index";

//ccss
import styles from "./NewProduct.module.css";

const NewProduct = ({ onClose, toggleData }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [Isloading, setIsLoading] = useState(false);

  const addProductHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    postProduct({
      userId: JSON.parse(localStorage.getItem("userData")).id,
      name,
      quantity,
      price,
    })
      .then((res) => {
        //console.log(res);
        setIsLoading(false);
        toggleData();
        onClose();
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  return (
    <div
      style={{ backgroundColor: "white" }}
      className={styles["sub_container"]}
    >
      <form
        onSubmit={Isloading ? () => {} : addProductHandler}
        className={styles["form_container"]}
      >
        <div>
          <label>Name:</label>
          <br></br>
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Price:</label>
          <br></br>
          <input
            min={1}
            type="number"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <br></br>
          <input
            min={1}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button
          style={{
            background: Isloading ? "gray" : "",
            border: Isloading ? "gray" : "",
          }}
          className="btn"
        >
          {Isloading ? "loading..." : "Add product"}
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
