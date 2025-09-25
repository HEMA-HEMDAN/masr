import React from "react";
import { Link } from "react-router-dom";

const HeroVed = () => {
  return (
    <section className="relative flex justify-center items-center h-screen mb-[50px]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center justify-center gap-6 text-white font-bold text-[35px] md:text-[40px] lg:text-[50px] z-10">
        <img
          src="/herodisc.webp"
          alt="Hero Disk"
          className="w-full md:w-[400px] lg:w-[550px]"
        />
        <Link to="/history">
          <button className="shake bg-[#8b5e3c] text-white text-lg px-6 py-2 border-2 border-[#d4a64d] rounded-full cursor-pointer font-bold transition duration-300 ease-in-out shadow-[0_0_10px_rgba(212,166,77,0.4)] relative hover:scale-105">
            Go to History
          </button>
        </Link>
      </div>

      <video
        className="h-full w-full object-cover"
        src="./Heroved.mp4"
        type="video/mp4"
        autoPlay
        loop
        muted
      />
    </section>
  );
};

export default HeroVed;
