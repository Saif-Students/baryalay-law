import { motion } from "framer-motion"; // For subtle animations
import { haroonjan } from "../../assets";

function PartnerProfileSection() {
  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-16 bg-gray-100">
      
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-12 text-primary-color">
        Partner Profile
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-white p-6 rounded-lg shadow-lg">
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={haroonjan} // Placeholder image, replace with actual profile image
            alt="Haroon Jan Baryalay"
            className="w-full h-[470px] rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Profile Content */}
        <div className="lg:col-span-2">
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-primary-color"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Haroon Jan Baryalay, Managing & Founding Partner
          </motion.h3>

          <motion.p
            className="text-gray-700 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
Haroon is an advocate of the High Courts of Pakistan with over 18 years of experience advising clients on corporate transactional matters. Haroon has over 11 years’ experience working in Pakistan and has spent 7 years working at various regional and international law firms in Dubai, United Arab Emirates.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
Haroon specializes in corporate transactional advisory including general corporate, mergers & acquisitions, private equity and banking & finance including project finance & Islamic finance. Haroon has advised clients on project finance transactions in the energy & power sector including negotiating financing documentation, off-take contracts, power purchase agreements and EPC contracts.          </motion.p>

          <motion.p
            className="text-gray-700 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
Haroon has acted for both lenders and borrowers in a number of large and mid-sized financings and restructurings involving both conventional and Islamic facilities. His experience includes drafting and negotiating LMA based conventional (bilateral and syndicated) facility documentation as well as Shariah compliant facilities.
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
Haroon regularly advises both purchasers and sellers in cross border mergers and acquisitions, as well as private equity deals, including fund structuring. His experience includes drafting and negotiating share purchase agreements, shareholders’ agreements, share subscription agreements and attendant transaction documentation. Haroon’s sectoral expertise includes the energy & power, oil & gas, telecom, financial institutions and real estate sectors.

</motion.p>

          <motion.p
            className="text-gray-700 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
Haroon has served on the board of directors of various public and private sector companies including National Transmission & Dispatch Company Limited (NTDC), Taurus Securities Limited (a subsidiary of National Bank of Pakistan) and Bykea Technologies (Private) Limited. 
          </motion.p>

          <motion.p
            className="text-gray-700 text-lg mt-4 leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
Haroon is a graduate of the Lahore University of Management Sciences (LUMS) (B.Sc. (Hons) Economics) (2001), the University of London (LL.B. Hons) (2004) and Harvard Law School (LL.M.) (2005). 
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default PartnerProfileSection;
