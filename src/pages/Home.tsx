import React from "react";
import BiographySection from "../components/BiographySection";
const Patients = React.lazy(() => import("../components/Patients"));
const Videos = React.lazy(() => import("../components/Videos"));

const Home = () => {
  return (
    <div className="">
      <BiographySection />
      <Patients />
      <Videos />
    </div>
  );
};

export default Home;
