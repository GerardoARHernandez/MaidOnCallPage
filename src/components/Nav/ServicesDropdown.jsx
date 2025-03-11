import { Link } from "react-router-dom";
import { forwardRef } from "react";

const ServicesDropdown = forwardRef(
  ({ isActive, closeDropdown, isMobile }, ref) => {
    return (
      <div
        ref={ref}
        className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 text-base"
      >
        <Link
          to="/regular-house-cleaning-ottawa"
          className={`block px-4 py-2 text-gray-700 hover:bg-blue-200 ${
            isActive("/regular-house-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
          }`}
          onClick={closeDropdown}
        >
          Regular House Cleaning
        </Link>
      <Link
        to="/services/spring-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/spring-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Spring Cleaning
      </Link>
      <Link
        to="/services/deep-house-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/deep-house-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Deep House Cleaning
      </Link>
      <Link
        to="/services/one-time-regular-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/one-time-regular-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        One Time Regular Cleaning
      </Link>
      <Link
        to="/services/move-in-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/move-in-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Move In Cleaning
      </Link>
      <Link
        to="/services/move-out-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/move-out-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Move Out Cleaning
      </Link>
      <Link
        to="/services/condo-apartment-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/condo-apartment-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Condo - Apartment Cleaning
      </Link>
      <Link
        to="/services/post-construction-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/post-construction-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Post Construction Cleaning
      </Link>
      <Link
        to="/services/post-renovation-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/post-renovation-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Post Renovation Cleaning
      </Link>
      <Link
        to="office-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/office-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Office Cleaning
      </Link>

      <Link
        to="/services/cleaning-and-organization"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/cleaning-and-organization") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Cleaning And Organization
      </Link>
      <Link
        to="/services/short-term-rental-airbnb"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/short-term-rental-airbnb") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Short Term Rental & Airbnb
      </Link>
      <Link
        to="/services/declutter"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/declutter") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Declutter
      </Link>
      <Link
        to="/services/preparation-for-sale"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/preparation-for-sale") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Preparation For Sale
      </Link>
      <Link
        to="/services/staging-basic"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/staging-basic") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Staging Basic
      </Link>
      <Link
        to="/services/add-on-special-requests"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/add-on-special-requests") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Add On & Special Requests
      </Link>
      <Link
        to="/services/sanitize-service"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/services/sanitize-service") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Sanitize Service
      </Link>
    </div>
  );
});

export default ServicesDropdown;