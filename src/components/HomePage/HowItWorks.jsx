
const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 pt-20 bg-blue-50">
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-8">How It Works</h2>
      <p className="text-center text-lg text-gray-600 mb-8 px-20">
        Taking the stress out of any aspect of cleaning is what we specialize in. We will come to your house and offer a free quote, so you know exactly what you'll be spending.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Book Your Cleaning */}
        <div className="text-center w-80">
          <div className="relative">
            <div className="bg-blue-900 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 bg-pink-500 text-white text-xs py-1 px-2 rounded-full">
              BOOK YOUR CLEANING
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Pick a date and time for your cleaning appointment and book it within seconds using our automated system.
          </p>
        </div>

        {/* Clean */}
        <div className="text-center w-80">
          <div className="relative">
            <div className="bg-blue-900 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 bg-pink-500 text-white text-xs py-1 px-2 rounded-full">
              CLEAN
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            A crew member from Maid On Call will come to your home or business for the scheduled appointment.
          </p>
        </div>

        {/* Enjoy */}
        <div className="text-center w-80">
          <div className="relative">
            <div className="bg-blue-900 rounded-full w-32 h-32 flex items-center justify-center mx-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-4 bg-pink-500 text-white text-xs py-1 px-2 rounded-full">
              ENJOY
            </div>
          </div>
          <p className="mt-4 text-gray-600">
            Relax knowing your home or office has been cleaned with quality products and by a professional team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;