import React from "react";
import AboutUs from "../../components/landing/aboutUs/AboutUs";
import Certificate from "../../components/landing/certificate/Certificate";
import Header from '../../components/Header/Header';

const Home = () => {
  return (
    <div>
      <Header/>
      <AboutUs />
      <Certificate />
    </div>
  );
};

export default Home;
