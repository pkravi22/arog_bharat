import React from "react";

const Services = () => {
  const services = [
    "Holistic Health & Wellness",
    "Women",
    "Acne And Skin Care",
    "Infertility",
    "Hirsutism",
    "Hair Thinning and Loss",
    "Mental Health",
    "Direct Primary Care"
  ];

  return (
    <div className="w-full text-center sm:text-left py-6 px-2 md:px-8">
      <h2 className="font-bold text-md mb-4">Services</h2>
      <div className="flex flex-col gap-1">
        {services.map((service, index) => (
          <p className=" text-[12px] font-thin " key={index}>{service}</p>
        ))}
      </div>
    </div>
  );
};

export default Services;
