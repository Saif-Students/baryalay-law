import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa"; // Correct import for react-icons/fa

function AboutContact() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 py-16 lg:py-28 mt-[112px]  bg-gray-100">
      <h2 className="text-2xl sm:text-3xl md:text-4xl leading-normal font-semibold text-center text-primary-color mb-12">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-12">
        {/* Islamabad Office */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-bold mb-4 text-primary-color">Islamabad Office</h3>
          <p className="text-gray-700 flex items-center gap-3">
            <FaMapMarkerAlt /> No. 76, Street 55, MPCHS, E-11/3, Islamabad
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 051-843-1474 / 051-843-1465
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 0317-7900148 / 0317-5099555
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaEnvelope /> hjb@baryalay-law.com / admin@baryalay-law.com
          </p>
        </div>

        {/* Lahore Office */}
        <div className="bg-white p-6 shadow-lg rounded-lg hover:shadow-2xl transition-shadow">
          <h3 className="text-xl font-bold mb-4 text-primary-color">Lahore Office</h3>
          <p className="text-gray-700 flex items-center gap-3">
            <FaMapMarkerAlt /> No. 10C, Upper Mall Scheme, Lahore
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 051-843-1474 / 051-843-1465
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaPhone /> 0317-7900148 / 0317-5099555
          </p>
          <p className="text-gray-700 flex items-center gap-3 mt-2">
            <FaEnvelope /> hjb@baryalay-law.com / admin@baryalay-law.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutContact;
