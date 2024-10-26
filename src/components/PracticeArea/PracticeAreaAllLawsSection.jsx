import {motion} from "framer-motion"
import { FaCheck } from "react-icons/fa6";

function PracticeAreaAllLawsSection() {
    const allLaws = [
        "Corporate and Commercial Law",
        "Mergers and Acquisitions",
        "Private Equity and Venture Capital",
        "Banking and Finance",
        "Power Sector and Renewable Energy",
        "Regulatory Compliance and Policy",
        "Advocacy and Dispute Resolution",
        "General Corporate Advisory Services",
        "Labor & Employment",
        "Project Finance and Infrastructure Development",
        "Inward & outward foreign investment and foreign exchange regulations"
    ];

    return (
        <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  gap-6 px-4 sm:px-8 md:px-16 pt-12">
            {allLaws.map((law, index) => (
                <motion.div
                    key={index}
                    className="px-4 hover:text-white hover:bg-primary-color cursor-pointer transition-all py-3 border border-gray-400 rounded-full flex items-center gap-3"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                    <FaCheck />
                    {law}
                </motion.div>
            ))}
        </div>
    );
}

export default PracticeAreaAllLawsSection;
