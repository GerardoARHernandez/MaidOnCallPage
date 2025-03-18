import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AlertMessage from "../components/AlertMessage";

const GiftCard = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quantity: 1, // Valor predeterminado para la cantidad
      amount: "150", // Valor predeterminado para el monto
    },
  });

  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState("150"); // Estado para el monto seleccionado
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar el modal
  const [zoomStyle, setZoomStyle] = useState({}); // Estado para el efecto de zoom

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    setSelectedAmount(value);

    if (value === "other") {
      setShowCustomAmount(true); // Mostrar el campo de monto personalizado
      setValue("amount", ""); // Limpiar el valor si se selecciona "Other Amount"
    } else if (value === "") {
      setShowCustomAmount(false); // Ocultar el campo de monto personalizado
      setValue("amount", ""); // Limpiar el valor si se selecciona "Choose an amount"
    } else {
      setShowCustomAmount(false); // Ocultar el campo de monto personalizado
      setValue("amount", value); // Establecer el valor seleccionado
    }
  };

  const handleClear = () => {
    setSelectedAmount(""); // Limpiar el monto seleccionado
    setValue("amount", ""); // Limpiar el valor del campo
    setShowCustomAmount(false); // Ocultar el campo de monto personalizado
  };

  // Función para abrir el modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Efecto de zoom al hacer hover sobre la imagen en la página principal
  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoomStyle({ transformOrigin: `${x}% ${y}%`, transform: "scale(1.5)" });
  };

  // Restablecer el zoom al salir del hover
  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  return (
    <div className="flex flex-col md:flex-row items-start max-w-6xl mx-auto p-4 py-8">
      {/* Imagen a la izquierda */}
      <div className="md:w-1/2 mb-4 md:mb-0 relative">
        <div className="relative">
          <img
            src="/gift-card-image.webp"
            alt="Gift Card"
            className="w-full h-auto rounded-lg shadow-lg cursor-pointer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={zoomStyle}
          />
          {/* Ícono de lupa */}
          <button
            onClick={openModal}
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
          >
            🔍
          </button>
        </div>
        <div className="p-4 bg-white rounded-b-lg">
          <p className="text-xl font-semibold">Enjoy the gift of clean</p>
        </div>
      </div>

      {/* Modal para la imagen en grande */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative bg-white p-4 rounded-lg max-w-4xl max-h-full overflow-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-gray-600 text-white p-2 rounded-full hover:bg-gray-700"
            >
              ✕
            </button>
            <img
              src="/gift-card-image.webp"
              alt="Gift Card"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Formulario a la derecha */}
      <div className="md:w-1/2 md:pl-8">
        <h2 className="text-2xl font-bold mb-4">Gift Certificate</h2>
        <p className="mb-6 text-gray-600">$150.00 - $2,000.00</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo para seleccionar el monto */}
          <div className="flex items-center gap-4">
            <select
              id="amount"
              {...register("amount", { required: true })}
              onChange={handleAmountChange}
              value={selectedAmount}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">Choose an amount</option>
              {[...Array(8)].map((_, index) => {
                const amount = 150 + index * 50;
                return (
                  <option key={amount} value={amount}>
                    ${amount}.00
                  </option>
                );
              })}
              <option value="other">Other Amount</option>
            </select>
            <button
              type="button"
              onClick={handleClear}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Clear
            </button>
          </div>
          {errors.amount && (
            <AlertMessage type="error">This field is required</AlertMessage>
          )}

          {/* Campo para monto personalizado */}
          {showCustomAmount && (
            <div>
              <label
                htmlFor="customAmount"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter Custom Amount *
              </label>
              <input
                type="number"
                id="customAmount"
                {...register("customAmount", {
                  required: showCustomAmount,
                  min: 150,
                  max: 2000,
                })}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter amount between $150 and $2,000"
              />
              {errors.customAmount && (
                <AlertMessage type="error">
                  Please enter an amount between $150 and $2,000
                </AlertMessage>
              )}
            </div>
          )}

          {/* Mostrar el formulario solo si se ha seleccionado un monto */}
          {selectedAmount && (
            <>
              {/* Campo para el destinatario */}
              <div>
                <label
                  htmlFor="to"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  To *
                </label>
                <input
                  type="email"
                  id="to"
                  {...register("to", { required: true })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter an email address for each recipient"
                />
                {errors.to && (
                  <AlertMessage type="error">This field is required</AlertMessage>
                )}
                <p className="text-xs text-gray-500 mt-1">
                  Separate multiple email addresses with a comma
                </p>
              </div>

              {/* Campo para el nombre del destinatario */}
              <div>
                <label
                  htmlFor="recipient"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Recipient (optional)
                </label>
                <input
                  type="text"
                  id="recipient"
                  {...register("recipient")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter a friendly name for the recipient"
                />
              </div>

              {/* Campo para el remitente */}
              <div>
                <label
                  htmlFor="from"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  From *
                </label>
                <input
                  type="text"
                  id="from"
                  {...register("from", { required: true })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your name"
                />
                {errors.from && (
                  <AlertMessage type="error">This field is required</AlertMessage>
                )}
              </div>

              {/* Campo para el mensaje */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message (optional)
                </label>
                <textarea
                  id="message"
                  {...register("message")}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Add a message"
                  rows="4"
                ></textarea>
              </div>

              {/* Campo para la fecha de entrega */}
              <div>
                <label
                  htmlFor="deliveryDate"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Delivery Date *
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  {...register("deliveryDate", { required: true })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.deliveryDate && (
                  <AlertMessage type="error">This field is required</AlertMessage>
                )}
                <p className="text-xs text-gray-500 mt-1">Up to a year from today</p>
              </div>
            </>
          )}

          {/* Botón de envío y campo de cantidad */}
          <div className="flex items-center gap-4">
            <input
              type="number"
              id="quantity"
              {...register("quantity", { required: true, min: 1 })}
              className="w-1/4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Qty"
              min="1"
            />
            <button
              type="submit"
              disabled={!selectedAmount} // Deshabilitar si no hay monto seleccionado
              className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Add to cart
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GiftCard;