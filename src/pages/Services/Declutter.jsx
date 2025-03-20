import React from 'react'
import ButtonAppoinment from '../../components/Date/ButtonAppoinment'

const Declutter = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/service-16.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-8">Declutter</h1>
          <ButtonAppoinment />
        </div>
      </section>
    
      <div className="container mx-auto p-4 pt-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {/* Texto (2/3 del espacio) */}
          <div className="md:col-span-4 pb-20 text-lg">
            <p className='text-center'>Whenever you feel overwhelmed with the amount of clutter you have, we are here to help you; getting rid of clutter from your home or office, can become an <strong>important</strong> way to practice self-care because it gives you space and clarity that helps you take control of your home. It also provides you with energy to increase your overall well being, improving your health and happiness.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Declutter