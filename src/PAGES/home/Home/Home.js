import React from "react";
import useTitle from "../../../HOOKS/useTitle/useTitle";
import Carousal from "../Carousal/Carousal";

const Home = () => {
  useTitle("Home");
  return (
    <div className="min-h-screen">
      <Carousal></Carousal>
    </div>
  );
};

export default Home;
