import React from 'react';

function Testimonials() {
  // Testimonials data
  const testimonials = [
    {
      name: 'John Doe',
      feedback: 'Baryalay.law provided exceptional legal services. Their professionalism and dedication are unmatched.',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Jane Smith',
      feedback: 'The team at Baryalay.law helped me navigate a complex legal issue with ease. Highly recommended!',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
    {
      name: 'Michael Johnson',
      feedback: 'I am extremely grateful for the support and guidance I received. Outstanding service!',
      image: 'https://via.placeholder.com/100', // Replace with actual image URL
    },
  ];

  return (
    <div className="w-full pb-10  px-4 sm:px-8 md:px-16 pt-16 lg:pt-28">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-color mb-10">
        Testimonials
      </h2>
      <p className="text-base sm:text-lg md:text-xl mt-4">
        coming soon...
      </p>
      {/* <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800 text-center mb-2">
              {testimonial.name}
            </h3>
            <p className="text-gray-600 text-center">{testimonial.feedback}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Testimonials;
