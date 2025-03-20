import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import ServicesDropdown from "./ServicesDropdown";
import ButtonAppointment from "../Date/ButtonAppoinment";

const HeaderMobile = ({
  isHomeOpen,
  isServicesOpen,
  toggleHome,
  toggleServices,
  closeMobileMenu,
  renderDropdown,
  isActive,
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMobileMenu]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
      <div ref={menuRef} className="fixed inset-y-0 right-0 w-64 bg-white shadow-lg">
        <button
          onClick={closeMobileMenu}
          className="absolute top-4 right-4 text-gray-700 hover:text-blue-600 focus:outline-none"
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
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="pt-16 pb-8 overflow-y-auto h-full">
          {/* Home Dropdown */}
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-3">
              <Link
                to="/"
                className={`text-gray-700 hover:text-blue-600 ${
                  isActive("/") ? "text-blue-600 font-bold" : ""
                }`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <button
                onClick={toggleHome}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
            {isHomeOpen && (
              <div className="pl-4">
                {renderDropdown(isHomeOpen, toggleHome, true)}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* Services Dropdown */}
          <div className="relative">
            <div className="flex items-center justify-between px-4 py-3">
              <p
                className={`text-gray-700 hover:text-blue-600 ${
                  isActive("/services") ? "text-blue-600 font-bold" : ""
                }`}
                onClick={closeMobileMenu}
              >
                Cleaning Services
              </p>
              <button
                onClick={toggleServices}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
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
              <div className="pl-4">
                <ServicesDropdown
                  isActive={isActive}
                  closeDropdown={closeMobileMenu}
                  isMobile={true}
                />
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 my-2"></div>

          {/* Blog Link */}
          <Link
            to="/blog"
            className={`block px-4 py-3 text-gray-700 hover:text-blue-600 ${
              isActive("/blog") ? "text-blue-600 font-bold" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Blog
          </Link>

          {/* Gift Certificates Link */}
          <Link
            to="/certificates"
            className={`block px-4 py-3 text-gray-700 hover:text-blue-600 ${
              isActive("/certificates") ? "text-blue-600 font-bold" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Gift Certificates
          </Link>

          {/* Contact Link */}
          <Link
            to="/contact"
            className={`block px-4 py-3 text-gray-700 hover:text-blue-600 ${
              isActive("/contact") ? "text-blue-600 font-bold" : ""
            }`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          <div className="border-t border-gray-200 my-2"></div>

          {/* Book Appointment Button */}
          <div className="px-4 py-3">
            <ButtonAppointment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;