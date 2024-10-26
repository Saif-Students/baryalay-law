import {
    company1, company2,  company4, company5,
    company6, company7, company8, company9, company10,
    company11, company12, company13, company14, company15,
    company16, company17
  } from "../../assets";
  
  function ClientCompanyLogos() {
    const logos = [
      company1, company2,  company4, company5, 
      company6, company7, company8, company9, company10,
      company11, company12, company13, company14, company15,
      company16, company17
    ];
  
    return (
      <div className="bg-gray-100 py-10">
       <h1 className="text-5xl font-extrabold text-center mb-8 text-gray-800">
        Our Clients
      </h1>
      <p className="text-lg text-center mb-12 text-gray-600">
        Some of our representative clients include (past and present):
      </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-8">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="bg-white p-4 shadow-lg rounded-md flex justify-center items-center hover:scale-105 transform transition-all duration-300"
            >
              <img 
                src={logo} 
                alt={`Company ${index + 1}`} 
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ClientCompanyLogos;
  