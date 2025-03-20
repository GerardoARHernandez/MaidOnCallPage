import React from 'react';

const GiftCertificatesPage = () => {
  return (
    <>
      {/* Hero Section (1/4 del tamaño) */}
      <section
        className="relative w-full h-48 md:h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/certificate.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Gift Certificate</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Sección de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Columna Izquierda (Texto - 3/4 del espacio) */}
          <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-md text-lg">
            <p className="text-gray-700 mb-4">
              With our gift certificate you can give your loved ones one of the most invaluable things there is: time.
            </p>
            <p className="text-gray-700 mb-4">
              Our home cleaning services are available in:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Gatineau</li>
              <li>Kanata</li>
              <li>Orleans</li>
              <li>Vanier</li>
              <li>Nepean</li>
              <li>Richmond</li>
              <li>Greely</li>
              <li>Manotick</li>
              <li>Metcalfe</li>
              <li>Osgoode</li>
              <li>Stittsville</li>
            </ul>
            <p className="text-gray-700 mb-4">
              If you would like an estimate of our cleaning cost based on the size of your home please{' '}
              <a href="/contact" className="text-blue-600">
                click here
              </a>{' '}
              or You can contact us by phone at 613-618-0969, by e-mail at{' '}
              <a href="mailto:shrmultiservice@gmail.com" className="text-blue-600">
              shrmultiservice@gmail.com
              </a>, we will be happy to assist you.
            </p>
          </div>

          {/* Columna Derecha (Tarjeta de Regalo - 1/4 del espacio) */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <div className="relative">
              <img
                src="/gift-card-image.webp" // Reemplaza con la imagen de tu tarjeta de regalo
                alt="Gift Card"
                className="w-full rounded-lg"
              />
              {/* Botón con efecto hover y clic */}
              <div className="mt-4 text-center">
                <a
                  href="/product/demo"
                  rel="noopener noreferrer" // Mejora la seguridad
                  className="block w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 group relative overflow-hidden"
                >
                  <span className="block transition-all duration-300 group-hover:-translate-x-full">
                    <h2 className='text-xl'>Gift Certificate </h2>
                    <p>$150.00 - $2,000.00</p>
                  </span>
                  <span className="absolute inset-0 flex items-center justify-center translate-x-full group-hover:translate-x-0 transition-all duration-300">
                    Select Amount →
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Información Adicional */}
        {/* <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
          <p className="text-gray-600 mx-auto">
            Gift certificates are non-refundable and cannot be exchanged for cash. They are valid for one year from the date of purchase. Please ensure you use your gift certificate before the expiration date.
          </p>
        </div> */}

      </div>
    </>
  );
};

export default GiftCertificatesPage;