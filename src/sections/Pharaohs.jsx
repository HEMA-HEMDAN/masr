import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pharoahsdata from "../components/Pharoahsdata";
import PharaohSection from "../components/Pharaohbanner";
import Loading from "../components/Loading";
const Pharaohs = () => {
  return (
    <section>
      <Loading />
      <Navbar />
      <PharaohSection />
      <Pharoahsdata />

      <Footer />
    </section>
  );
};

export default Pharaohs;
