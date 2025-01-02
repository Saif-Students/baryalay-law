import { motion } from "framer-motion"; // Import Framer Motion
import {
  company1, company2, company4, company5,
  company6, company7, company8, company9, company10,
  company11, company12, company13, company14, company15,
  company16, company17, company18, company19, company20
} from "../../assets";

function ClientCompanyLogos() {
  const logos = [
    company1, company2, company4, company5,
    company6, company7, company8, company9, company10,
    company11, company12, company13, company14, company15,
    company16, company17, company18, company19, company20
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delay between each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-100 py-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
        Our Clients
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        Some of our representative clients include (past and present):
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-md flex justify-center items-center"
            whileHover={{ scale: 1.1 }} // Hover effect using Framer Motion
            variants={itemVariants}
          >
            <img
              src={logo}
              alt={`Company ${index + 1}`}
              className="max-h-20 object-contain"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default ClientCompanyLogos;
