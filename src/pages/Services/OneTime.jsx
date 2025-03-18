import ButtonAppoinment from '../../components/ButtonAppoinment';

const OneTime = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/regular-1.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-8">One Time Regular Cleaning</h1>
              <ButtonAppoinment />
          </div>
        </section>
  
        <div className="container mx-auto p-4 pt-24 px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-lg">
            {/* Texto (2/3 del espacio) */}
            <div className="md:col-span-3 pb-20">
              <p className="text-gray-700 mb-4 text-lg">
                A clean home brings balance and happiness to your life, we are a fully trained team, committed to providing the best house cleaning service you deserve in <a href="https://ottawa.ca/en" className='text-blue-500 hover:text-blue-700' target="_blank" rel="noopener noreferrer">Ottawa</a>. With SHR Multiservice one-time regular cleaning, you will see a difference in your house.
              </p>
              <h2 className="text-2xl font-semibold mb-4">
                Complete checklist of our one time regular cleaning service:
              </h2>
  
              {/* Todas las áreas */}
              <div className='py-4'>
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
                <div className='py-4'>
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
                <div className='py-4'>
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
                <div className='py-4'>
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
                
                <div className="py-4">
                    <h3 className="text-xl font-semibold mb-2">Extra Shores:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Dust all blinds, all windowsills, and all lock ledges</li>
                        <li>Clean the baseboards</li>
                        <li>Clean garbage cans</li>
                        <li>Dust door panels</li>
                        <li>Dust chair rails</li>
                        <li>Clean the kitchen cabinets</li>
                        <li>Clean light fixtures</li>
                    </ul>
                </div>

                {/* Enlace de descarga */}
                <a
                href="https://maidoncall.ca/wp-content/uploads/2021/02/Complete-checklist-of-our-one-time-regular-cleaning-service.pdf"
                download
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                > Click here to download our regular cleaning checklist</a>

            </div>
  
            {/* Imágenes (1/3 del espacio) */}
            <div className="col-span-2">
              <img src="/regular-2.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
            </div>
          </div>

            <div className='text-center flex flex-col items-center pb-10'>
                <h2 className='text-4xl font-semibold py-8'>Need Help With Cleaning?</h2>
                <ButtonAppoinment />
            </div>

        </div>
      </>
  )
}

export default OneTime