import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const ButtonAppointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const { register, handleSubmit, formState: { errors } } = useForm(); // Configuración de react-hook-form

  // Función para abrir el modal
  const openModal = () => setIsModalOpen(true);

  // Función para cerrar el modal
  const closeModal = () => setIsModalOpen(false);

  // Función para manejar el envío del formulario
  const onSubmit = (data) => {
    console.log(data); // Aquí puedes enviar los datos a tu API o hacer lo que necesites
    closeModal(); // Cierra el modal después de enviar el formulario
  };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        onClick={openModal}
        className="hidden md:block bg-blue-800 text-white px-4 py-3 rounded-lg hover:bg-blue-900"
      >
        Book Appointment
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-blue-950">Book Appointment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Campo First Name */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  {...register('firstName', { required: 'First Name is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                )}
              </div>

              {/* Campo Last Name */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  {...register('lastName', { required: 'Last Name is required' })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                )}
              </div>

              {/* Campo Email */}
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Campo Phone Number */}
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  {...register('phoneNumber', {
                    required: 'Phone Number is required',
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Invalid phone number',
                    },
                  })}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>
                )}
              </div>

              {/* Botones del modal */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-blue-900"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ButtonAppointment;