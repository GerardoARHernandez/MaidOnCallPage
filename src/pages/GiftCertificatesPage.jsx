import React from 'react';

const GiftCertificatesPage = () => {
  return (
    <>
      {/* Hero Section (1/4 del tamaño) */}
      <section
        className="relative w-full h-64 flex items-center justify-center" // Ajustamos la altura a h-64
        style={{
          backgroundImage: 'url("/certificate.jpg")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Gift Certificate</h1>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Sección de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> {/* Cambiamos a 4 columnas */}
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
              <a href="#" className="text-blue-600">
                click here
              </a>{' '}
              or You can contact us by phone at 613-618-0969, by e-mail at{' '}
              <a href="mailto:info@maidoncall.ca" className="text-blue-600">
                info@maidoncall.ca
              </a>, we will be happy to assist you.
            </p>
          </div>

          {/* Columna Derecha (Tarjeta de Regalo - 1/4 del espacio) */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <div className="relative">
                    <img
                        src="/gift-card-image.png" // Reemplaza con la imagen de tu tarjeta de regalo
                        alt="Gift Card"
                        className="w-full rounded-lg"
                    />
                    {/* Botón debajo de la imagen */}
                    <div className="mt-4 text-center">
                        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
                            <h2 className="text-2xl font-semibold text-white mb-2">Gift Certificate</h2>
                            <p className="text-white">$150.00 - $2,000.00</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Sección de Información Adicional */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Terms & Conditions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gift certificates are non-refundable and cannot be exchanged for cash. They are valid for one year from the date of purchase. Please ensure you use your gift certificate before the expiration date.
          </p>
        </div>
      </div>
    </>
  );
};

export default GiftCertificatesPage;