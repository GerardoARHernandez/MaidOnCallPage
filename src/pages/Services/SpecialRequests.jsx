import ButtonAppoinment from "../../components/Date/ButtonAppoinment"

const SpecialRequests = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-64 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/service-19.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-5xl font-bold text-white mb-8">Add On & Special Requests</h1>
          <ButtonAppoinment />
        </div>
      </section>
    
      <div className="container mx-auto p-4 pt-24 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          {/* Texto (2/3 del espacio) */}
          <div className="md:col-span-4 pb-20 text-lg">
            <p className='text-center pb-3'>Don’t forget you can make special requests, if you need more, let us know.</p>
            <p className='text-center'><strong>This checklist includes most areas in your kitchen, bathrooms, bedrooms and other living areas. Items not included in the list below can be added to your home cleaning service appointment using the Special Requests Picklist.</strong></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SpecialRequests