import { FaIndustry, FaBuilding, FaCheckCircle } from "react-icons/fa"; 
import { GiNuclearPlant, GiBank } from "react-icons/gi";
import { MdOutlineDevicesOther } from "react-icons/md";
import { BsPaintBucket } from "react-icons/bs";
import { motion } from 'framer-motion';

const ClientSection = () => {
  const clientsData = [
    {
      category: "Energy & Power",
      icon: <GiNuclearPlant className="text-4xl text-green-500" style={{ minWidth: '2rem', minHeight: '2rem' }} />, // Fixed size
      clients: [
        "JCM Power (Canada)",
        "Gharo Solar Limited",
        "Phanes Energy DMCC (Dubai, UAE)",
        "Korea Hydro & Nuclear Power (South Korea)",
        "FAS Energy Pakistan (Private) Limited",
        "Ladiesfund Energy (Pvt) Limited",
      ],
    },
    {
      category: "Real Estate & Construction",
      icon: <FaBuilding className="text-4xl text-blue-500" style={{ minWidth: '2rem', minHeight: '2rem' }} />, 
      clients: [
        "Chakor Ventures (Private) Limited",
        "Square Impact (Pvt) Limited",
      ],
    },
    {
      category: "Banking",
      icon: <GiBank className="text-4xl text-purple-500" style={{ minWidth: '2rem', minHeight: '2rem' }} />, 
      clients: [
        "Pak China Investment Company Limited",
        "Askari Bank Limited",
      ],
    },
    {
      category: "Private Equity",
      icon: <FaIndustry className="text-4xl text-yellow-500" style={{ minWidth: '2rem', minHeight: '2rem' }} />, 
      clients: [
        "Himmah Capital DIFC (Dubai)",
        "Asma Capital Partners B.S.C (Bahrain)",
      ],
    },
    {
      category: "Technology & Fintech",
      icon: <MdOutlineDevicesOther className="text-4xl text-red-500" style={{ minWidth: '2rem', minHeight: '2rem' }} />, 
      clients: [
        "Bykea Technologies (Private) Limited",
        "FinVolution Group (China) / Finleap Financial Services (Private) Limited",
        "Cicada Capital (Singapore)",
        "Opay / NanoBank",
        "Munsalik Digital (Pvt) Limited",
      ],
    },
    {
      category: "Others",
      icon: <BsPaintBucket className="text-4xl text-orange-500" style={{ minWidth: '2rem', minHeight: '2rem' }} />, 
      clients: [
        "Kansai Paints (Middle East) LLP",
        "Study World Dubai",
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
        Our Clients
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        Some of our representative clients include (past and present):
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {clientsData.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-8 hover:shadow-2xl transition-shadow duration-300"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <div className="flex items-center mb-6">
              {category.icon}
              <h2 className="ml-4 text-2xl font-semibold text-gray-700">
                {category.category}
              </h2>
            </div>
            <ul className="text-gray-600">
              {category.clients.map((client, idx) => (
                <li key={idx} className="text-lg mb-2 flex items-center">
                  <FaCheckCircle className="mr-2 text-green-500" style={{ minWidth: '1.25rem', minHeight: '1.25rem' }} /> {/* Fixed list icon size */}
                  {client}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ClientSection;
