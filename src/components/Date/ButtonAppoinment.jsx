// ButtonAppointment.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import DateTimePicker from "./DateTimePicker";
import AlertMessage from "../AlertMessage"; 
import { services, extraServices } from "../../services";

const ButtonAppointment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    setValue,
  } = useForm();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setStep(1);
    reset();
  };

  const onSubmit = (data) => {
    console.log(data);
    closeModal();
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const location = watch("location");
  const service = watch("service");
  const extraServicesSelected = watch("extraServices", []);
  const frequency = watch("frequency");

  const basePrice = 60;

  const calculateTotalPrice = () => {
    let total = basePrice;
    if (extraServicesSelected && extraServicesSelected.length > 0) {
      extraServicesSelected.forEach((extra) => {
        const price = parseFloat(extra.split(" - $")[1]);
        total += price;
      });
    }
    return total.toFixed(2);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="w-11/12 md:w-8/12 bg-blue-800 text-white px-3 py-3 rounded-lg hover:bg-blue-950 text-sm lg:text-base font-semibold"
      >
        Book Appointment
      </button>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className={`bg-white p-4 md:p-12 md:px-24 mx-10 md:mx-16 rounded-xl ${
              location ? "max-w-4xl" : "max-w-md"
            } w-full md:w-auto relative flex flex-col md:flex-row`}
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className={`${location ? "w-full md:w-3/5 md:pr-8" : "w-full"}`}>
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-blue-950">Book Appointment</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Location:</label>
                      <select
                        {...register("location", { required: "Please select a location" })}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a location</option>
                        <option value="Gatineau">Gatineau</option>
                        <option value="Ottawa">Ottawa</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.location && (
                        <AlertMessage type="error">{errors.location.message}</AlertMessage>
                      )}
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!location}
                        className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Service:</label>
                      <div className="h-48 md:h-64 overflow-y-auto border border-blue-300 rounded-lg">
                        <table className="w-full">
                          <tbody>
                            {services.map((serviceOption) => (
                              <tr
                                key={serviceOption}
                                className="hover:bg-blue-50 cursor-pointer"
                                onClick={() => {
                                  setValue("service", serviceOption);
                                  nextStep();
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
                            {extraServices.map((item) => (
                              <tr key={item.value} className="hover:bg-gray-50">
                                <td className="border border-blue-300 px-4 py-2">{item.label}</td>
                                <td className="border border-blue-300 px-4 py-2">${item.price}</td>
                                <td className="border border-blue-300 px-4 py-2 text-center">
                                  <input
                                    type="checkbox"
                                    value={`${item.label} - $${item.price}`}
                                    {...register("extraServices")}
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

                {step === 4 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Frequency:</label>
                      <select
                        {...register("frequency", { required: "Please select a frequency" })}
                        className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a frequency</option>
                        <option value="One Time">One Time</option>
                        <option value="Weekly">Weekly</option>
                        <option value="BiWeekly">BiWeekly</option>
                        <option value="Month">Month</option>
                      </select>
                      {errors.frequency && (
                        <AlertMessage type="error">{errors.frequency.message}</AlertMessage>
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
                        type="button"
                        onClick={nextStep}
                        disabled={!frequency}
                        className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-900 disabled:bg-gray-400 disabled:cursor-not-allowed"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                )}

                {step === 5 && (
                  <div>
                    <div className="mb-4">
                      <label className="block text-gray-700 mb-2">Select Date and Time:</label>
                      <DateTimePicker
                        onDateTimeSelect={(dateTime) => setValue("dateTime", dateTime)}
                      />
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
                        className="bg-blue-800 text-white px-4 py-2 md:px-6 md:py-2 rounded-lg hover:bg-blue-900"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>

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
                  {extraServicesSelected && extraServicesSelected.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-700">Extra Services:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {extraServicesSelected.map((extra, index) => (
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
                  {service && (
                    <div>
                      <h4 className="font-semibold text-gray-700">Total Price:</h4>
                      <p className="text-gray-600">${calculateTotalPrice()}</p>
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