import React from "react";
import guruji from "../../assets/guruji1.png";
import digestion from "../../assets/digestion.png";
import men from "../../assets/mens.png";
import women from "../../assets/women.png";
import holistic from "../../assets/holistic.png";
import maternal from "../../assets/maternal.png";
import yoga from "../../assets/yoga.png";
import healing from "../../assets/healing.png";
import weeks from "../../assets/weeks.png";
import hours from "../../assets/hours.png";
import video from "../../assets/video.svg";
import sadhaks from "../../assets/sadhaks.png";
import { RiCalendarCheckLine } from "react-icons/ri";
import { MdPeopleAlt } from "react-icons/md";
const DiabetesServices = () => {
  const coursesData = [
    {
      id: 1,
      image: holistic,  // Corrected here
      price: "$00",
      hours: "20 hours",
      totalSadhkas: "100+",
      level: "Beginner",
      totalClasses: "10",
      features: [
        "Yoga Asanas",
        "Meditation",
        "Breathing Exercises",
        "Mindfulness",
      ],
    },
    {
      id: 2,
      image: digestion,  // Corrected here
      price: "$0",
      hours: "30 hours",
      totalSadhkas: "800+",
      level: "Intermediate",
      totalClasses: "15",
      features: [
        "Yoga Asanas",
        "Advanced Breathing",
        "Pranayama",
        "Spiritual Growth",
      ],
    },
    {
      id: 3,
      image: men,  // Corrected here
      price: "$20",
      hours: "25 hours",
      totalSadhkas: "700+",
      level: "Beginner",
      totalClasses: "12",
      features: ["Yoga Asanas", "Mindfulness", "Pranayama", "Chakra Healing"],
    },
    {
      id: 4,
      image: healing,  // Corrected here
      price: "$180",
      hours: "40 hours",
      totalSadhkas: "1000+",
      level: "Advanced",
      totalClasses: "20",
      features: [
        "Advanced Yoga Asanas",
        "Meditation",
        "Breathing Techniques",
        "Spiritual Healing",
      ],
    },
    {
      id: 5,
      image: maternal,  // Corrected here
      price: "$200",
      hours: "50 hours",
      totalSadhkas: "1200+",
      level: "Advanced",
      totalClasses: "25",
      features: [
        "Advanced Yoga",
        "Breathing Exercises",
        "Spiritual Growth",
        "Mental Well-being",
      ],
    },
    {
      id: 6,
      image: women,  // Corrected here
      price: "$130",
      hours: "35 hours",
      totalSadhkas: "850+",
      level: "Intermediate",
      totalClasses: "18",
      features: [
        "Yoga Asanas",
        "Breathing Exercises",
        "Mindfulness",
        "Chakra Alignment",
      ],
    },
    {
      id: 7,
      image: men,  // Corrected here
      price: "$90",
      hours: "15 hours",
      totalSadhkas: "300+",
      level: "Beginner",
      totalClasses: "8",
      features: [
        "Basic Yoga Asanas",
        "Breathing Techniques",
        "Mental Relaxation",
        "Meditation",
      ],
    },
    {
      id: 8,
      image: yoga,  // Corrected here
      price: "$160",
      hours: "45 hours",
      totalSadhkas: "900+",
      level: "Intermediate",
      totalClasses: "22",
      features: [
        "Advanced Breathing Techniques",
        "Yoga Asanas",
        "Meditation",
        "Mental Peace",
      ],
    },
  ];

  return (
    <div className="-z-50 ">
      <div>
        <h1 className="text-2xl font-semibold text-center py-12 bg-blue-100">
          Explore Our Services
        </h1>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 justify-center -z-50 px-4 sm:px-16 lg:px-32 gap-8 p-6 bg-blue-100">
        {coursesData.map((course) => (
          <div
            key={course.id}
            className="border border-gray-300 rounded-lg shadow-lg p-4"
          >
            <img
              src={course.image}
              alt="Course Image"
              className="w-full h-50 object-cover rounded-t-lg"
            />
            <div className="mt-4">

              <h3 className="text-md font-semibold">{course.level} Yoga</h3>

              <p className="text-md font-bold">{course.price}</p>
              <div className="flex gap-4 py-2">
              <RiCalendarCheckLine size={25} />
              <p className="text-md text-gray-600">{course.hours}</p>
              </div>
             <div className="flex gap-4 py-2 ">
             <MdPeopleAlt size={25} />
             <p className="text-md text-gray-600">
                Sadhkas: {course.totalSadhkas}
              </p>
             </div>
              
              
             <div className="flex gap-4 py-2  text-gray-600 ">
              <img src={video} alt="" className="w-[25px] h-auto "/>
              <p>Get recording Classes</p>
             </div>
             <p className="text-md text-gray-600">
                Total Classes: {course.totalClasses}
              </p>
              <div>
                <button className="bg-customBlue text-white w-full rounded-lg py-2 cursor-pointer mt-2">
                  <a href="#">Get Details</a>
                </button>
              </div>
            </div>
          </div>
        ))}

        <img
          src={guruji}
          alt="guruji"
          className="fixed -z-10 top-48 left-1/2 transform -translate-x-1/2 opacity-15 w-[300px] h-auto "
        />
      </div>
    </div>
  );
};

export default DiabetesServices;
