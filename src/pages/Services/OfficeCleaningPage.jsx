

const OfficeCleaningPage = () => {
    return (
        <>
          {/* Hero Section */}
          <section
            className="relative w-full h-64 flex items-center justify-center"
            style={{
              backgroundImage: 'url("/service-8.webp")', // Reemplaza con tu imagen
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl font-bold text-white mb-4">Office Cleaning</h1>
            </div>
          </section>
    
          <div className="container mx-auto p-4 pt-24 px-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {/* Texto (2/3 del espacio) */}
              <div className="md:col-span-3 pb-20 text-lg">
                <p className="text-gray-700 mb-4"> Maid on Call <a href="ottawa.ca" className="text-blue-400">Ottawa</a> office cleaning service is an efficient solution for your business, a clean and organized office makes a happier and more productive environment. </p>
                <p className="text-gray-700 mb-4">Whether you choose a one-time cleaning or request our service regularly (weekly, bi-weekly, monthly), MAID ON CALL cleaners will make the difference by providing an excellent cleaning service.</p>
                <p className="text-gray-700 mb-4">Our team would take care of all areas including conference rooms, community centre, waiting rooms, offices, club halls</p>
    
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Office Cleaning Services include:</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Cleaning outside of typical business hours</li>
                    <li>Emptying and disinfecting employee food areas (ie. staff fridge)</li>
                    <li>Emptying and disinfecting trash bins</li>
                    <li>Vacuuming vents</li>
                    <li>Cleaning hard-to-reach surfaces</li>
                    <li>Disinfectant mopping and wiping down of all hard surfaces</li>
                    <li>Sanitizing and cleaning washrooms (including basins, toilets, doors, and fixtures)</li>
                    <li>Cleaning reflective surfaces</li>
                  </ul>
                </div>

              </div>
    
              {/* Imágenes (1/3 del espacio) */}
              <div className="col-span-2">
                <img src="/service-2.webp" alt="Oficina Limpia" className="w-full rounded-lg mb-4" />
              </div>
            </div>
          </div>
        </>
      );
    };

export default OfficeCleaningPage