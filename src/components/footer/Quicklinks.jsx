import React from "react";

const QuickLinks = () => {
  const links = [
    "How It Works",
    "Before and After",
    "About Us",
    "PCOS Specialists",
    "Areas We Serve",
    "FAQ",
    "Patient Portal",
  ];

  return (
    <div className="w-full text-center sm:text-left py-6  px-2 md:px-8">
      <h2 className="text-white text-md font-bold mb-4 ">Quick Links</h2>
      <div>
        {links.map((link, index) => (
          <p  className=" text-[12px] font-thin" key={index}>{link}</p>
        ))}
      </div>
    </div>
  );
};

export default QuickLinks;
