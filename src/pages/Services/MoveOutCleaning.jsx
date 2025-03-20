import ButtonAppoinment from "../../components/Date/ButtonAppoinment"


const MoveOutCleaning = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/MoveOut-1.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-8">Move Out Cleaning</h1>
              <ButtonAppoinment />
          </div>
        </section>
  
        <div className="container mx-auto p-4 pt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-7">
                {/* Texto (2/3 del espacio) */}
                <div className="md:col-span-3 pb-20 text-lg">
                    <p className="text-gray-700 mb-4">
                    Moving is never easy and one of the biggest pains is cleaning the house before leaving, we will take care of all important areas of your vacant home.
                    </p>

                    <p className="text-gray-800 mb-4"><strong>Our services are customizable to meet your needs, whether that means only cleaning certain areas of the home, or whether that means cleaning the entire house and/or interior window cleaning,  and/or wall washing if you require more you just let us know.</strong></p>
                    <p className="text-gray-800 mb-4">We will ensure every surface of your home is clean, shining and ready for the newcomers.</p>
                    <p className="text-gray-800 mb-4">The best thing about our move-out cleaning service is that we accomplish a complete cleaning in one day.</p>

                    <h2 className="text-2xl font-semibold mb-4">Complete checklist of our move out cleaning service:</h2>

                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-2">Bedroom:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>All surfaces dusted</li>
                            <li>Closet exteriors and interiors cleaned.</li>
                            <li>Marks on walls cleaned.</li>
                            <li>Inside Windows cleaned</li>
                            <li>Interior windowsills and window tracks cleaned.</li>
                            <li>Baseboards dusted and/or wiped</li>
                            <li>Doorknobs, doorframes and doors wiped</li>
                            <li>Light switches wiped</li>
                            <li>Light fixtures clean</li>
                            <li>Hard surface floors vacuumed and damp-mopped</li>
                            <li>Carpet or floor area rugs vacuumed and mop </li>
                        </ul>
                    </div>
                    
                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-2">Bathrooms:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Bathtub, shower walls and glass doors cleaned and sanitized</li>
                            <li>Sink cleaned and sanitized</li>
                            <li>Toilet cleaned and sanitized inside and out</li>
                            <li>Mirrors cleaned</li>
                            <li>Cabinet interiors and exteriors cleaned</li>
                            <li>Countertops and shelves dusted and wiped</li>
                            <li>All surfaces dusted</li>
                            <li>Inside windowsills and window tracks cleaned</li>
                            <li>Doorknobs, doorframes and doors wiped</li>
                            <li>Light switches wiped</li>
                            <li>Windows inside clean</li>
                            <li>Baseboards dusted and wiped</li>
                            <li>Marks on walls cleaned</li>
                            <li>Floor vacuumed and washed</li>
                        </ul>
                    </div>
  
                    {/* Cocina */}
                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-3">Kitchen</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Appliance interiors and exteriors cleaned (stovetop, oven, range hood, fridge, microwave, dishwasher)</li>
                            <li>(microwave, toaster, coffee maker) clean</li>
                            <li>Countertops and shelves dusted and wiped</li>
                            <li>Cabinet interiors and exteriors cleaned</li>
                            <li>Sinks and backsplash washed</li>
                            <li>Dishwasher clean</li>
                            <li>All surfaces dusted</li>
                            <li>Inside windowsills and window tracks cleaned</li>
                            <li>Baseboards dusted and wiped</li>
                            <li>Doorknobs, doorframes and doors wiped</li>
                            <li>Light switches wiped</li>
                            <li>Marks on walls and baseboards cleaned</li>
                            <li>Windows inside washed</li>
                            <li>Floor vacuumed and washed</li>
                        </ul>
                    </div>

                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-3">Living area:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>All surfaces dusted</li>
                            <li>Mirrors cleaned</li>
                            <li>Inside windowsills and window tracks cleaned</li>
                            <li>Baseboards dusted and wiped</li>
                            <li>Doorknobs, doorframes and doors cleaned</li>
                            <li>Light switches wiped</li>
                            <li>Marks on walls and baseboards cleaned</li>
                            <li>Hard surface floors vacuumed and damp-mopped</li>
                            <li>Windows clean</li>
                            <li>Light fixtures clean</li>
                            <li>Closet fronts and insides cleaned</li>
                        </ul>
                    </div>
                </div>

                <div className="col-span-2">
                <img src="/MoveOut-2.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
                <img src="/MoveOut-3.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
                </div>
            </div>
          
        </div>
      </>
  )
}

export default MoveOutCleaning