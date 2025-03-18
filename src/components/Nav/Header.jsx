import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";
import HeaderMobile from "./HeaderMobile";
import ButtonAppoinment from "../ButtonAppoinment";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [timer, setTimer] = useState(null); // Estado para el temporizador
  const dropdownRef = useRef(null);
  const servicesDropdownRef = useRef(null);
  const location = useLocation();

  // Cerrar menús desplegables al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target)
      ) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Reiniciar el temporizador cuando el usuario interactúa con el menú
  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer); // Limpiar el temporizador anterior
    }
    const newTimer = setTimeout(() => {
      closeDropdown(); // Cerrar menús después de 5 segundos de inactividad
    }, 5000); // 5000 ms = 5 segundos
    setTimer(newTimer);
  };

  // Iniciar el temporizador cuando se abre un menú desplegable
  useEffect(() => {
    if (isHomeOpen || isServicesOpen) {
      resetTimer(); // Iniciar el temporizador
    } else {
      if (timer) {
        clearTimeout(timer); // Limpiar el temporizador si los menús están cerrados
      }
    }
  }, [isHomeOpen, isServicesOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleHome = () => {
    setIsHomeOpen(!isHomeOpen);
    setIsServicesOpen(false); // Cerrar el menú de servicios si está abierto
    resetTimer(); // Reiniciar el temporizador al interactuar
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsHomeOpen(false); // Cerrar el menú de Home si está abierto
    resetTimer(); // Reiniciar el temporizador al interactuar
  };

  const closeDropdown = () => {
    setIsHomeOpen(false);
    setIsServicesOpen(false);
    if (timer) {
      clearTimeout(timer); // Limpiar el temporizador al cerrar los menús
    }
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
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

  const isActive = (path) => {
    return location.pathname === path;
  };

  const renderDropdown = (isOpen, toggle, isMobile = false) => (
    <div
      ref={dropdownRef}
      className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
      onMouseEnter={resetTimer} // Reiniciar el temporizador al interactuar con el menú
    >
      <Link
        to="/about"
        className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
          isActive("/about") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={() => {
          closeDropdown();
          resetTimer(); // Reiniciar el temporizador al hacer clic
        }}
        onMouseEnter={resetTimer} // Reiniciar el temporizador al pasar el mouse
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
          resetTimer(); // Reiniciar el temporizador al hacer clic
        }}
        onMouseEnter={resetTimer} // Reiniciar el temporizador al pasar el mouse
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
          resetTimer(); // Reiniciar el temporizador al hacer clic
        }}
        onMouseEnter={resetTimer} // Reiniciar el temporizador al pasar el mouse
      >
        Why Choose us
      </Link>
      <Link
        to="/faq"
        className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
          isActive("/faq") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={() => {
          closeDropdown();
          resetTimer(); // Reiniciar el temporizador al hacer clic
        }}
        onMouseEnter={resetTimer} // Reiniciar el temporizador al pasar el mouse
      >
        FAQ
      </Link>
      <a
        href="/join-our-team"
        className="block px-4 py-2 text-gray-700 hover:bg-blue-200"
        onClick={() => {
          closeDropdown();
          resetTimer(); // Reiniciar el temporizador al hacer clic
        }}
        onMouseEnter={resetTimer} // Reiniciar el temporizador al pasar el mouse
      >
        Join Our Team
      </a>
    </div>
  );

  return (
    <>
      <header className="bg-white shadow-xl">
        <div className="container mx-auto flex justify-between items-center p-4">
          {/* Logo */}
          <a href="/">
            <img
              src="/Logo_SHR_Multi.png" // Ruta de la imagen del logo
              alt="SHR Multiservice Logo"
              className="h-24 w-auto" // Ajusta el tamaño del logo
            />
          </a>

          {/* Menú de navegación (visible en pantallas medianas y grandes) */}
          <nav className="hidden md:flex space-x-7 text-lg lg:text-xl items-center px-2">
            {/* Menú desplegable para Home */}
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
                    className={`w-4 h-4 transition-transform ${
                      isHomeOpen ? "transform rotate-180" : ""
                    }`}
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

            {/* Menú desplegable para Cleaning Services */}
            <div className="relative">
              <div className="flex items-center">
                <p
                  onClick={toggleServices}
                  className={`text-gray-700 hover:text-blue-600 hover:cursor-pointer ${
                    isActive("/services") ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  Cleaning Services
                </p>
                <button
                  onClick={toggleServices}
                  className="text-gray-700 hover:text-blue-600 ml-1 focus:outline-none"
                >
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isServicesOpen ? "transform rotate-180" : ""
                    }`}
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
              {isServicesOpen && (
                <ServicesDropdown
                  isActive={isActive}
                  closeDropdown={closeDropdown}
                  ref={servicesDropdownRef}
                  isMobile={false}
                />
              )}
            </div>

            {/* Enlaces adicionales */}
            <Link
              to="/blog"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/blog") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/certificates"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/certificates") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Gift Certificates
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-blue-600 ${
                isActive("/contact") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex w-3/12 mx-1">
            <ButtonAppoinment />
          </div>

          {/* Botón de menú móvil (visible solo en pantallas pequeñas) */}
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

        {/* Menú móvil (visible solo en pantallas pequeñas) */}
        {isMenuOpen && (
          <HeaderMobile
            isHomeOpen={isHomeOpen}
            isServicesOpen={isServicesOpen}
            toggleHome={toggleHome}
            toggleServices={toggleServices}
            closeMobileMenu={closeMobileMenu}
            renderDropdown={renderDropdown}
            isActive={isActive}
          />
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