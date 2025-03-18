import React, { useState, useEffect } from "react";

const Recent = () => {
  const images = [
    '/service-7.webp',
    '/recent-cleaning-1.webp',
    '/service-1.webp',
    '/regular-2.webp',
    '/DeepHouse2.webp',
    '/1.webp',
    '/recent-cleaning-2.webp',
    '/DeepHouse1.webp'
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const goToPrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (isModalOpen) {
        if (event.key === "ArrowLeft") {
          goToPrevious();
        } else if (event.key === "ArrowRight") {
          goToNext();
        } else if (event.key === "Escape") {
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isModalOpen]);

  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className="px-8 pb-12 pt-20 bg-white">
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-16">Our Recents Cleaning</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Recent work ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClickOutside}
        >
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white text-2xl bg-gray-800 p-2 rounded-full hover:bg-gray-700"
          >
            ✕
          </button>

          <div className="relative w-full max-w-4xl">
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              ◀️
            </button>

            <img
              src={images[selectedImageIndex]}
              alt={`Recent work ${selectedImageIndex + 1}`}
              className="w-full h-auto rounded-lg"
            />

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              ▶️
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recent;