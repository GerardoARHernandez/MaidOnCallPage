// DateTimePicker.js
import { useState } from "react";
import AlertMessage from "../AlertMessage"; // Importar el componente AlertMessage

const DateTimePicker = ({ onDateTimeSelect }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [error, setError] = useState(""); // Estado para manejar el mensaje de error

  // Generar las opciones de tiempo (9:00 AM - 2:30 PM en intervalos de 15 minutos)
  const generateTimeOptions = () => {
    const times = [];
    let hour = 9;
    let minute = 0;

    while (hour < 14 || (hour === 14 && minute <= 30)) {
      const time = `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
      times.push(time);
      minute += 15;
      if (minute === 60) {
        minute = 0;
        hour += 1;
      }
    }
    return times;
  };

  // Manejar el cambio de fecha
  const handleDateChange = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    setError(""); // Limpiar el error al seleccionar una fecha
    onDateTimeSelect({ date, time: selectedTime });
  };

  // Manejar el cambio de hora
  const handleTimeChange = (e) => {
    const time = e.target.value;
    setSelectedTime(time);
    setError(""); // Limpiar el error al seleccionar una hora
    onDateTimeSelect({ date: selectedDate, time });
  };

  // Validar si se han seleccionado fecha y hora
  const validateDateTime = () => {
    if (!selectedDate || !selectedTime) {
      setError("Please select both a date and a time."); // Mostrar mensaje de error
      return false;
    }
    setError(""); // Limpiar el error si todo está bien
    return true;
  };

  // Obtener la fecha mínima (mañana)
  const getMinDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Select Date:</label>
        <input
          type="date"
          min={getMinDate()}
          value={selectedDate}
          onChange={handleDateChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Select Time:</label>
        <select
          value={selectedTime}
          onChange={handleTimeChange}
          className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        >
          <option value="">Select a time</option>
          {generateTimeOptions().map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      {/* Mostrar mensaje de error si no se seleccionan fecha y hora */}
      {error && <AlertMessage type="error">{error}</AlertMessage>}
    </div>
  );
};

export default DateTimePicker;