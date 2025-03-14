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
        to="/move-out-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/move-out-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
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
        to="/post-renovation-cleaning-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/post-renovation-cleaning-ottawa") ? "bg-blue-200 text-blue-950" : ""
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
        to="/cleaning-and-organization-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/cleaning-and-organization-ottawa") ? "bg-blue-200 text-blue-950" : ""
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
        to="/declutter-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/declutter-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Declutter
      </Link>
      <Link
        to="/home-preparation-for-sale-cleaning-service-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/home-preparation-for-sale-cleaning-service-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Preparation For Sale
      </Link>
      <Link
        to="/home-staging-basic-ottawa"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/home-staging-basic-ottawa") ? "bg-blue-200 text-blue-950" : ""
        }`}
        onClick={closeDropdown}
      >
        Staging Basic
      </Link>
      <Link
        to="/add-on-special-requests"
        className={`block px-4 py-2  text-gray-700 hover:bg-blue-200 ${
          isActive("/add-on-special-requests") ? "bg-blue-200 text-blue-950" : ""
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