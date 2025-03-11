
import HowItWorks from "../components/HomePage/HowItWorks"
import OurServices from "../components/HomePage/OurServices"
import Reasons from "../components/HomePage/Reasons"

const HomePage = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-blue-50 py-20 text-center"
      >
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Clean House, Happy Home:<br></br><span className="text-3xl">Let Our Cleaners Handle the Dirty Work.</span>
          </h1>
          <p className="text-gray-600 mb-8">
            Maid on call is here to offer you a life experience in residential and commercial cleaning services.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
    <section id="contacto" className="bg-blue-900 py-6 text-white">
        <div className="container mx-auto w-full">
            <form className="mx-auto w-full"> {/* Formulario ocupa todo el ancho */}
            <div className="flex flex-col md:flex-row md:space-x-2"> {/* Espacio reducido */}
                <input
                type="text"
                placeholder="Name"
                className="w-full p-2 mb-2 md:mb-0 rounded text-black" 
                />
                <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-2 md:mb-0 rounded text-black" 
                />
                <input
                type="text"
                placeholder="Phone Number"
                className="w-full p-2 mb-2 md:mb-0 rounded text-black" 
                />
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 w-full" 
                >
                Request Callback
                </button>
            </div>
            </form>
        </div>
    </section>

    <Reasons />

    <OurServices />
      

      {/* Acerca de Nosotros Section */}
      <section id="nosotros" className="bg-blue-50 py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/1.webp"
              alt="IMG Equipo de Maid on Call"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
                Professional Cleaning Services for Home and Office
            </h2>
            <p className="text-gray-600 mb-4">
                We are MAID ON CALL, a small family business led by an entrepreneur woman, we have a reliable and passionate team committed to offering you the best cleaning service for your home or business.

                Our company has provided progress and opportunity to our community since 2010, we have been known as a company with social responsibility that helps the ones in needs because we are aware of the importance of giving back to thank all the support and loyalty of our clients.

                Whether you need a house cleaning, a office cleaning, post construction cleaning, regular house cleaning, spring clean, deep cleaning, move in or move out cleaning, our team is ready to offer you the love and care that your place needs.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Testimonios Section */}
      <section id="testimonios" className="py-24 bg-blue-50">
        <div className="container mx-auto ">
          <h2 className="text-5xl font-bold text-center text-blue-950 mb-16">
          Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            {/* Tarjeta de testimonio */}
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <p className="text-gray-600 mb-4">
                "I have tried several cleaning companies over the years, but this one is by far the best. They are professional, courteous, and they always go above and beyond to ensure my home is spotless. Their rates are competitive, and I appreciate their dedication to customer satisfaction. "
              </p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★★</div>
                <div className="ml-2 font-bold">Liam J</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-2xl">
              <p className="text-gray-600 mb-4">
                " I am a busy mom of two, and I don't have time to clean my house as often as I'd like. That's where this residential house cleaning company comes in. They take care of all the cleaning tasks I don't have time for, and they do an amazing job. I love coming home to a clean and tidy house, and I couldn't do it without them.  "
              </p>
              <div className="flex items-center">
                <div className="text-yellow-400">★★★★★</div>
                <div className="ml-2 font-bold">Ana</div>
              </div>
            </div>
            {/* Repite para otros testimonios */}
          </div>
        </div>
      </section>
    
    </div>
  )
}

export default HomePage