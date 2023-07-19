import React, { useState, useEffect } from "react";

//api
import { getProductsByUserId, deleteProductById } from "../../api/index";

//components
import Modal from "../../components/Modal";
import NewProduct from "../../components/NewProduct";
import EditProduct from "../../components/EditProduct";

//css
import styles from "./Products.module.css";

//react router
import { useNavigate } from "react-router-dom";

const index = () => {
  const [loading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [dataChanged, setDataChanged] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");

  const navigate = useNavigate();

  const toggleData = () => setDataChanged((prev) => !prev);

  const openAddModal = () => setIsAddProductModalOpen(true);
  const closeAddModal = () => setIsAddProductModalOpen(false);

  const openEdit = (product) => {
    setIsEditProductModalOpen(true);
    setSelectedProduct(product);
  };
  const closeEdit = () => setIsEditProductModalOpen(false);

  useEffect(() => {
    setIsLoading(true);
    getProductsByUserId({
      userId: JSON.parse(localStorage.getItem("userData")).id,
      name: searchProduct,
    })
      .then((res) => {
        setProducts(res.data.data);
      })
      .catch((err) => {
        //console.log(err);
      });
    setIsLoading(false);
  }, [dataChanged, searchProduct]);

  const deleteProduct = (id) => {
    deleteProductById({ productId: id })
      .then((res) => {
        //console.log(res);
        toggleData();
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  const logout = () => {
    localStorage.setItem("userData", null);
    localStorage.setItem("token", null);
    navigate("/login");
  };

  return (
    <>
      <div>
        <button
          className="btn"
          style={{ position: "fixed", top: "10px", left: "10px" }}
          onClick={logout}
        >
          Logout
        </button>
      </div>
      <div className={styles["container"]}>
        <div>
          <div className={styles["sub_container"]}>
            <button className="btn" onClick={openAddModal}>
              Add product
            </button>
            <input
              type="text"
              placeholder="search by name"
              onChange={(e) => setSearchProduct(e.target.value)}
            ></input>
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>
                {products.length === 0 && (
                  <tr>
                    <td>No products</td>
                  </tr>
                )}
                {products?.map((product, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tr>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                          <button
                            onClick={() => openEdit(product)}
                            className="btn"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => deleteProduct(product._id)}
                            className="errorBtn"
                            style={{ marginLeft: "10px" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isAddProductModalOpen && (
        <Modal onClose={closeAddModal}>
          <NewProduct onClose={closeAddModal} toggleData={toggleData} />
        </Modal>
      )}
      {isEditProductModalOpen && (
        <Modal onClose={closeEdit}>
          <EditProduct
            productId={selectedProduct._id}
            onClose={closeEdit}
            product={selectedProduct}
            toggleData={toggleData}
          />
        </Modal>
      )}
    </>
  );
};

export default index;
