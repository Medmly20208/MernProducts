import React from "react";

//api
import { getProductsByUserId } from "../../api/index";

const index = () => {
  console.log(localStorage.getItem("userData"));

  getProductsByUserId({
    userId: JSON.parse(localStorage.getItem("userData")).id,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return <div>index</div>;
};

export default index;
