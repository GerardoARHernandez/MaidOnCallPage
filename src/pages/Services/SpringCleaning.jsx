import ButtonAppoinment from "../../components/Date/ButtonAppoinment";

const SpringCleaning = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/blog8.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-8">Spring Cleaning</h1>
              <ButtonAppoinment />
          </div>
        </section>
  
        <div className="container mx-auto p-4 pt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Texto (2/3 del espacio) */}
                <div className="md:col-span-4 pb-20 text-lg">
                    <p className="text-gray-700 mb-4">
                        Once the weather starts to warm up and it’s time to say goodbye to winter, many people want to open up the house and breathe new life and fresh air into their homes, it seems that spring is the perfect time to give everything a good, thorough cleaning. This is the perfect time to go above and beyond the everyday cleaning and get into every nook and cranny, This can be a daunting task to undertake on your own, so let our experts help you with the task they are good at, aside from getting your place in mint condition, our <a href="https://ottawa.ca/en" className='text-blue-500 hover:text-blue-700' target="_blank" rel="noopener noreferrer">Ottawa</a>. Spring cleaning service also provides you with health benefits.
                    </p>

                    <p className="text-gray-700 mb-4">Our Spring cleaning package is a very comprehensive cleaning of the whole house, among other task, we move small and medium furniture and clean underneath and behind them.</p>

                    <h2 className="text-2xl font-semibold mb-4">Complete checklist of our Spring cleaning service:</h2>
  
                    {/* Cocina */}
                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-3">Kitchen</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li className='py-1'>Clean and disinfect the trash can.</li>
                            <li className='py-1'>Clean the microwave (inside and outside).</li>
                            <li className='py-1'>Deep clean the dishwasher.</li>
                            <li className='py-1'>Clean and organize the freezer.</li>
                            <li className='py-1'>Clean inside the refrigerator and organize. Clean behind, sideways and under the refrigerator.</li>
                            <li className='py-1'>Clean behind, sideways and under the stove.</li>
                            <li className='py-1'>Clean the baseboard.</li>
                            <li className='py-1'>Vacuum refrigerator coils.</li>
                            <li className='py-1'>Clean the oven (inside oven).</li>
                            <li className='py-1'>Clean the hood vent and change filter if needed.</li>
                            <li className='py-1'>Clean stove top burners.</li>
                            <li className='py-1'>Clean and disinfect the garbage disposal.</li>
                            <li className='py-1'>Clean and organize plastic ware and storage containers.</li>
                            <li className='py-1'>Reorganize kitchen cabinets and drawers. (inside and outside cabinets)</li>
                            <li className='py-1'>Clean and organize kitchen drawers.</li>
                            <li className='py-1'>Clean and disinfect coffee maker.</li>
                            <li className='py-1'>Clean and disinfect small appliances.</li>
                            <li className='py-1'>Clean under the sink and eliminate the unnecessary.</li>
                            <li className='py-1'>Deep clean cabinet doors.</li>
                            <li className='py-1'>Deep clean floors.</li>
                            <li className='py-1'>Disinfect doorknobs, light fixtures and pulls.</li>
                            <li className='py-1'>Remove anything from the kitchen that doesn’t belong.</li>
                        </ul>
                    </div>

                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-3">Dining Room:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li className='py-1'>Eliminate unnecessary items</li>
                            <li className='py-1'>Dust crown molding, wall corners, and floor molding</li>
                            <li className='py-1'>Scrub walls</li>
                            <li className='py-1'>Clean and disinfect light switches and outlets</li>
                            <li className='py-1'>Remove all dust from top to bottom</li>
                            <li className='py-1'>Clean and shine tables</li>
                            <li className='py-1'>Clean light fixtures</li>
                            <li className='py-1'>Disinfect table and wipe down all chairs, including legs and underneath</li>
                            <li className='py-1'>Remove rug, shake, vacuum and clean floor before replacing rug</li>
                            <li className='py-1'>Vacuum and mop</li>
                            <li className='py-1'>Clean the baseboard</li>
                        </ul>
                    </div>

                    {/* Dormitorios */}
                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-2">Bathrooms:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li class="py-1">Clean air vents from the ceiling.</li>
                            <li class="py-1">Clean and disinfect light switches and fixtures.</li>
                            <li class="py-1">Clean and disinfect toothbrush holders.</li>
                            <li class="py-1">Clean and refill soap dish and/or pump.</li>
                            <li class="py-1">Clean light fixtures.</li>
                            <li class="py-1">Clean mirror.</li>
                            <li class="py-1">Clean shower curtain and liner.</li>
                            <li class="py-1">Clean shower door frame.</li>
                            <li class="py-1">Clean shower glass.</li>
                            <li class="py-1">Clean plastic strip at the bottom of a glass shower door.</li>
                            <li class="py-1">Disinfect counter tops.</li>
                            <li class="py-1">Dust and clean windows, inside and outside.</li>
                            <li class="py-1">Mop and scrub floors.</li>
                            <li class="py-1">Scrub and disinfect toilet, including around base, under seat and around hinges.</li>
                            <li class="py-1">Scrub the bathtub and/or shower.</li>
                            <li class="py-1">Scrub walls. (some stains)</li>
                            <li class="py-1">Wash toilet.</li>
                            <li class="py-1">Wash trash can (inside and out).</li>
                            <li class="py-1">Wipe down cabinets, knobs, towel racks and toilet paper holder.</li>
                            <li class="py-1">Clean bathroom exhaust fan.</li>
                            <li class="py-1">Clean shower head.</li>
                            <li class="py-1">Clean, organize and de-clutter cabinets and drawers.</li>
                            <li class="py-1">Clean, organize and de-clutter bathroom closet.</li>
                            <li class="py-1">Clean windowsills.</li>
                            <li class="py-1">Clean the baseboard.</li>
                        </ul>
                    </div>
                
                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">Deep Cleaning Checklist For Living Room/Family Areas:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li class="py-1">Take anything that doesn’t belong in the living room.</li>
                            <li class="py-1">Dust crown molding, wall corners, and floor molding</li>
                            <li class="py-1">Vacuum all carpet area.</li>
                            <li class="py-1">Vacuum under furniture and in between cushions</li>
                            <li class="py-1">Dust ceiling fans.</li>
                            <li class="py-1">Clean lights and wash light globes.</li>
                            <li class="py-1">Dust lamps.</li>
                            <li class="py-1">Dust edges of wall hangings, mirrors, and pictures.</li>
                            <li class="py-1">Clean windows and windowsills.</li>
                            <li class="py-1">Remove scuff marks from doors and moldings.</li>
                            <li class="py-1">Dust electronics.</li>
                            <li class="py-1">Disinfect remote controls and electronics devices.</li>
                            <li class="py-1">Vacuum and mop</li>
                            <li class="py-1">Clean the baseboard</li>
                        </ul>
                    </div>

                    <div className="py-4">
                        <h3 className="text-xl font-semibold mb-2">Checklist For Bedrooms: </h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li class="py-1">Take anything that doesn’t belong in the bedroom.</li>
                            <li class="py-1">Dust ceiling, corners, and upper and lower crown moldings.</li>
                            <li class="py-1">Dust baseboards and windowsills.</li>
                            <li class="py-1">Dust and polish furniture.</li>
                            <li class="py-1">Dust edges of wall hangings, mirrors, and pictures.</li>
                            <li class="py-1">Clean glass and mirrors.</li>
                            <li class="py-1">Dust lamps.</li>
                            <li class="py-1">Vacuum lamp shades.</li>
                            <li class="py-1">Picked up, folded laundry and remove everything that doesn’t belong.</li>
                            <li class="py-1">Dust ceiling fan.</li>
                            <li class="py-1">Clean light fixtures.</li>
                            <li class="py-1">Organize closet.</li>
                            <li class="py-1">Clean mattress.</li>
                            <li class="py-1">Clean under your bed.</li>
                            <li class="py-1">Wash bed sheets.</li>
                            <li class="py-1">Wash pillows.</li>
                            <li class="py-1">Clean windows and windowsills.</li>
                            <li class="py-1">Vacuum carpet, including edges and under furniture.</li>
                            <li class="py-1">Disinfect doorknobs and light switch plates.</li>
                            <li class="py-1">Clean the baseboard</li>
                            <li class="py-1">Clean windowsill</li>
                            <li class="py-1">Vacuum and mop</li>
                        </ul>
                    </div>

                {/* Enlace de descarga */}
                <a
                href="https://maidoncall.ca/wp-content/uploads/2021/02/Spring-cleaning-check-list.pdf"
                download
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                > Click here to download our regular cleaning checklist</a>

            </div>
          </div>
          
        </div>
      </>
  )
}

export default SpringCleaning