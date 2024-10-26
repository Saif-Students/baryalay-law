import { FaHandshake, FaIndustry, FaGlobe, FaMoneyBillWave } from "react-icons/fa6"; 

function TrustedPartners() {
  let trustedData = [
    { text: "Personalized service and attention to detail", icon: <FaHandshake /> },
    { text: "In-depth industry knowledge and expertise", icon: <FaIndustry /> },
    { text: "Global perspective with local insight", icon: <FaGlobe /> },
    { text: "Efficient and cost-effective solutions", icon: <FaMoneyBillWave /> }
  ];

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 pt-16 lg:pt-28">
      <h2 className="text-xl sm:text-2xl md:text-3xl leading-relaxed font-semibold text-center">
        Whether you&apos;re a multinational corporation, SME, startup, or individual entrepreneur, <br /> <span className="font-variant-smallcaps">Baryalay.law</span> is your trusted partner in Pakistan, providing:
      </h2>
      <div className="w-full mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {trustedData.map((item, index) => (
          <p
            key={index}
            className="box-shadow cursor-pointer p-4 bg-white text-primary-color rounded-lg hover:scale-105 transition-transform duration-300 flex items-center gap-4"
          >
            {item.icon} 
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TrustedPartners;
