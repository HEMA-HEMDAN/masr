import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Loading from "../components/Loading";

const sections = [
  {
    title: "Hema Hemdan",
    text: "that's me 😊",
    images: [
      "/about/hema2.jpg",
      "/about/hema1.jpg",
      "/about/hema4.jpg",
      "/about/hema6.jpg",
      "/about/hema7.jpg",
      "/about/hema8.jpg",
    ],
  },
  {
    title: "Mohamed Wael",
    text: "Hi, I'm Mohamed Wael Ellakany, a computer science student at Damanhur University, living in Damanhour. I have a strong passion for technology, with skills in front-end web development and C++. I'm always eager to learn new technologies and build creative, user-friendly projects.",
    images: ["/about/mo wael.webp", "/about/mowael2.jpg"],
  },
  {
    title: "Nourhan",
    text: "Meet the divine rulers of Ancient Egypt — from the mighty Ramses II to the mysterious Tutankhamun. Legends that shaped civilization.",
    images: ["about/noor.jpg"],
  },
  {
    title: "mohamed abo fool",
    text: "Explore the treasures of Egypt housed in world-famous museums, preserving thousands of years of awe-inspiring art, relics, and mysteries.",
    images: ["about/abofool.webp"],
  },
  {
    title: "Yara Emad Eid Ahmed",
    text: "Explore the treasures of Egypt housed in world-famous museums, preserving thousands of years of awe-inspiring art, relics, and mysteries.",
    images: ["/heroSlider/4.jpg"],
  },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      <Loading />
      <Navbar />

      <section className="museum h-[100vh] bg-[url('/about/hero.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
        <div className="max-w-[1000px] mx-auto text-center">
          <h1 className="text-5xl text-[#fcd34d] font-bold mb-4">
            It's nice to meet you, let us introduce ourselves
          </h1>
          <h1 className="text-5xl text-white font-bold mb-6">
            We are first-year computer science students at Damanhour University
          </h1>

          <button
            className="px-9 py-4 text-[1.1em] rounded-full bg-gradient-to-r from-[#d6b372] to-[#f5e6b0] text-black cursor-pointer relative overflow-hidden shadow-[0_0_10px_#d6b372] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_#ffd700,0_0_40px_#ffd70070]"
            onClick={() =>
              window.scrollTo({
                top: document.getElementById("about").offsetTop,
                behavior: "smooth",
              })
            }
          >
            Learn More about us
          </button>
        </div>
      </section>

      <section id="about" className="py-12 sm:py-20">
        <h1 className="font-bold text-center text-5xl text-[#fcd34d] [text-shadow:2px_3px_#111111]">
          Our humble team
        </h1>

        <div className="flex flex-wrap justify-center gap-6 mt-12 px-4 sm:px-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#07182E] rounded-2xl p-6 text-center
            w-full sm:w-[48%] md:w-[40%] lg:w-[45%] justify-between 
            shadow-[0_0_30px_rgba(180,100,255,0.4)] transition-transform duration-300 
            hover:-translate-y-2 mb-6 "
            >
              <h2 className="text-3xl font-bold mb-4 text-[#fcd34d]">
                {section.title}
              </h2>
              <p className="text-white text-base">{section.text}</p>

              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                className="rounded-2xl shadow-lg mt-6 w-full h-[400px] md:h-[500px] lg:h-[70vh]"
                centeredSlides={true}
              >
                {section.images.map((img, index) => (
                  <SwiperSlide key={index} className="w-full h-full">
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-contain rounded-2xl"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
