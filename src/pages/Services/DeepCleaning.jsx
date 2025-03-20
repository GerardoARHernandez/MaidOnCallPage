import ButtonAppoinment from '../../components/Date/ButtonAppoinment'

const DeepCleaning = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/regular-1.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-8">Deep House Cleaning</h1>
              <ButtonAppoinment />
          </div>
        </section>
  
        <div className="container mx-auto p-4 pt-24 px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-lg">
            {/* Texto (2/3 del espacio) */}
            <div className="md:col-span-3 pb-20">
              <p className="text-gray-700 mb-4">Deep cleaning is a service that has been designed for someone that has neglected his house. if you are overwhelmed by this situation, is time to call us, in our deep house cleaning service, we will make sure that your house is not only clean but tidy up as well.</p>
              <h2 className="text-2xl font-semibold mb-4">Complete checklist of Deep House Cleaning service: </h2>

                {/* Cocina */}
                <div className='py-4'>
                    <h3 className="text-xl font-semibold mb-2">Kitchen</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li class="py-0">Clean and disinfect the trash can</li>
                        <li class="py-0">Clean the microwave. (inside and outside)</li>
                        <li class="py-0">Deep clean the dishwasher</li>
                        <li class="py-0">Clean inside the refrigerator and organize</li>
                        <li class="py-0">Clean the oven (inside oven)</li>
                        <li class="py-0">Deep clean cabinet doors</li>
                        <li class="py-0">Deep clean floors, vacuum and mop</li>
                        <li class="py-0">Disinfect doorknobs, light fixtures and pulls.</li>
                        <li class="py-0">Windows and window track</li>
                        <li class="py-0">Clean behind, sideways and under the refrigerator</li>
                        <li class="py-0">Clean behind, sideways and under the stove</li>
                        <li class="py-0">Clean the baseboard</li>
                    </ul>
                </div>
  
                <div className='py-4'>
                    <h3 className="text-xl font-semibold mb-2">Dining Room:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Dust crown molding, wall corners, and floor molding</li>
                        <li>Clean and disinfect light switches and outlets</li>
                        <li>Remove all dust from top to bottom</li>
                        <li>Clean and shine tables</li>
                        <li>Clean light fixtures</li>
                        <li>Remove rug, shake, vacuum and clean floor before replacing rug</li>
                        <li>Windows and window track</li>
                        <li>Vacuum and mop</li>
                    </ul>
                </div>
  
                {/* Baños */}
                <div className='py-4'>
                    <h3 className="text-xl font-semibold mb-2">Bathrooms</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Clean air vents from the ceiling</li>
                        <li>Clean and disinfect light switches and fixtures</li>
                        <li>Clean and refill soap dish and/or pump</li>
                        <li>Clean light fixtures</li>
                        <li>Clean mirror</li>
                        <li>Clean shower door frame</li>
                        <li>Clean shower glass</li>
                        <li>Disinfect counter tops</li>
                        <li>Mop and scrub floors</li>
                        <li>Scrub and disinfect toilet, including around base, under seat and around hinges</li>
                        <li>Scrub the bathtub and/or shower</li>
                        <li>Scrub walls. (some stains)</li>
                        <li>Wash toilet</li>
                        <li>Wash trash can (inside and out)</li>
                        <li>Wipe down cabinets, knobs, towel racks and toilet paper holder</li>
                        <li>Clean bathroom exhaust fan</li>
                        <li>Clean shower head</li>
                    </ul>
                </div>

                <div className='py-4'>
                    <h3 className="text-xl font-semibold mb-2">Deep Cleaning Checklist For Living Room/Family Areas:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Dust crown moulding, wall corners, and floor moulding</li>
                        <li>Vacuum all carpeted area</li>
                        <li>Vacuum under furniture and in between cushions</li>
                        <li>Dust ceiling fans</li>
                        <li>Clean lights and wash light globes</li>
                        <li>Dust lamps</li>
                        <li>Dust edges of wall hangings, mirrors, and pictures</li>
                        <li>Clean windows and windowsills</li>
                        <li>Remove scuff marks from doors and mouldings</li>
                    </ul>
                </div>
                
                <div className="py-4">
                    <h3 className="text-xl font-semibold mb-2">Deep Clean Checklist For Bedrooms:</h3>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Dust ceiling, corners, upper and lower crown mouldings</li>
                        <li>Dust baseboards and windowsills</li>
                        <li>Dust edges of wall hangings, mirrors, and pictures</li>
                        <li>Clean glass and mirrors</li>
                        <li>Dust lamps</li>
                        <li>Dust ceiling fan</li>
                        <li>Clean light fixtures</li>
                        <li>Clean under your bed</li>
                        <li>Clean windows and windowsills</li>
                        <li>Vacuum carpet, including edges and under furniture</li>
                        <li>Disinfect doorknobs and light switch plates</li>
                        <li>Mop floor</li>
                    </ul>
                </div>

            </div>
  
            {/* Imágenes (1/3 del espacio) */}
            <div className="col-span-2">
              <img src="/DeepHouse1.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
              <img src="/DeepHouse2.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
            </div>
          </div>

        </div>
      </>
  )
}

export default DeepCleaning