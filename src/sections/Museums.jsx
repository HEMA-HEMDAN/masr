import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MVed from "../components/MVed";
import MuseumsSection from "../components/MuseumData";
import Loading from "../components/Loading";
const Museums = () => {
  return (
    <section className=" bg-[url('/musum/hero.jpg')] w-[100%]  bg-cover bg-center bg-no-repeat bg-fixed">
      <Loading />
      <Navbar />
      <MVed />
      <MuseumsSection />

      <Footer />
    </section>
  );
};

export default Museums;
