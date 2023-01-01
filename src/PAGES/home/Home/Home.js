import React from "react";
import useTitle from "../../../HOOKS/useTitle/useTitle";
import Carousal from "../Carousal/Carousal";
import Features from "../Features/Features";
import Hero from "../Hero/Hero";
const Home = () => {
  useTitle("Home");
  return (
    <div className="bg-gray-50 dark:bg-teal-700">
      <Hero></Hero>
      <Features></Features>
      {/* <Carousal></Carousal> */}
    </div>
  );
};

export default Home;
