import React, { useState } from "react";

//api
import { signup } from "../../api/index";

//router
import { useNavigate } from "react-router-dom";

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = (event) => {
    event.preventDefault();
    setError(null);
    signup({ email, password, confirmPassword })
      .then((res) => {
        console.log(res);
        localStorage.setItem("userData", JSON.stringify(res.data.data));
        navigate("/products");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignUp}>
        {error && <p>{error}</p>}
        <div>
          <label>Email</label>
          <br></br>
          <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <label>Password</label>
          <br></br>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label>confirm Password</label>
          <br></br>
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <button>Craete account</button>
      </form>
    </div>
  );
};

export default index;
