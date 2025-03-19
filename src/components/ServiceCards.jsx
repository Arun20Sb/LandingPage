import React from "react";

const services = [
  {
    title: "Web Development",
    description: "Building responsive and high-performance websites.",
    icon: "https://img.freepik.com/premium-vector/programming-language-website-page-layout_999616-2120.jpg?ga=GA1.1.1578229777.1742047692&semt=ais_hybrid",
  },
  {
    title: "Mobile App Development",
    description: "Creating cross-platform mobile applications.",
    icon: "https://img.freepik.com/premium-vector/content-management-system-cartoon-style-vector-concept-illustration_92926-1500.jpg?ga=GA1.1.1578229777.1742047692&semt=ais_hybrid",
  },
  {
    title: "UI/UX Design",
    description: "Designing intuitive and engaging user experiences.",
    icon: "https://img.freepik.com/premium-photo/3d-uiux-mobile-screen-with-user-elements_621266-29.jpg?ga=GA1.1.1578229777.1742047692&semt=ais_hybrid",
  },
];

const ServiceCards = () => {
  return (
    <section className="py-16 bg-gray-100" id="services">
      <div className="container mx-auto px-10 max-md:px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4 text-blue-600">
                <img src={service.icon} alt="" className="w-52 h-52 rounded-full"/>
              </div>
              <h3 className="text-2xl font-semibold text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
