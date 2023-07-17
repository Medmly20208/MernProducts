import React, { useState } from "react";

//api
import { signup } from "../../api/index";

//router
import { useNavigate, Link } from "react-router-dom";

//css
import styles from "./Signup.module.css";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    setError(null);
    setIsLoading(true);
    signup({ email, password, confirmPassword })
      .then((res) => {
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        setIsLoading(false);
        navigate("/products");
      })
      .catch((error) => {
        setError(error.response.data.message);
        setIsLoading(false);
      });
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["sub_container"]}>
        <h2>Signup</h2>
        <form onSubmit={handleSignUp} className={styles["form_container"]}>
          {error && <p className="error">*{error}</p>}
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
          <div>
            <label>confirm Password:</label>
            <br></br>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
          </div>
          <button>{isLoading ? "loading" : "Create account"}</button>
        </form>
        <div className={styles["link"]}>
          <p>Already have account?</p>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default index;
