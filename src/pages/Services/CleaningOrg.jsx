import React from 'react'
import ButtonAppoinment from '../../components/ButtonAppoinment'

const CleaningOrg = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/service-18.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-8">Cleaning And Organization</h1>
          <ButtonAppoinment />
        </div>
      </section>
    
      <div className="container mx-auto p-4 pt-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {/* Texto (2/3 del espacio) */}
          <div className="md:col-span-4 pb-20 text-lg">
            <p className='text-center'>Sometimes you have to many stuff to organize that you don’t know where to start, even if you feel like you don’t have the time or the energy to do it, we know our help will always be welcomed. Remember Larvae and moths enjoy crevices and dark corners, so for them, it’s easy to live in your closet.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CleaningOrg