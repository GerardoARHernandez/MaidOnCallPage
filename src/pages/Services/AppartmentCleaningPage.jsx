import React from 'react'
import ButtonAppoinment from '../../components/ButtonAppoinment';

const AppartmentCleaningPage = () => {
  return (
        <>
          {/* Hero Section */}
          <section
            className="relative w-full h-64 flex items-center justify-center"
            style={{
              backgroundImage: 'url("/service-10.webp")', // Reemplaza con tu imagen
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white mb-4">Regular House Cleaning</h1>
                <ButtonAppoinment />
            </div>
          </section>
    
          <div className="container mx-auto p-4 pt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Texto (2/3 del espacio) */}
              <div className="md:col-span-3 pb-20">
                <p className="text-gray-700 mb-4">
                    The objective of cleaning is not just to clean, but to feel cleanness and freshness in your apartment or condo.
                </p>
                <p className="text-gray-700 mb-4">
                    SHR Multiservice apartment/condo cleaning in <a href="ottawa.ca" className="text-blue-400">Ottawa</a> offers you the time you need while our team is taking care of your place, we make sure all the areas are mint clean.
                </p>
                <h2 className="text-2xl font-semibold mb-4">Complete checklist of our apartment & condo cleaning service:</h2>
    
                {/* Todas las áreas */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">All areas</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Dust surfaces</li>
                    <li>Dust and hand wipe furniture tops</li>
                    <li>Dust ceiling fans (within reach)</li>
                    <li>Vacuum carpets</li>
                    <li>Vacuum and damp mop floors</li>
                    <li>Dust furniture</li>
                    <li>Dust pictures frames</li>
                    <li>Dust lamp and lamp shades</li>
                    <li>Dust and clean mirrors</li>
                    <li>Empty all trash</li>
                  </ul>
                </div>
    
                  {/* Baños */}
                  <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Bathrooms</h3>
                      <ul className="list-disc list-inside text-gray-700">
                      <li>Dust, clean and disinfect surfaces</li>
                      <li>Dust cabinets, door panels</li>
                      <li>Clean, disinfect, and shine showers and tubs</li>
                      <li>Clean and disinfect toilets inside and out</li>
                      <li>Clean and disinfect doorknobs and switch plates</li>
                      <li>Shine fixtures</li>
                      <li>Vacuum and damp mop floors</li>
                      <li>Empty trash</li>
                      </ul>
                  </div>
    
                  {/* Cocina */}
                  <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Kitchen</h3>
                      <ul className="list-disc list-inside text-gray-700">
                      <li>Dust, clean and disinfect surfaces</li>
                      <li>Dust cabinets, door panels</li>
                      <li>Clean and disinfect countertops</li>
                      <li>Clean exterior of appliances</li>
                      <li>Clean inside and outside of microwave</li>
                      <li>Clean stove top and hood</li>
                      <li>Clean sink and faucets</li>
                      <li>Vacuum and damp mop floors</li>
                      <li>Empty trash</li>
                      </ul>
                  </div>
  
                  {/* Dormitorios */}
                  <div className="mt-4">
                      <h3 className="text-xl font-semibold mb-2">Bedrooms</h3>
                      <ul className="list-disc list-inside text-gray-700">
                          <li>Dust surfaces</li>
                          <li>Dust and hand wipe furniture</li>
                          <li>Vacuum carpets</li>
                          <li>Vacuum and damp mop floors (if non-carpet)</li>
                          <li>Change sheets (upon request)</li>
                          <li>Make beds (upon request)</li>
                          <li>Empty trash</li>
                          <li>Clean under the bed</li>
                      </ul>
                  </div>               
                    
                  {/* Enlace de descarga */}
                  <a
                  href="https://maidoncall.ca/wp-content/uploads/2021/02/regular-house-cleaning-check-list.pdf"
                  download
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
                  > Click here to download our Apartment & Condo checklist</a>
  
              </div>
    
              {/* Imágenes (1/3 del espacio) */}
              <div className="col-span-2">
                <img src="/service-9.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
                <img src="/service-3.webp" alt="Sala de estar limpia" className="w-full rounded-lg mb-4" />
              </div>
            </div>

            <div className='text-center flex flex-col items-center pb-10'>
                <h2 className='text-4xl font-semibold py-8'>Need Help With Cleaning?</h2>
                <ButtonAppoinment />
            </div>
          </div>
        </>
      );
    };

export default AppartmentCleaningPage