import ButtonAppoinment from "../../components/Date/ButtonAppoinment"


const PostRenovation = () => {
  return (
    <>
        {/* Hero Section */}
        <section
          className="relative w-full h-64 flex items-center justify-center"
          style={{
            backgroundImage: 'url("/post-1.webp")', // Reemplaza con tu imagen
            backgroundSize: 'cover',
            backgroundPosition: 'bottom',
          }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center flex flex-col items-center">
            <h1 className="text-5xl font-bold text-white mb-8">Post Renovation Cleaning</h1>
              <ButtonAppoinment />
          </div>
        </section>
  
        <div className="container mx-auto p-4 pt-24 px-5">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-7">
                {/* Texto (2/3 del espacio) */}
                <div className="md:col-span-3 pb-20 text-lg">
                    <p className="text-gray-700 mb-4">Post-renovation clean-up can be time-consuming and hazardous. Dust settles everywhere and, without proper equipment or cleaning experience, you can easily overlook crucial steps.
                    </p>

                    <p className="text-gray-800 mb-4">Our company is very experienced when it comes to dealing with post-renovation cleanings and can guarantee that you’ll have peace of mind knowing that the job is being well taken care of.</p>
                    <p className="text-gray-800 mb-4">We will ensure every surface of your home is clean, shining and ready for the newcomers.</p>

                    <h2 className="text-2xl font-semibold mb-4">Complete checklist of our post renovation cleaning service:</h2>

                    {/* Cocina */}
                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-3">Kitchen</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Cabinet fronts and inside cleaned</li>
                            <li>Countertops and shelves dusted and/or wiped</li>
                            <li>Sinks and backsplash washed</li>
                            <li>Windows inside cleaned</li>
                            <li>Appliance exteriors cleaned (stovetop, oven, range hood, fridge, microwave, dishwasher)</li>
                            <li>Small appliances wiped (microwave, toaster, coffee maker)</li>
                            <li>All surfaces dusted</li>
                            <li>Windowsills and window tracks cleaned</li>
                            <li>Baseboards dusted and/or wiped</li>
                            <li>Doorknobs, doorframes and doors wiped</li>
                            <li>Light switches wiped</li>
                            <li>Marks on walls and baseboards cleaned</li>
                            <li>Garbage and recycling bins emptied</li>
                            <li>Floor vacuumed and washed</li>
                        </ul>
                    </div>
                    
                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-2">Bathrooms:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>Sink cleaned and sanitized</li>
                            <li>Bathtub, shower walls and glass doors cleaned and sanitized</li>
                            <li>Toilet cleaned and sanitized inside and out</li>
                            <li>Mirrors cleaned</li>
                            <li>Cabinet fronts and inside cleaned</li>
                            <li>Countertops and shelves dusted and/or wiped</li>
                            <li>All surfaces dusted</li>
                            <li>Windows inside cleaned</li>
                            <li>Windowsills and window tracks cleaned</li>
                            <li>Baseboards dusted and/or wiped</li>
                            <li>Doorknobs, doorframes and doors wiped</li>
                            <li>Light switches wiped</li>
                            <li>Garbage and recycling bins emptied</li>
                            <li>Floor vacuumed and washed</li>
                            <li>Marks on walls and baseboards cleaned</li>
                        </ul>
                    </div>

                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-2">Bedroom:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>All surfaces dusted</li>
                            <li>Carpet and area rugs vacuumed</li>
                            <li>Hard surface floors vacuumed and damp-mopped</li>
                            <li>Closet fronts and insides cleaned</li>
                            <li>Marks on walls and baseboards cleaned</li>
                            <li>Mirrors cleaned</li>
                            <li>Windowsills and window tracks cleaned</li>
                            <li>Baseboards dusted and/or wiped</li>
                            <li>Doorknobs, doorframes and doors wiped</li>
                            <li>Light switches wiped</li>
                            <li>Garbage and recycling bins emptied</li>
                            <li>Fireplace inside vacuumed and wiped</li>
                        </ul>
                    </div>

                    <div className='py-4'>
                        <h3 className="text-xl font-semibold mb-3">Other Living Areas:</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>All surfaces dusted</li>
                            <li>Carpet and area rugs vacuumed</li>
                            <li>Closet fronts and insides cleaned</li>
                            <li>Hard surface floors vacuumed and damp-mopped</li>
                            <li>Marks on walls and baseboards cleaned</li>
                            <li>Mirrors cleaned</li>
                            <li>Windowsills and window tracks cleaned (indoor)</li>
                            <li>Baseboards dusted and/or wiped</li>
                            <li>Doorknobs, doorframes and doors cleaned</li>
                            <li>Light switches wiped</li>
                            <li>Garbage and recycling bins emptied</li>
                        </ul>
                    </div>

                    {/* Enlace de descarga */}
                    <a
                    href="https://maidoncall.ca/wp-content/uploads/2021/02/complete-checklist-of-our-post-renovation-cleaning.pdf"
                    download
                    target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    > Click here to download our post renovation cleaning checklist</a>
                </div>

                <div className="col-span-2">
                    <img src="/post-2.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
                    <img src="/post-3.webp" alt="Cocina limpia" className="w-full rounded-lg mb-4" />
                </div>
            </div>
          
        </div>
      </>
  )
}

export default PostRenovation