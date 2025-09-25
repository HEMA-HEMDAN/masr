import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroVed from "../components/Hema";
import EgyptSections from "../components/Card";
import Loading from "../components/Loading";
const Home = () => {
  return (
    <section>
      <Loading />
      <Navbar />
      <HeroVed />
      <h1 className="text-center mb-10" id="auto-show">
        <span className="text-[#8392e2] font-bold text-[30px] md:text-[50px] block">
          Discover
        </span>
        <span className="text-[#fff] font-bold text-[30px] md:text-[50px]">
          The History of Egypt
        </span>
      </h1>
      <EgyptSections />

      <Footer />
    </section>
  );
};

export default Home;
