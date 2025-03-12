import ButtonAppoinment from '../../components/ButtonAppoinment';

const ShortTermPage = () => {
    return (
        <>
          {/* Hero Section */}
          <section
            className="relative w-full h-64 flex items-center justify-center"
            style={{
              backgroundImage: 'url("/service-15.webp")', // Reemplaza con tu imagen
              backgroundSize: 'cover',
              backgroundPosition: 'bottom',
            }}
          >
            <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
            <div className="relative z-10 text-center flex flex-col items-center">
              <h1 className="text-5xl font-bold text-white mb-4">Short-Term Rental & Airbnb Cleaning Services</h1>
                <ButtonAppoinment />
            </div>
          </section>
    
          <div className="container mx-auto p-4 pt-24 px-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* Texto (2/3 del espacio) */}
              <div className="md:col-span-3 pb-20 text-lg">
                <p className="text-gray-700 mb-4"> When you have a Airbnb or short-term rental property, it’s important the interior of the house is always in a clean condition for the next visitor to provide a consistent level of hospitality. </p>
                <p className="text-gray-700 mb-4">We Examine the property quickly to ensure there is no obvious damage. We also dispose of smelly foods quickly and put the dishwasher on if necessary, and very everything is ready for next visit. Also we take some pictures that will serve as good before pictures if anything happens with your guest and provide you with evidence of how things looked before they arrived. That can oftentimes help you with any claim you may need to make. It will also help you verify that your place was cleaned to standards so you know what your guests are coming in to and if your cleaning professional is representing you well.</p>
                <p className="text-gray-700 mb-4">It is important to perform a deep clean of your property every 3-6 months based on turnover, the type of your property, etc…</p>
    
                <h2 className="text-2xl font-semibold mb-2">Complete checklist of our Short Terms Airbnb service: </h2>

                <div className='my-8'>
                  <h3 className="text-xl font-semibold mb-2">General Cleaning </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Vacuum all rugs, carpets and flooring areas</li>
                    <li>Mop all hard flooring areas</li>
                    <li>Dust and clean all surfaces, including inside draws</li>
                    <li>Wipe window interiors</li>
                    <li>Clean / Sanitize all upholstered furniture</li>
                    <li>Remove sofa cushions and dust</li>
                    <li>Take out trash and recycling</li>
                    <li>Check remote controls to make sure they work and wipe off with antibacterial wipes.</li>
                  </ul>
                </div>

                <div className='my-8'>
                  <h3 className="text-xl font-semibold mb-2">Kitchen</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Wash all dishes, dry and put away</li>
                    <li>Empty dishwasher, and top up with salt as needed</li>
                    <li>Wipe all appliances and cabinets.</li>
                    <li>Clean microwave interior and exterior.</li>
                    <li>Clean sinks & faucets</li>
                    <li>Clean countertops and backsplash</li>
                    <li>Take out trash and re-line garbage can</li>
                    <li>Empty and clean your refrigerator</li>
                    <li>Organize Cabinets</li>                    
                  </ul>
                </div>

                <div className='my-8'>
                  <h3 className="text-xl font-semibold mb-2">Bathroom</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Remove rugs / wastebaskets and items from the shower / bath</li>
                    <li>Place a toilet cleaner inside bowl, allow to sit for 5-10 mins</li>
                    <li>Descale shower head</li>
                    <li>Wipe all walls / tiles with descaler</li>
                    <li>Cleaning Shower / Bath</li>
                    <li>Clean sinks & faucets</li>
                    <li>Clean toilet bowl, both sides of both lids and seat and the handle</li>
                    <li>Empty and clean your refrigerator</li>
                    <li>Organize Cabinets</li>
                    <li>Clean shower rack/soap dishes</li>
                    <li>Check and remove hair from drains</li>
                    <li>Spray/clean everything with all-purpose cleaner especially the toilet, vanity, shower/ tub, mirror</li>
                    <li>Clean mirror: spray glass cleaner on soft cloth and buff</li>
                    <li>Take out trash and re-line garbage can</li>
                    <li>Re-stock toilet paper to make sure new guests have a fresh roll to start.</li>               
                  </ul>
                </div>

                <div className='my-8'>
                  <h3 className="text-xl font-semibold mb-2">Bedroom</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Strip all bed and replace sheets with fresh ones Fold towels and washcloth and leave on foot of bed</li>
                    <li>Dust all areas not forgetting pictures and back of bed</li>
                    <li>Use a glass cleaner on the TV</li>
                    <li>Open and dust all draws</li>
                    <li>Vacuum all areas especially under the bed</li>
                  </ul>
                </div>

                <div className='my-8'>
                  <h3 className="text-xl font-semibold mb-2">Miscellaneous checks</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Check Remote Controls</li>
                    <li>Check Smoke Alarms</li>
                    <li>Check coffee, tea & sugar</li>
                    <li>Check first aid kit</li>
                    <li>Check fire extinguisher</li>
                    <li>Check all lights</li>
                    <li>Check locks and security features</li>
                    <li>Cleaning supplies including hand soap, dish-washing liquid</li>
                    <li>Check & replace cleaning sponges</li>
                    <li>Check toiletries like toilet paper, paper towels, and tissues</li>
                    <li>Check the Internet is working</li>
                    <li>Check Coat Hangers</li>
                    <li>Check Netflix account logged in</li>
                    <li>Check Hair Dryer</li>
                    <li>Check guestbook</li>
                  </ul>
                </div>

              </div>
    
              {/* Imágenes (1/3 del espacio) */}
              <div className="col-span-2">
                <img src="/service-9.webp" alt="Oficina Limpia" className="w-full rounded-lg mb-4" />
                <img src="/service-14.webp" alt="Oficina Limpia" className="w-full rounded-lg mb-4" />
              </div>
            </div>
          </div>
        </>
      );
    };

export default ShortTermPage