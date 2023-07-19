import React, { useState } from "react";

//api
import { login } from "../../api/index";

//router
import { useNavigate, Link } from "react-router-dom";

//css
import styles from "./Login.module.css";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    setError(null);
    login({ email, password })
      .then((res) => {
        //console.log(res);
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        navigate("/products");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["sub_container"]}>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className={styles["form_container"]}>
          {error && <p className="error">*{error}</p>}
          <div>
            <p style={{ margin: "5px" }}>
              <span style={{ fontWeight: "bold" }}>Email:</span>
              mly2002@gmail.com
            </p>
            <p style={{ margin: "5px" }}>
              <span style={{ fontWeight: "bold" }}>Password:</span>test123ml$KDE
            </p>
          </div>
          <div>
            <label>Email:</label>
            <br></br>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <label>Password:</label>
            <br></br>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button>Connect</button>
        </form>
        <div className={styles["link"]}>
          <p>Don't have account?</p>
          <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default index;
