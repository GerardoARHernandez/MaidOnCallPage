import React from 'react'
import ButtonAppoinment from '../../components/ButtonAppoinment';

const MoveInCleaning = () => {
    return (
        <>
            {/* Hero Section */}
            <section
                className="relative w-full h-64 flex items-center justify-center"
                style={{
                backgroundImage: 'url("/service-4.webp")', // Reemplaza con tu imagen
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
                <div className="relative z-10 text-center flex flex-col items-center">
                    <h1 className="text-5xl font-bold text-white mb-4">Move In Cleaning</h1>
                    <ButtonAppoinment />
                </div>
            </section>
    
            <div className="container mx-auto p-4 pt-24 px-5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {/* Texto (2/3 del espacio) */}
                <div className="md:col-span-4 pb-20">
                        <p className="text-gray-700 mb-4">
                            Moving is never easy, it is very important to arrive in a perfectly clean space, where all the dirt and grime for the past tenants is being left behind. SHR Multiservice move-in cleaning service is customizable to meet your needs. Our team will clean places that you weren’t aware of, which means cleaning deeply the entire house.<br></br>
                            The best thing about our move in cleaning is that we achieve a comprehensive cleaning in a one day visit. We take care of every detail while doing our job, Among other tasks, we wash the vents and clean inside, the bathrooms will be sanitized, and the kitchen will be ready for your first meal, in one sentence “we take care of all the important space”, don’t worry, we are here!! Just call us and enjoy your new place
                        </p>
                        <h2 className="text-2xl font-semibold mb-4">Complete checklist of our move-in cleaning service:</h2>
            
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

                        {/* Living area : */}
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold mb-2">Living area</h3>
                            <ul className="list-disc list-inside text-gray-700">
                                <li>All surfaces dusted</li>
                                <li>Mirrors cleaned</li>
                                <li>Inside windowsills and window tracks cleaned</li>
                                <li>Doorknobs, doorframes and doors cleaned</li>
                                <li>Baseboards dusted and wiped</li>
                                <li>Light switches wiped</li>
                                <li>Marks on walls cleaned</li>
                                <li>Hard surface floors vacuumed and damp-mopped</li>
                                <li>Windows clean</li> 
                                <li>Light fixtures clean</li> 
                                <li>Closet fronts and insides cleaned</li> 
                            </ul>
                        </div>
                        
                        {/* Enlace de descarga */}
                        <a
                        href="https://maidoncall.ca/wp-content/uploads/2021/02/Complete-Checklist-Of-Our-Move-In-Cleaning-Service.pdf"
                        download
                        target="_blank" rel="noopener noreferrer"
                        className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-xl hover:bg-blue-700 transition-colors duration-300"
                        > Click here to download our move-in checklist</a>
  
                    </div>
    
                    {/* Imágenes (1/3 del espacio) */}
                    <div className="col-span-1">
                    </div>
                </div>
            </div>
        </>
      );
    };

export default MoveInCleaning