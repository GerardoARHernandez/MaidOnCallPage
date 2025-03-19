import { useState } from 'react';
import { useForm } from 'react-hook-form';

const ButtonAppointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1); // Paso actual del formulario
  const { register, handleSubmit, formState: { errors }, watch, reset, setValue } = useForm();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1); // Reiniciar el paso al cerrar el modal
    reset(); // Reiniciar el formulario
  };

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  // Observar los valores de los campos para habilitar/deshabilitar el botón "Next"
  const location = watch('location');
  const service = watch('service');
  const extraServices = watch('extraServices', []); // Servicios extra seleccionados
  const frequency = watch('frequency');

  return (
    <>
      {/* Botón responsivo */}
      <button
        onClick={openModal}
        className="w-11/12 md:w-8/12 bg-blue-800 text-white px-3 py-3 rounded-lg hover:bg-blue-950 text-sm lg:text-base font-semibold"
      >
        Book Appointment
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-1 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal} // Cerrar modal al hacer clic fuera
        >
          <div
            className={`bg-white p-4 md:p-12 md:px-24 mx-10 md:mx-16 rounded-xl ${
              location ? 'max-w-4xl' : 'max-w-md'
            } w-full md:w-auto relative flex flex-col md:flex-row`}
            onClick={(e) => e.stopPropagation()} // Evitar que el clic dentro del modal lo cierre
          >
            {/* Botón de cierre (X) */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Contenedor del formulario */}
            <div className={`${location ? 'w-full md:w-3/5 md:pr-8' : 'w-full'}`}>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-950">Book Appointment</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {/* Paso 1: Selección de ubicación */}
                {step === 1 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Location:</label>
                      <select
                        {...register('location', { required: 'Please select a location' })}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a location</option>
                        <option value="Gatineau">Gatineau</option>
                        <option value="Ottawa">Ottawa</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.location && (
                        <p className="text-red-500 text-sm mt-1">{errors.location.message}</p>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!location} // Deshabilitar si no se selecciona una ubicación
                        className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Paso 2: Selección de servicio principal */}
                {step === 2 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Service:</label>
                      <div className="h-48 md:h-64 overflow-y-auto border border-blue-300 rounded-lg">
                        <table className="w-full">
                          <tbody>
                            {[
                              'Regular House Cleaning',
                              'Spring Cleaning',
                              'Deep House Cleaning',
                              'One Time Regular Cleaning',
                              'Move In Cleaning',
                              'Move Out Cleaning',
                              'Condo - Apartment Cleaning',
                              'Post Construction Cleaning',
                              'Post Renovation Cleaning',
                              'Office Cleaning',
                              'Cleaning And Organization',
                              'Short Term Rental & Airbnb',
                              'Declutter',
                              'Preparation For Sale',
                              'Staging Basic',
                              'Add On & Special Requests',
                              'Sanitize Service',
                            ].map((serviceOption) => (
                              <tr
                                key={serviceOption}
                                className="hover:bg-blue-50 cursor-pointer"
                                onClick={() => {
                                  setValue('service', serviceOption); // Actualizar el valor del campo
                                  nextStep(); // Avanzar al siguiente paso
                                }}
                              >
                                <td className="px-4 py-2 border-b border-blue-200">
                                  {serviceOption}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-gray-600"
                      >
                        Back
                      </button>
                    </div>
                  </div>
                )}

                {/* Paso 3: Selección de servicios extra (opcional) */}
                {step === 3 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Extra Services (optional):</label>
                      <div className="h-48 md:h-64 overflow-y-auto border border-blue-300 rounded-lg">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-blue-100">
                              <th className="border border-blue-300 px-4 py-2">Service</th>
                              <th className="border border-blue-300 px-4 py-2">Price</th>
                              <th className="border border-blue-300 px-4 py-2">Select</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { label: 'Room', value: 'Room', price: 25 },
                              { label: 'Bathroom', value: 'Bathroom', price: 24 },
                              { label: '1/2 Bathroom', value: '1/2 Bathroom', price: 12 },
                              { label: 'Window and tracks', value: 'Window and tracks', price: 8 },
                              { label: 'Window and screen', value: 'Window and screen', price: 12 },
                              { label: 'Fridge', value: 'Fridge', price: 50 },
                              { label: 'Stove', value: 'Stove', price: 60 },
                              { label: 'Heavy duty', value: 'Heavy duty', price: 100 },
                              { label: 'Air Vents', value: 'Air Vents', price: 20 },
                              { label: 'Nick Nacks', value: 'Nick Nacks', price: 30 },
                              { label: 'Balconies Swept', value: 'Balconies Swept', price: 12 },
                              { label: 'Blinds Wiped B', value: 'Blinds Wiped B', price: 30 },
                              { label: 'Baseboards', value: 'Baseboards', price: 50 },
                              { label: 'Wall Washing', value: 'Wall Washing', price: 55 },
                              { label: 'Basement', value: 'Basement', price: 60 },
                              { label: 'Linen Changing', value: 'Linen Changing', price: 7 },
                            ].map((item) => (
                              <tr key={item.value} className="hover:bg-gray-50">
                                <td className="border border-blue-300 px-4 py-2">{item.label}</td>
                                <td className="border border-blue-300 px-4 py-2">${item.price}</td>
                                <td className="border border-blue-300 px-4 py-2 text-center">
                                  <input
                                    type="checkbox"
                                    value={`${item.label} - $${item.price}`}
                                    {...register('extraServices')}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-gray-600"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={nextStep}
                        className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-900"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {/* Paso 4: Selección de frecuencia */}
                {step === 4 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Frequency:</label>
                      <select
                        {...register('frequency', { required: 'Please select a frequency' })}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a frequency</option>
                        <option value="One Time">One Time</option>
                        <option value="Weekly">Weekly</option>
                        <option value="BiWeekly">BiWeekly</option>
                        <option value="Month">Month</option>
                      </select>
                      {errors.frequency && (
                        <p className="text-red-500 text-sm mt-1">{errors.frequency.message}</p>
                      )}
                    </div>
                    <div className="flex justify-between">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-500 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-gray-600"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={!frequency} // Deshabilitar si no se selecciona una frecuencia
                        className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

            {/* Resumen de selecciones (solo se muestra si hay una ubicación seleccionada) */}
            {location && (
              <div className="w-full md:w-5/12 mt-8 md:mt-0 md:pl-10 md:border-l md:border-gray-200">
                <h3 className="text-xl font-bold w-full mb-4 text-blue-950">Your Selections</h3>
                <div className="space-y-4">
                  {location && (
                    <div>
                      <h4 className="font-semibold text-gray-700">Location:</h4>
                      <p className="text-gray-600">{location}</p>
                    </div>
                  )}
                  {service && (
                    <div>
                      <h4 className="font-semibold text-gray-700">Service:</h4>
                      <p className="text-gray-600">{service}</p>
                    </div>
                  )}
                  {extraServices && extraServices.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-700">Extra Services:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {extraServices.map((extra, index) => (
                          <li key={index}>{extra}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {frequency && (
                    <div>
                      <h4 className="font-semibold text-gray-700">Frequency:</h4>
                      <p className="text-gray-600">{frequency}</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonAppointment;