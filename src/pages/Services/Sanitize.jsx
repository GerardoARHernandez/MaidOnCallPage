import ButtonAppoinment from '../../components/ButtonAppoinment'

const Sanitize = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/sanitized.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-8">Sanitize Services</h1>
              <ButtonAppoinment />
          </div>
        </section>
  
        <div className="container mx-auto p-4 pt-24 px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-xl">
            <div className="md:col-span-5 pb-20">
              <p className="text-gray-700 mb-4">We have added disinfection services as an add-on to our cleaning services. If chosen, our teams will sanitize light switches, doorknobs, and other “high touch” surfaces. </p>

              <p><strong className='py-12'>With a Government of Canada approved disinfectant, that is effective against the Coronavirus, that causes COVID-19. The teams have been provided with training to ensure the safety and effectiveness of the products used.</strong>
              </p>
            </div>
          </div>
        </div>
      </>
  )
}

export default Sanitize