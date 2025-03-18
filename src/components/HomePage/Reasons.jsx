import { BiLike } from "react-icons/bi";
import { FaAirFreshener } from "react-icons/fa";
import { FaMoneyBillAlt } from "react-icons/fa";

const Reasons = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 pt-24">
      <h2 className="text-5xl font-bold text-center text-blue-950 mb-24">Why Choose MAID ON CALL</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Consistent */}
        <div className="text-center w-80">
          <div className="relative rounded-full w-24 h-24 bg-blue-900 hover:bg-pink-600 flex items-center justify-center mx-auto mb-4">
            <FaAirFreshener className="text-6xl text-white absolute" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Consistent</h3>
          <p className="text-gray-600 text-lg">
            We are trustworthy, you can trust us your property because we would
            take care of it, carefully and honestly.
          </p>
        </div>

        {/* Reliable */}
        <div className="text-center w-80">
          <div className="relative rounded-full w-24 h-24 bg-blue-900 hover:bg-pink-600 flex items-center justify-center mx-auto mb-4">
            <BiLike className="text-6xl text-white absolute" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Reliable</h3>
          <p className="text-gray-600 text-lg">
            We are one of the most reliable cleaning companies in the market,
            we care for our clients and We guarantee 100% satisfaction.
          </p>
        </div>

        {/* Affordable */}
        <div className="text-center w-80">
          <div className="relative rounded-full w-24 h-24 bg-blue-900 hover:bg-pink-600 flex items-center justify-center mx-auto mb-4">
            <FaMoneyBillAlt className="text-6xl text-white absolute" />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Affordable</h3>
          <p className="text-gray-600 text-lg">
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