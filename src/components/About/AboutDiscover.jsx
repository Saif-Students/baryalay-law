// AboutDiscover.js
import { FaCircleDot } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import Framer Motion

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

function AboutDiscover() {
  let discoverData = [
    "Strategic counsel on complex transactions",
    "Innovative solutions for business growth",
    "Effective dispute resolution and advocacy",
    "Expert guidance on regulatory compliance",
    "Tailored advice for foreign investors",
    "Tax advisory, structuring and compliance",
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 pt-6x lg:pt-10">
      {/* Header Section */}
      {/* <h2 className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-semibold text-center">
        We have a deep understanding of Pakistan&apos;s legal landscape and international best practices.
        <br />
        We deliver:
      </h2> */}

      {/* Animated List Items */}
      <motion.div
        className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {discoverData.map((item, index) => (
          <motion.p
            key={index}
            className="cursor-pointer p-4 bg-primary-color text-text-light-color rounded-md hover:scale-105 transition-transform duration-300 flex items-center gap-4"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCircleDot className="text-xl" />
            {item}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}

export default AboutDiscover;
