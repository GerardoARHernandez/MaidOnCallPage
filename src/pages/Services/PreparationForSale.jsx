import React from 'react'
import ButtonAppoinment from '../../components/ButtonAppoinment'

const PreparationForSale = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/service-17.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-8">Preparation For Sale</h1>
          <ButtonAppoinment />
        </div>
      </section>
    
      <div className="container mx-auto p-4 pt-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {/* Texto (2/3 del espacio) */}
          <div className="md:col-span-4 pb-20 text-lg">
            <p className='text-center'>Improve your chances of selling your property with our complete preparation for sale service, we are experts in getting your home ready so the potential buyers will fall in love with its neatness.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PreparationForSale

