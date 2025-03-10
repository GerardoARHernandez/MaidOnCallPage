import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const location = useLocation(); // Obtenemos la ruta actual

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHome = () => {
    setIsHomeOpen(!isHomeOpen);
  };

  const closeDropdown = () => {
    setIsHomeOpen(false);
  };

  const startCloseTimer = () => {
    timeoutRef.current = setTimeout(() => {
      closeDropdown();
    }, 1000);
  };

  const cancelCloseTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const scrollToSection = (hash) => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const dropdownElement = dropdownRef.current;

    if (isHomeOpen && dropdownElement) {
      dropdownElement.addEventListener("mouseenter", cancelCloseTimer);
      dropdownElement.addEventListener("mouseleave", startCloseTimer);
    }

    return () => {
      if (dropdownElement) {
        dropdownElement.removeEventListener("mouseenter", cancelCloseTimer);
        dropdownElement.removeEventListener("mouseleave", startCloseTimer);
      }
    };
  }, [isHomeOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Función para determinar si un enlace está activo
  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderDropdown = (isOpen, toggle) => (
    <div
      ref={dropdownRef}
      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
      onMouseEnter={cancelCloseTimer}
      onMouseLeave={startCloseTimer}
    >
      <Link
        to="/about"
        className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
          isActive("/about") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        About us
      </Link>
      <Link
        to="/about#company-values"
        className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
          isActive("/about#company-values") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={() => {
          closeDropdown();
          scrollToSection("#company-values");
        }}
      >
        Company Values
      </Link>
      <Link
        to="/about#why-choose-us"
        className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
          isActive("/about#why-choose-us") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={() => {
          closeDropdown();
          scrollToSection("#why-choose-us");
        }}
      >
        Why Choose us
      </Link>
      <Link
        to="/faq"
        className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
          isActive("/faq") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        FAQ
      </Link>
      <a href="#team" className="block px-4 py-2 text-gray-700 hover:bg-blue-200" onClick={closeDropdown}>
        Join Our Team
      </a>
    </div>
  );

  return (
    <>
      <header className="bg-white shadow-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-blue-600">Maid on Call</div>
          <nav className="hidden md:flex space-x-6 text-xl items-center">
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to="/"
                  className={`text-gray-700 hover:text-blue-600 ${
                    isActive("/") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Home
                </Link>
                <button
                  onClick={toggleHome}
                  className="text-gray-700 hover:text-blue-600 ml-1 focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${isHomeOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              {isHomeOpen && renderDropdown(isHomeOpen, toggleHome)}
            </div>
            <Link
              to="/services"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/services") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Cleaning Services
            </Link>
            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/blog") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/certificates"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/certificates") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Gift Certificates
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/contact") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>
          <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Book Appointment
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="relative">
              <div className="flex items-center">
                <Link
                  to="/"
                  className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${
                    isActive("/") ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  Home
                </Link>
                <button
                  onClick={toggleHome}
                  className="text-gray-700 hover:text-blue-600 ml-1 focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${isHomeOpen ? 'transform rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
              </div>
              {isHomeOpen && renderDropdown(isHomeOpen, toggleHome)}
            </div>
            <Link
              to="/services"
              className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${
                isActive("/services") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Cleaning Services
            </Link>
            <Link
              to="/blog"
              className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${
                isActive("/blog") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/certificates"
              className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${
                isActive("/certificates") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Gift Certificates
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 text-gray-700 hover:text-blue-600 ${
                isActive("/contact") ? "text-blue-500 font-bold" : ""
              }`}
            >
              Contact
            </Link>
            <button className="block w-full px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 text-sm">
              Book Appointment
            </button>
          </div>
        )}
      </header>

      {/* Botón de "Regresar arriba" */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default Header;