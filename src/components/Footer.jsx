import React from 'react';
import { Link } from 'react-router-dom';
import { CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo y Descripción */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/Logo_SHR_Multi_1.png" // Reemplaza con la ruta de tu logo
              alt="SHR Multiservice Logo"
              className="w-40 mb-4"
            />
            <p className="text-base text-center text-gray-400 uppercase">SHR MultiService</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-400">Services</h3>
            <ul className="space-y-2">
              {[
                { to: "regular-house-cleaning-ottawa", text: "Regular House Cleaning" },
                { to: "office-cleaning-ottawa", text: "Office Cleaning" },
                { to: "apartment-condo-cleaning-ottawa", text: "Condo & Apartment Cleaning" },
                { to: "move-out-cleaning-ottawa", text: "Move Out Cleaning" },
                { to: "move-in-cleaning-ottawa", text: "Move In Cleaning" },
                { to: "post-construction-cleaning-ottawa", text: "Post-Construction Cleaning" },
                { to: "post-renovation-cleaning-ottawa", text: "Post-Renovation Cleaning" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-base text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-400">Company</h3>
            <ul className="space-y-2">
              {[
                { to: "about", text: "About" },
                { to: "join-our-team", text: "Career" },
                { to: "blog", text: "Blog" },
                { to: "contact", text: "Contact Us" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-base text-gray-300 hover:text-blue-400 transition duration-300"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-400">Locations</h3>
            <ul className="space-y-2">
              {[
                "Gatineau",
                "Kanata",
                "Richmond",
                "Orleans",
                "Vanier",
                "Greely",
                "Nepean",
                "Manotick",
                "Metcalfe",
                "Osgoode",
                "Stittville",
              ].map((location, index) => (
                <li key={index} className="text-base text-gray-300">
                  {location}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-lg text-blue-400">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <a
                  href="tel:+6132657228"
                  className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  (613) 265-7228
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="mailto:shrmultiservice@gmail.com"
                  className="flex items-center text-base text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  shrmultiservice@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://www.facebook.com/bestcleanerever/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.664l-.42 2.89h-2.244v6.987C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Follow Us on Facebook
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-gray-300 hover:text-blue-400 transition duration-300"
                >
                  <CiInstagram className='mr-2'/>
                  Follow Us on Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright y Privacidad */}
        <div className="mt-8 pt-8 border-t-2 border-gray-700 flex flex-col md:flex-row justify-between items-center text-base text-gray-400">
          <p>&copy; Copyright {new Date().getFullYear()} SHR MULTISERVICE | Build By TekRobot</p> 
          <div className="flex items-center mt-4 md:mt-0">
            <Link
              to="/privacy"
              className="mr-4 hover:text-blue-400 transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;