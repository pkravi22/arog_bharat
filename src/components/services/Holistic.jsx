import React from "react";

const Holistic = () => {
  const coursesData = [
    {
      id: 1,
      image: "/path/to/image1.jpg",
      price: "$10000",
      hours: "20 hours",
      totalSadhkas: "500+",
      level: "Beginner",
      totalClasses: "10",
      features: ["Yoga Asanas", "Meditation", "Breathing Exercises", "Mindfulness"]
    },
    {
      id: 2,
      image: "/path/to/image2.jpg",
      price: "$1500",
      hours: "30 hours",
      totalSadhkas: "800+",
      level: "Intermediate",
      totalClasses: "15",
      features: ["Yoga Asanas", "Advanced Breathing", "Pranayama", "Spiritual Growth"]
    },
    {
      id: 3,
      image: "/path/to/image3.jpg",
      price: "$1200",
      hours: "25 hours",
      totalSadhkas: "700+",
      level: "Beginner",
      totalClasses: "12",
      features: ["Yoga Asanas", "Mindfulness", "Pranayama", "Chakra Healing"]
    },
    {
      id: 4,
      image: "/path/to/image4.jpg",
      price: "$1800",
      hours: "40 hours",
      totalSadhkas: "1000+",
      level: "Advanced",
      totalClasses: "20",
      features: ["Advanced Yoga Asanas", "Meditation", "Breathing Techniques", "Spiritual Healing"]
    },
    {
      id: 5,
      image: "/path/to/image5.jpg",
      price: "$200",
      hours: "50 hours",
      totalSadhkas: "1200+",
      level: "Advanced",
      totalClasses: "25",
      features: ["Advanced Yoga", "Breathing Exercises", "Spiritual Growth", "Mental Well-being"]
    },
    {
      id: 6,
      image: "/path/to/image6.jpg",
      price: "$130",
      hours: "35 hours",
      totalSadhkas: "850+",
      level: "Intermediate",
      totalClasses: "18",
      features: ["Yoga Asanas", "Breathing Exercises", "Mindfulness", "Chakra Alignment"]
    },
    {
      id: 7,
      image: "/path/to/image7.jpg",
      price: "$90",
      hours: "15 hours",
      totalSadhkas: "300+",
      level: "Beginner",
      totalClasses: "8",
      features: ["Basic Yoga Asanas", "Breathing Techniques", "Mental Relaxation", "Meditation"]
    },
    {
      id: 8,
      image: "/path/to/image8.jpg",
      price: "$160",
      hours: "45 hours",
      totalSadhkas: "900+",
      level: "Intermediate",
      totalClasses: "22",
      features: ["Advanced Breathing Techniques", "Yoga Asanas", "Meditation", "Mental Peace"]
    }
  ];

  return (
    <>
    <div>
      <h1 className="text-md font-semibold text-center mt-12">Yoga Courses</h1>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-center  px-4 sm:px-56 gap-8 p-6">
      {coursesData.map((course) => (
        <div key={course.id} className="border border-gray-300 rounded-lg shadow-lg p-4 ">
          <img
            src={course.image}
            alt="Course Image"
            className="w-full h-40 object-cover rounded-t-lg"
          />
          <div className="mt-4">
            <h3 className="text-md font-semibold">{course.level} Yoga</h3>
            <p className="text-md font-bold">{course.price}</p>
            <p className="text-md text-gray-600">{course.hours}</p>
            <p className="text-md text-gray-600">Sadhkas: {course.totalSadhkas}</p>
            <p className="text-md text-gray-600">Total Classes: {course.totalClasses}</p>
            <ul className="mt-2 space-y-1">
              {course.features.map((feature, index) => (
                <li key={index} className="text-md text-gray-500">
                  - {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </>
  
    
  );
};

export default Holistic;
