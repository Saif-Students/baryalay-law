import {  FaBriefcase, FaHandHoldingUsd } from 'react-icons/fa';
import { GiBank, GiNuclearPlant, GiCommercialAirplane } from 'react-icons/gi';
import { MdOutlineGavel, MdOutlineBusinessCenter } from 'react-icons/md';
import { motion } from 'framer-motion';

const PracticeAreaSection = () => {
  const practiceAreas = [
    {
      title: "Corporate and Commercial Law",
      description: "Comprehensive corporate legal services, including contract drafting and negotiations.",
      icon: <MdOutlineBusinessCenter className="text-5xl text-blue-500" />,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image paths
    },
    {
      title: "Banking and Finance",
      description: "Expertise in banking regulations, finance transactions, and risk management.",
      icon: <GiBank className="text-5xl text-green-500" />,
      img: "https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Mergers and Acquisitions",
      description: "Specialized advisory services for complex mergers, acquisitions, and due diligence.",
      icon: <FaBriefcase className="text-5xl text-yellow-500" />,
      img: "https://images.pexels.com/photos/7213434/pexels-photo-7213434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Project Finance & Infrastructure Development",
      description: "Legal assistance for large-scale infrastructure projects and energy sectors.",
      icon: <GiNuclearPlant className="text-5xl text-purple-500" />,
      img: "https://images.pexels.com/photos/11654553/pexels-photo-11654553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Power Sector & Renewable Energy",
      description: "Advising clients on power generation and renewable energy investments.",
      icon: <FaHandHoldingUsd className="text-5xl text-red-500" />,
      img: "https://images.pexels.com/photos/17658153/pexels-photo-17658153/free-photo-of-view-of-a-hydroelectric-power-plant.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Advocacy & Dispute Resolution",
      description: "Effective representation and dispute resolution across various sectors.",
      icon: <MdOutlineGavel className="text-5xl text-gray-500" />,
      img: "https://images.pexels.com/photos/8112153/pexels-photo-8112153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      title: "Real Estate & Construction",
      description: "In-depth legal advice on real estate transactions and construction law.",
      icon: <GiCommercialAirplane className="text-5xl text-orange-500" />,
      img: "https://cdn.pixabay.com/photo/2020/01/26/11/14/construction-4794328_960_720.png",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Stagger the animation based on index
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Practice Areas</h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        We offer a range of legal services, tailored to your business needs.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {practiceAreas.map((area, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <img src={area.img} alt={area.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center mb-4">
                {area.icon}
                <h2 className="ml-4 text-xl font-semibold text-gray-700">{area.title}</h2>
              </div>
              <p className="text-gray-600 text-lg">{area.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PracticeAreaSection;
