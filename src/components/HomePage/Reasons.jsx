import { BiLike } from "react-icons/bi";
import { FaJugDetergent } from "react-icons/fa6";

const Reasons = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">Why Choose MAID ON CALL</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Consistent */}
        <div className="text-center w-80">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <FaJugDetergent />
          </div>
          <h3 className="text-xl font-semibold mb-2">Consistent</h3>
          <p className="text-gray-600">
            We are trustworthy, you can trust us your property because we would
            take care of it, carefully and honestly.
          </p>
        </div>

        {/* Reliable */}
        <div className="text-center w-80">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <BiLike />
          </div>
          <h3 className="text-xl font-semibold mb-2">Reliable</h3>
          <p className="text-gray-600">
            We are one of the most reliable cleaning companies in the market,
            we care for our clients and We guarantee 100% satisfaction.
          </p>
        </div>

        {/* Affordable */}
        <div className="text-center w-80">
          <div className="bg-blue-100 rounded-full p-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 mx-auto text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Affordable</h3>
          <p className="text-gray-600">
            We are affordable, because we optimize our work so for sure you
            will get more for your money, and that is something that always
            makes us happy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;