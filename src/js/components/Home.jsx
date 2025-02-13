import React from "react";
import Counter from "./Counter";
import Crono from "./Crono";

//include images into your bundle

//create your first component
const Home = () => {
  return (
    <div className="container m-auto">
      <Counter />
      <Crono />
    </div>
  );
};

export default Home;
