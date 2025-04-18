import { useState } from "react";
import emailjs from 'emailjs-com';
import ButtonAppoinment from "../components/Date/ButtonAppoinment";
import HowItWorks from "../components/HomePage/HowItWorks";
import OurServices from "../components/HomePage/OurServices";
import Reasons from "../components/HomePage/Reasons";
import Recent from "../components/HomePage/Recent";
import Testimonials from "../components/HomePage/Testimonials";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    // Validación básica
    if (!formData.name || !formData.email || !formData.phone) {
      setAlert({ message: 'Please fill all fields', type: 'error' });
      setTimeout(() => setAlert({ message: '', type: '' }), 5000);
      return;
    }

    // Concatenar todos los datos en un solo mensaje
    const fullMessage = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Request: Callback Request
    `;

    const templateParams = {
      title: "Callback Request", // Parámetro predefinido
      name: formData.name, // Parámetro predefinido
      time: new Date().toLocaleTimeString(), // Parámetro predefinido
      message: fullMessage, // Incluir todos los datos aquí
      email: formData.email, // Parámetro predefinido
    };
    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
      templateParams, // Datos del formulario
      import.meta.env.VITE_EMAILJS_USER_ID // User ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setAlert({ message: 'Request sent successfully! We will contact you soon.', type: 'success' });
        setFormData({ name: "", email: "", phone: "" }); // Reset form
      }, (error) => {
        console.log('FAILED...', error);
        setAlert({ message: 'There was an error sending your request', type: 'error' });
      });

    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 5000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        id="inicio"
        className="bg-blue-50 text-center grid grid-cols-1 md:grid-cols-2"
      >
        <div className="container mx-auto px-12 md:col-span-1 py-20">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            Clean House, Happy Home:<br></br><span className="text-3xl">Let Our Cleaners Handle the Dirty Work.</span>
          </h1>
          <p className="text-gray-700 pt-3 mb-8 text-xl">
            SHR Multiservice is here to offer you a life experience in residential and commercial cleaning services.
          </p>
          <div className="space-x-4 flex flex-col items-center">
            <ButtonAppoinment />
          </div>
        </div>
        <div className="md:col-span-1">
          <img src="/home.webp" alt="imagen inicio" className="w-full h-full object-cover"/>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="bg-blue-900 py-6 px-4 md:px-0 text-white">
        <div className="container mx-auto w-full">
          <form className="mx-auto w-full" onSubmit={onSubmit}> 
            <div className="flex flex-col md:flex-row md:space-x-2"> 
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 mb-2 md:mb-0 rounded-2xl text-black"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-2 md:mb-0 rounded-2xl text-black"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-2 mb-2 md:mb-0 rounded-2xl text-black"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl hover:bg-blue-700 w-full"
              >
                Request Callback
              </button>
            </div>
          </form>
          {alert.message && (
            <div className={`mt-4 p-3 rounded-lg text-center ${
              alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {alert.message}
            </div>
          )}
        </div>
      </section>

      <Reasons />
      <OurServices />
      
      {/* Acerca de Nosotros Section */}
      <section id="nosotros" className="bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/1.webp"
              alt="IMG Equipo de SHR Multiservice"
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Professional Cleaning Services for Home and Office
            </h2>
            <p className="text-gray-600 mb-2 text-lg">
              We are SHR Multiservice, a small family business led by an entrepreneur woman, we have a reliable and passionate team committed to offering you the best cleaning service for your home or business.</p>

            <p className="text-gray-600 mb-2">Our company has provided progress and opportunity to our community since 2010, we have been known as a company with social responsibility that helps the ones in needs because we are aware of the importance of giving back to thank all the support and loyalty of our clients.</p>

            <p className="text-gray-600 mb-2">Whether you need a house cleaning, a office cleaning, post construction cleaning, regular house cleaning, spring clean, deep cleaning, move in or move out cleaning, our team is ready to offer you the love and care that your place needs.
            </p>
          </div>
        </div>
      </section>

      <HowItWorks />
      <Recent />
      <Testimonials />
    </div>
  )
}

export default HomePage;