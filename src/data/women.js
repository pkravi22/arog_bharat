import maternal from "../assets/maternal.png"; 

import vitality from "../assets/vitality.png"; // Adjust if the extension is different
import holistic from "../assets/holisticfitness.png"; // Adjust if the extension is different
import holisticfitness from "../assets/holistichealing.png"; // Adjust if the extension is different
import weight from "../assets/weight.png"
const womenHealthCourses = [

  {
    id: 1,
    image: maternal, 
    price: "$150",
    hours: "30 hours",
    totalParticipants: "500+",
    level: "Intermediate",
    totalClasses: "15",
    category: "Maternal Health",
    features: [
      "Prenatal Yoga",
      "Pelvic Floor Exercises",
      "Stress Management",
      "Postpartum Recovery",
    ],
  },
  {
    id: 2,
    image: vitality, 
    price: "$180",
    hours: "40 hours",
    totalParticipants: "700+",
    level: "Advanced",
    totalClasses: "20",
    category: "Maternal Health",
    features: [
      "Breathing Techniques",
      "Postnatal Strength",
      "Body Healing Post Delivery",
      "Mental Resilience",
    ],
  },

 
  {
    id: 3,
    image: holistic, 
    price: "$120",
    hours: "25 hours",
    totalParticipants: "650+",
    level: "Beginner",
    totalClasses: "12",
    category: "Mental Wellness",
    features: [
      "Meditation Techniques",
      "Anxiety Reduction",
      "Mindfulness Practices",
      "Self-Compassion Exercises",
    ],
  },
  {
    id: 4,
    image: holisticfitness, // Replace with the actual image import
    price: "$140",
    hours: "30 hours",
    totalParticipants: "850+",
    level: "Intermediate",
    totalClasses: "15",
    category: "Mental Wellness",
    features: [
      "Advanced Meditation",
      "Positive Affirmations",
      "Stress Relief Yoga",
      "Chakra Healing",
    ],
  },

  // Category 3: Hormonal Balance
  {
    id: 5,
    image: maternal, // Replace with the actual image import
    price: "$100",
    hours: "20 hours",
    totalParticipants: "400+",
    level: "Beginner",
    totalClasses: "10",
    category: "Hormonal Balance",
    features: [
      "Hormone-Boosting Diets",
      "Yoga for PCOS",
      "Breathing Exercises",
      "Improved Energy Flow",
    ],
  },
  {
    id: 6,
    image: holistic, // Replace with the actual image import
    price: "$180",
    hours: "35 hours",
    totalParticipants: "750+",
    level: "Intermediate",
    totalClasses: "18",
    category: "Hormonal Balance",
    features: [
      "Yoga for Thyroid Issues",
      "Stress Hormone Management",
      "Deep Relaxation Techniques",
      "Balanced Diet Guidance",
    ],
  },

  // Category 4: Bone Health
  {
    id: 7,
    image: holisticfitness, // Replace with the actual image import
    price: "$90",
    hours: "15 hours",
    totalParticipants: "300+",
    level: "Beginner",
    totalClasses: "8",
    category: "Bone Health",
    features: [
      "Strength-Building Yoga",
      "Flexibility Exercises",
      "Posture Improvement",
      "Calcium-Rich Diet Guidance",
    ],
  },
  {
    id: 8,
    image: weight, // Replace with the actual image import
    price: "$110",
    hours: "25 hours",
    totalParticipants: "450+",
    level: "Intermediate",
    totalClasses: "12",
    category: "Bone Health",
    features: [
      "Yoga for Osteoporosis",
      "Spinal Alignment Exercises",
      "Low-Impact Strength Training",
      "Joint Health Improvement",
    ],
  }
 
];

export default womenHealthCourses;
