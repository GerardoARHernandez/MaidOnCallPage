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
        to="/spring-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/spring-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Spring Cleaning
      </Link>
      <Link
        to="/deep-house-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/deep-house-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Deep House Cleaning
      </Link>
      <Link
        to="/one-time-regular-cleaning"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/one-time-regular-cleaning") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        One Time Regular Cleaning
      </Link>
      <Link
        to="/move-in-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/move-in-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
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
        to="/apartment-condo-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/apartment-condo-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Condo - Apartment Cleaning
      </Link>
      <Link
        to="/post-construction-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/post-construction-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
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
        to="/office-cleaning-ottawa"
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
        to="/short-term-rental-airbnb-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/short-term-rental-airbnb-ottawa") ? "bg-blue-200 text-blue-950" : ""
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
        to="/desinfection-services-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/desinfection-services-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Sanitize Service
      </Link>
    </div>
  );
});

export default ServicesDropdown;