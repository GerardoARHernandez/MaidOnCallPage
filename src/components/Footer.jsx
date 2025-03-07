import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo y Descripción */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/path/to/your/logo.png" // Reemplaza con la ruta de tu logo
              alt="Maid On Call Logo"
              className="w-32 mb-4"
            />
            <p className="text-sm">HOME GENERAL SERVICE</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Services</h3>
            <ul className="text-sm">
              <li>Regular House Cleaning</li>
              <li>Office Cleaning</li>
              <li>Condo & Apartment Cleaning</li>
              <li>Move Out Cleaning</li>
              <li>Move In Cleaning</li>
              <li>Post-Construction Cleaning</li>
              <li>Post-Renovation Cleaning</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Company</h3>
            <ul className="text-sm">
              <li>About</li>
              <li>Career</li>
              <li>Blog</li>
              <li>COVID-19</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Locations</h3>
            <ul className="text-sm">
              <li>Gatineau</li>
              <li>Kanata</li>
              <li>Richmond</li>
              <li>Orleans</li>
              <li>Vanier</li>
              <li>Greely</li>
              <li>Nepean</li>
              <li>Manotick</li>
              <li>Metcalfe</li>
              <li>Osgoode</li>
              <li>Stittville</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-2 text-lg">Contact</h3>
            <ul className="text-sm">
              <li className="flex items-center mb-1">
                <a href="tel:+613618-0969"></a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
                (613) 618-0969
              </li>
              <li className="flex items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
                booking@maidoncall.ca
              </li>
              <li className="flex items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
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
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.494 4.506a7.97 7.97 0 012.24 5.674c0 4.418-3.582 8-8 8a8 8 0 110-16 7.97 7.97 0 015.76 2.326zM12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"
                  />
                </svg>
                Follow Us on Instagram
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright y Privacidad */}
        <div className="mt-8 pt-4 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; Copyright 2023 MAIDONCALL.</p>
          <div className="flex items-center">
            <a href="/privacy" className="mr-4">Privacy Policy</a>
            <a href="#" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;