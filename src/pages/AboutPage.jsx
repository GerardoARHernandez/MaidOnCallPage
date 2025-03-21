import React, { useEffect } from "react";
import Reasons from "../components/HomePage/Reasons";
import ButtonAppointment from "../components/Date/ButtonAppoinment";

const AboutPage = () => {
  // Función para desplazarse a la sección correspondiente
  const scrollToSection = (hash) => {
    if (hash) {
      const element = document.getElementById(hash.substring(1)); // Eliminar el "#" del hash
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Desplazarse suavemente al elemento
      }
    }
  };

  // Efecto para manejar el desplazamiento al cargar la página o al cambiar el hash
  useEffect(() => {
    const hash = window.location.hash; // Obtener el hash actual
    if (hash) {
      // Usar un setTimeout para asegurarnos de que el desplazamiento se realice después del renderizado
      setTimeout(() => {
        scrollToSection(hash);
      }, 100); // 100 ms de retraso
    }
  }, [window.location.hash]); // Dependencia: el hash de la URL

  return (
    <div>
        {/* Hero Section */}
        <section 
            className="relative w-full h-80 flex items-center justify-center"
            style={{
                backgroundImage: 'url("/about.webp")', 
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
          <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
          <div className="relative z-10 text-center">
              <h1 className="text-5xl font-bold text-white mb-4">
              About Us
              </h1>
          </div>
        </section>

        <section className="bg-blue-50 py-20">
          <div className="container mx-auto max-w-lg md:max-w-3xl lg:max-w-6xl text-lg px-4 lg:px-16 md:px-0">
            <p className="mb-6">
              We are <strong>SHR Multiservice,</strong> a small family business led by an entrepreneur woman, we have a reliable and passionate team committed to offering you the best cleaning service for your home or business.
            </p>

            <p className="mb-6">
              Our company has provided progress and opportunity to our community since 2010, we have been known as a company with social responsibility that helps the ones in needs because we are aware of the importance of giving back to thank all the support and loyalty of our clients.
            </p>

            <p className="mb-6">
              If you need any of our services, our team is ready to offer you the love and care that your place needs.
            </p>

            <div>
              <h3 className="font-semibold mb-2">House Cleaning Services we offer:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li className="font-normal">Spring cleaning</li>
                <li className="font-normal">Deep house cleaning</li>
                <li className="font-normal">One-time regular cleaning</li>
                <li className="font-normal">Regular Cleaning</li>
                <li className="font-normal">Move-in cleaning</li>
                <li className="font-normal">Move out cleaning</li>
                <li className="font-normal">Condo and Apartment cleaning</li>
                <li className="font-normal">Post-construction cleaning</li>
                <li className="font-normal">Post-renovation cleaning</li>
                <li className="font-normal">Short term rental and AIRBNB</li>
                <li className="font-normal">Office cleaning</li>
                <li className="font-normal">Cleaning and organization</li>
                <li className="font-normal">Declutter</li>
              </ul>
            </div>
          </div>
        </section>

      {/* Sección de Información */}
      <section id="why-choose-us"> {/* Sección con id */}
        <Reasons />
      </section>

      {/* Sección de Valores */}
      <section id="company-values" className="bg-blue-900 text-white py-16"> {/* Sección con id */}
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
            {/* Valor 1 */}
            <div className="text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">COMMITMENT</h3>
              <p className="text-gray-100">
                Willingness to dedicate our time and energy to every job, to provide quality service to our customers.
              </p>
            </div>

            {/* Valor 2 */}
            <div className="text-center">
              <div className="text-4xl mb-4">⏱️</div> 
              <h3 className="text-xl font-bold mb-2">EFFICIENCY</h3>
              <p className="text-gray-100">
                We value your time and money, that's why we don't waste time and do our quality work fast.
              </p>
            </div>

            {/* Valor 3 */}
            <div className="text-center">
              <div className="text-4xl mb-4">✅</div> 
              <h3 className="text-xl font-bold mb-2">HONESTY</h3>
              <p className="text-gray-100">
                Integrity comes first for us, we are trustworthy.
              </p>
            </div>

            {/* Valor 4 */}
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div> 
              <h3 className="text-xl font-bold mb-2">PERSEVERANCE</h3>
              <p className="text-gray-100">
                We pursuit to acquire an excellent service that our clients deserve.
              </p>
            </div>

            {/* Valor 5 */}
            <div className="text-center">
              <div className="text-4xl mb-4">❤️</div> {/* Cambié el icono */}
              <h3 className="text-xl font-bold mb-2">SERVICE TO OUR COMMUNITY</h3>
              <p className="text-gray-100">
                We thank our community by giving back to the most vulnerable ones.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-100 px-5">
              As a part of our contribution, every month we provide 3 hours of free
              cleaning to people who are going through cancer treatment, depression
              problems, and elderly, we need you to help us identifying the one in
              needs, if you know someone who is going through any of these difficult
              times please send us their information by email at shrmultiservice@gmail.com
            </p>
          </div>
        </div>
      </section>      

      {/* Llamada a la acción */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Ready for a spotless clean?
          </h2>
          <p className="text-gray-600 my-8">
            Contact us today and discover why we are the best option.
          </p>
          <ButtonAppointment />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;