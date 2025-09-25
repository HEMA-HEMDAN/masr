import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: 1, name: "Main", path: "/" },
    { id: 2, name: "History", path: "/history" },
    { id: 3, name: "Pharaohs", path: "/pharaohs" },
    { id: 4, name: "Monuments", path: "/monuments" },
    { id: 5, name: "Museums", path: "/museums" },
    { id: 7, name: "About", path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all ${
        scroll ? "backdrop-blur-lg shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 text-2xl">
        <Link to="/" className="text-2xl font-bold text-yellow-500">
          <img src="/logo.png" alt="Logo" className="logo" />
        </Link>
        <div className="hidden lg:flex space-x-6">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`transition ${
                location.pathname === item.path
                  ? "text-[#fcd34d] font-semibold"
                  : "text-white hover:text-[#fcd34d]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <button
          className="lg:hidden text-white cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          <i className={`fas ${navOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
      {navOpen && (
        <div className="lg:hidden backdrop-blur-lg text-white space-y-4 p-6 absolute top-16 left-0 w-full">
          {navLinks.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className={`block text-center transition ${
                location.pathname === item.path
                  ? "text-yellow-400 font-semibold"
                  : "text-white hover:text-yellow-400"
              }`}
              onClick={() => setNavOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
