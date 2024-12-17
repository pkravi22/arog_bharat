
import React from "react";

const Card = ({ course }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-4">
      <img
        src={course.image}
        alt="Course Image"
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{course.level} Yoga</h3>
        <p className="text-xl font-bold">{course.price}</p>
        <p className="text-sm text-gray-600">{course.hours}</p>
        <p className="text-sm text-gray-600">Sadhkas: {course.totalSadhkas}</p>
        <p className="text-sm text-gray-600">Total Classes: {course.totalClasses}</p>
        <ul className="mt-2 space-y-1">
          {course.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-500">
              - {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;



