import { useState } from "react";
import emailjs from 'emailjs-com';
import ButtonAppoinment from "../components/Date/ButtonAppoinment";

const MaintenancePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [alert, setAlert] = useState({ message: "", type: "" });

  // Copia el mismo manejo del formulario de contacto por si necesitas recibir consultas
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      setAlert({ message: 'Please fill all fields', type: 'error' });
      setTimeout(() => setAlert({ message: '', type: '' }), 5000);
      return;
    }
    const fullMessage = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nRequest: Callback Request (During Maintenance)`;
    const templateParams = {
      title: "Callback Request (Maintenance Mode)",
      name: formData.name,
      time: new Date().toLocaleTimeString(),
      message: fullMessage,
      email: formData.email,
    };
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_USER_ID
    ).then((response) => {
      setAlert({ message: 'Request sent! We will contact you soon.', type: 'success' });
      setFormData({ name: "", email: "", phone: "" });
    }, (error) => {
      setAlert({ message: 'Error sending request', type: 'error' });
    });
    setTimeout(() => setAlert({ message: '', type: '' }), 5000);
  };

  return (
    <div>
      {/* Hero Section modificada para mantenimiento */}
      <section className="bg-blue-50 text-center min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-12 py-20">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">
            🛠️ We're Under Maintenance
          </h1>
          <p className="text-gray-700 pt-3 mb-8 text-xl">
            Sorry for the inconvenience. We're improving our services and will be back soon!
          </p>
          
          {/* Formulario de contacto (opcional, para emergencias) */}
          <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Need urgent help?</h2>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full p-2 mb-2 rounded-2xl border border-gray-300"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-2 mb-2 rounded-2xl border border-gray-300"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full p-2 mb-4 rounded-2xl border border-gray-300"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-2xl hover:bg-blue-700 w-full"
              >
                Contact Us
              </button>
            </form>
            {alert.message && (
              <div className={`mt-4 p-2 rounded-lg text-center ${
                alert.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {alert.message}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;