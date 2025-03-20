import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { TfiEmail } from "react-icons/tfi";
import { FiPhone } from 'react-icons/fi';
import { BiAlarm } from 'react-icons/bi';
import AlertMessage from '../components/AlertMessage';
import emailjs from 'emailjs-com';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [alert, setAlert] = useState({ message: '', type: '' });

  const onSubmit = (data) => {
    // Concatenar todos los datos en un solo mensaje
    const fullMessage = `
      Nombre: ${data.firstName} ${data.lastName}
      Email: ${data.email}
      Teléfono: ${data.phone}
      Mensaje: ${data.message}
    `;
  
    const templateParams = {
      title: "Contacto", // Parámetro predefinido
      name: data.firstName, // Parámetro predefinido
      time: new Date().toLocaleTimeString(), // Parámetro predefinido
      message: fullMessage, // Incluir todos los datos aquí
      email: data.email, // Parámetro predefinido
    };
    
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
      templateParams, // Datos del formulario
      import.meta.env.VITE_EMAILJS_USER_ID // User ID
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setAlert({ message: 'Form submitted successfully', type: 'success' });
        reset();
      }, (error) => {
        console.log('FAILED...', error);
        setAlert({ message: 'There was an error sending the form', type: 'error' });
      });
  
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 5000);
  };

  return (
    <>
      {/* Sección de la imagen de fondo con título */}
      <section
        className="relative w-full h-80 flex items-center justify-center"
        style={{
          backgroundImage: 'url("/contact.webp")', // Reemplaza con tu imagen
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-55"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold text-white mb-4">Contact</h1>
        </div>
      </section>

      {/* Sección del formulario de contacto */}
      <div className="min-h-screen bg-blue-50 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-max mx-auto bg-white rounded-lg shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-6">
            {/* Formulario de contacto (3/4 del espacio) */}
            <div className="lg:col-span-3 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-l-4 border-blue-700 pl-4">
                MESSAGE
              </h2>

              {/* Mostrar el mensaje de alerta */}
              {alert.message && (
                <AlertMessage type={alert.type}>{alert.message}</AlertMessage>
              )}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="First Name"
                      {...register('firstName')}
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Last Name"
                      {...register('lastName')}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Email Address"
                      {...register('email', {
                        required: 'This field is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email',
                        },
                      })}
                    />
                    {errors.email && (
                      <AlertMessage type={'error'}>{errors.email.message}</AlertMessage>
                    )}
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      {...register('phone', {
                        required: 'Phone number is required',
                      })}
                      className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                      placeholder="Phone Number"
                    />
                    {errors.phone && (
                      <AlertMessage type={'error'}>{errors.phone.message}</AlertMessage>
                    )}
                  </div>
                </div>
                <div className="mt-4">
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows="5"
                    placeholder="Message"
                    {...register('message')}
                  ></textarea>
                </div>
                <div className="mt-4 flex items-center">
                  <input
                    type="checkbox"
                    id="robot"
                    {...register('robot', { required: "You must confirm that you're not a robot" })}
                    className="mr-2"
                  />
                  <label htmlFor="robot" className="text-sm px-1">
                    I'm not a robot
                  </label>
                  {errors.robot && (
                    <AlertMessage type={'error'}>{errors.robot.message}</AlertMessage>
                  )}
                </div>
                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full font-semibold text-xl bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>

            {/* Información de contacto (1/4 del espacio) */}
            <div className="lg:col-span-1 bg-white p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-7 border-l-4 border-blue-700 pl-4">
                OUR CONTACT
              </h2>
              <div className="mb-4">
                <p className="text-gray-600 flex items-center">
                  <TfiEmail size={42} className="mr-2" />
                  <strong className="text-lg pl-2">shrmultiservice@gmail.com</strong>
                </p>
                <p className="text-gray-600 flex items-center mt-2">
                  <FiPhone size={42} className="mr-2" />
                  <strong className="text-lg pl-2">613-618-0969</strong>
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-2 flex items-center pl-2">
                  <BiAlarm size={42} className="mr-2" />
                  Operating Hours
                </h3>
                <div className="pl-14">
                  <p className="text-gray-600">
                    <strong>Mon-Fri:</strong> 9:00 am - 5:00 pm
                  </p>
                  <p className="text-gray-600">
                    <strong>Sat-Sun:</strong> 10:00 am - 4:00 pm
                  </p>
                </div>
              </div>
              <div className="pt-10">
                <h2 className="text-2xl font-semibold text-blue-800 mb-6 border-l-4 border-blue-800 pl-4">
                  SOCIAL MEDIA
                </h2>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/bestcleanerever/"
                    className="text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size={46} />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    className="text-blue-600 hover:text-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={46} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;