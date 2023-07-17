import React, { useState } from "react";

//api
import { updateProductById } from "../../api/index";

//css
import styles from "./EditProduct.module.css";

const EditProduct = ({ productId, onClose, product, toggleData }) => {
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);

  const EditProduct = (event) => {
    event.preventDefault();
    updateProductById({
      productId,
      name,
      quantity,
      price,
    })
      .then((res) => {
        //console.log(res);
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
      <form onSubmit={EditProduct} className={styles["form_container"]}>
        <div>
          <label>Name:</label>
          <br></br>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Price:</label>
          <br></br>
          <input
            min={1}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <br></br>
          <input
            min={1}
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <button className="btn">Edit product</button>
      </form>
    </div>
  );
};

export default EditProduct;
