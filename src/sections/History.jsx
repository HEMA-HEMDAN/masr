import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HistoryTimeline from "../components/TimeLine";
import Banner from "../components/HistoryBanner";
import Loading from "../components/Loading";
const Ages = () => {
  return (
    <section className="  w-[100%]  bg-cover bg-center bg-no-repeat bg-fixed overflow-hidden">
      <Loading />
      <Navbar />
      <Banner />
      <HistoryTimeline />

      <Footer />
    </section>
  );
};

export default Ages;
