import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./sections/Home";
import About from "./sections/About";
import History from "./sections/History";
import Pharaohs from "./sections/Pharaohs";
import Games from "./sections/Games";
import Monuments from "./sections/Monuments";
import Museums from "./sections/Museums";
import ScrollToTop from "./components/ScrollToTop";
import HistoryDetail from "./components/HistoryDetail";
import MonumentDetail from "./components/MonumentDetail";
import MuseumDetail from "./components/MuseumDetail";
import Pharoahsdetial from "./components/Pharoahsdetial";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<HistoryDetail />} />

        <Route path="/pharaohs" element={<Pharaohs />} />
        <Route path="/pharaohs/:id" element={<Pharoahsdetial />} />

        <Route path="/games" element={<Games />} />
        <Route path="/monuments" element={<Monuments />} />
        <Route path="/monuments/:id" element={<MonumentDetail />} />

        <Route path="/museums" element={<Museums />} />
        <Route path="/museums/:id" element={<MuseumDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
