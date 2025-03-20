import React from 'react'
import ButtonAppoinment from '../../components/Date/ButtonAppoinment';

const PostConstruction = () => {
    return (
        <>
          {/* Hero Section */}
          <section
            className="relative w-full h-64 flex items-center justify-center"
            style={{
              backgroundImage: 'url("/service-13.webp")', 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white mb-4">Post Construction Cleaning</h1>
              <ButtonAppoinment />
            </div>
          </section>
    
          <div className="container mx-auto p-4 pt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Texto (2/3 del espacio) */}
              <div className="md:col-span-3 pb-20">
                <p className="text-gray-700 mb-4">
                    Once the last construction tool is gone, it is time to remove all the settled dust, this means providing extensive cleaning on any construction site. From removing all the tiny traces of sawdust and paint spatters to scrubbing the floors, our team will make sure that your space is ready to use as soon as possible.
                </p>
                <p className="text-gray-700 mb-4">
                    Our construction cleaning services ensure that everything is handled quickly and efficiently from top to bottom. Whether it’s a newly renovated office or a newly constructed home, we have the skills to handle it all!
                </p>
                <h2 className="text-2xl font-semibold mb-4">Complete checklist of our post construction cleaning service:</h2>
                    
                <div className='mt-8'>
                  <h3 className="text-xl font-semibold mb-2">Entrances & Exits:</h3>
                  <p className='py-6'>All doors that lead into the building will be inspected and cleaned. These areas are the first things new owner always notice when they arrive on property.</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Dust exterior lights</li>
                    <li>Make sure all lights are working</li>
                    <li>Wipe down windows</li>
                    <li>Clean doors, door frames, and doorknobs</li>
                    <li>Sweep entrance ways</li>
                  </ul>
                </div>

                <div className='mt-8'>
                  <h3 className="text-xl font-semibold mb-2">Living/Common Areas:</h3>
                  <p className='py-6'>The living rooms and common areas should be clear, clean, well-lit, and free of debris. All evidence that you were there working should be removed.</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Floors are swept and vacuumed/mopped</li>
                    <li>All lights are working and free of dust</li>
                    <li>Doorknobs and light switches are clean</li>
                    <li>Windows, windowsills, and window tracks are cleaned and dusted</li>
                    <li>No evidence of paint drops on the floors or scuff marks on the walls</li>
                    <li>Trash removed</li>
                    <li>Doors and doorframes cleaned</li>
                    <li>Remove paints drops from all doorknobs</li>
                  </ul>
                </div>

                {/* Cocina */}
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-2">Kitchen</h3>
                    <p className='py-6'>Kitchens can be complicated spaces, filled with crevices and spaces that often get overlooked. Part of completing our post-construction cleaning is making sure the kitchen area is clean and everything is in order.</p>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Dust, clean and disinfect surfaces</li>
                        <li>Clean inside and outside appliances</li>
                        <li>Clean inside and outside cabinets and drawers</li>
                        <li>Make sure all cabinet hardware is clean and secure</li>
                        <li>Sweep and vacuum/mop floors</li>
                        <li>Clean windows, windowsills and window tracks</li>
                        <li>Remove trash</li>
                        <li>Clean sink and backsplash</li>
                        <li>Wipe down all fixtures and finishes</li>
                    </ul>
                </div>
    
                  {/* Baños */}
                  <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-2">Bathrooms</h3>
                      <p className='py-6'>Although they’re usually one of the smallest rooms in a house, bathrooms must be clean and in working order by the end of a construction project.</p>
                      <ul className="list-disc list-inside text-gray-700">
                        <li>Sink, tub, shower cleaned and sanitized</li>
                        <li>Toilet is sanitized</li>
                        <li>Mirrors, cabinets, and counters are wiped down</li>
                        <li>Floors are swept and vacuumed/mopped</li>
                        <li>Inside cabinets and drawers are cleaned</li>
                        <li>Windows, baseboards, light fixtures, doorknobs and doorframes are cleaned</li>
                        <li>Trash is removed</li>
                      </ul>
                  </div>
  
                  {/* Dormitorios */}
                  <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-2">Bedrooms</h3>
                      <p className='py-6'>Removing trash, dusting light fixtures, and ensuring the floor, walls, and windows are clean is vital in a clean and complete bedroom area. Some other things to look out for when inspecting a bedroom area include:</p>
                      <ul className="list-disc list-inside text-gray-700">
                          <li>Cleaning inside closets</li>
                          <li>Dusting light fixtures and ceiling fans</li>
                          <li>Wiping down baseboards</li>
                          <li>Dusting built-in shelving units</li>
                          <li>Dusting grates and vents</li>
                          <li>Removing paint from hinges</li>
                      </ul>
                  </div>               
                    
                  {/* Enlace de descarga */}
                  <a
                  href="https://maidoncall.ca/wp-content/uploads/2021/02/complete-checklist-Post-construction-cleaning.pdf"
                  download
                  target="_blank" rel="noopener noreferrer"
                  className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
                  > Click here to download our post construction cleaning checklist</a>
  
              </div>
    
              {/* Imágenes (1/3 del espacio) */}
                <div className="col-span-2">
                    <div className="w-full h-96 overflow-hidden rounded-lg mb-4"> 
                        <img src="/service-11.webp" alt="Cocina limpia" className="w-full h-full object-center object-cover" />
                    </div>
                    <div className="w-full h-96 overflow-hidden rounded-lg mb-4">
                        <img src="/service-12.webp" alt="Sala de estar limpia" className="w-full h-full object-right-top object-cover" />
                    </div>
                </div>
            </div>
          </div>
        </>
      );
    };

export default PostConstruction