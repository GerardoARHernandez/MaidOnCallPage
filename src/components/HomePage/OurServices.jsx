import { Link } from "react-router-dom";

const OurServices = () => {
    return (
      <>
        {/* Servicios Section */}
        <section id="servicios" className="pb-2 pt-20 bg-blue-50">
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-center text-blue-950 mb-8">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
              {/* Tarjeta de servicio: House Cleaning */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <Link to="/regular-house-cleaning-ottawa">
                  <img
                    src="/service-1.webp"
                    alt="House Cleaning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <h3 className="text-white text-xl font-bold">House Cleaning</h3>
                  </div>
                  <div className="md:hidden p-4 bg-white">
                    <h3 className="text-blue-950 text-xl font-bold">House Cleaning</h3>
                  </div>
                </Link>
              </div>
  
              {/* Tarjeta de servicio: Office Cleaning */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <Link to="/office-cleaning-ottawa" >
                  <img
                    src="/service-2.webp"
                    alt="Office Cleaning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <h3 className="text-white text-xl font-bold">Office Cleaning</h3>
                  </div>
                  <div className="md:hidden p-4 bg-white">
                    <h3 className="text-blue-950 text-xl font-bold">Office Cleaning</h3>
                  </div>
                </Link>
              </div>
  
              {/* Tarjeta de servicio: Condo & Apartment Cleaning */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <Link to="/apartment-condo-cleaning-ottawa">
                  <img
                    src="/service-3.webp"
                    alt="Condo & Apartment Cleaning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                    <h3 className="text-white text-xl font-bold">Condo & Apartment Cleaning</h3>
                  </div>
                  <div className="md:hidden p-4 bg-white">
                    <h3 className="text-blue-950 text-xl font-bold">Condo & Apartment Cleaning</h3>
                  </div>
                </Link>
              </div>
  
              {/* Tarjeta de servicio: Move-in & Move-out Cleans */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <Link to="/move-in-cleaning-ottawa">
                  <img
                    src="/service-4.webp"
                    alt="Move-in & Move-out Cleans"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Move-in & Move-out Cleans</h3>
                  </div>
                  <div className="md:hidden p-4 bg-white">
                    <h3 className="text-blue-950 text-xl font-bold">Move-in & Move-out Cleans</h3>
                  </div>
                </Link>
              </div>
  
              {/* Tarjeta de servicio: Post Construction Cleaning */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <Link to="post-construction-cleaning-ottawa" >
                  <img
                    src="/service-5.webp"
                    alt="Post Construction Cleaning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Post Construction Cleaning</h3>
                  </div>
                  <div className="md:hidden p-4 bg-white">
                    <h3 className="text-blue-950 text-xl font-bold">Post Construction Cleaning</h3>
                  </div>
                </Link>
              </div>
  
              {/* Tarjeta de servicio: Short-Term & Airbnb Cleaning */}
              <div className="relative rounded-lg overflow-hidden shadow-lg group">
                <Link to="/short-term-rental-airbnb-ottawa">
                  <img
                    src="/service-6.webp"
                    alt="Short-Term & Airbnb Cleaning"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-white text-xl font-bold">Short-Term & Airbnb Cleaning</h3>
                  </div>
                  <div className="md:hidden p-4 bg-white">
                    <h3 className="text-blue-950 text-xl font-bold">Short-Term & Airbnb Cleaning</h3>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
  
  export default OurServices;