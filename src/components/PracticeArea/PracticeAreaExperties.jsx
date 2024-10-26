
function PracticeAreaExperties() {
    const services = [
        { title: "Real Estate and Construction", bgImage: "url('https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" },
        { title: "Financial Institutions and Banking", bgImage: "url('https://images.pexels.com/photos/17977103/pexels-photo-17977103/free-photo-of-bitcoin-and-dollars.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" },
        { title: "Energy & Power", bgImage: "url('https://cdn.pixabay.com/photo/2023/09/10/11/16/solar-8244680_960_720.jpg')" },
        { title: "Infrastructure and Transportation", bgImage: "url('https://images.pexels.com/photos/28865962/pexels-photo-28865962/free-photo-of-bustling-urban-traffic-on-a-busy-city-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')" },
        { title: "Technology & Fintech", bgImage: "url('https://cdn.pixabay.com/photo/2015/06/24/15/45/hands-820272_1280.jpg')" }
    ];

    return (
       <div className="w-full px-4 sm:px-8 md:px-16  pt-16 lg:pt-28">
         <h2 className="text-xl  md:text-3xl font-bold text-center">
         Our expertise spans various industries, including:
         </h2>
         <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  pt-12">
            {services.map((service, index) => (
                <div
                    key={index}
                    className="relative h-[200px] rounded-xl overflow-hidden group hover:shadow-lg transition-shadow duration-300 ease-in-out"
                    style={{ backgroundImage: service.bgImage, backgroundSize: "cover", backgroundPosition: "center" }}
                >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300 ease-in-out flex items-center justify-center">
                        <p className="text-white text-xl font-bold px-4 text-center">
                            {service.title}
                        </p>
                    </div>
                </div>
            ))}
        </div>
       </div>
    );
}

export default PracticeAreaExperties;
