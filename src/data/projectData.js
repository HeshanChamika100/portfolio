import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

import ReactLogo from "../assets/technologies/react-logo.png"; // Example logo path

export const projects = [
  {
    id: 1,
    category: "Web",
    name: "AgriPeace",
    title: "Optimizer for Traditional Agricultural System",
    img: Img1,
    link: "https://github.com/IT22194930/SPM-Project",
    description:
      "Developed an advanced agricultural management system to support small-scale farmers in Sri Lanka. Crop Yield Prediction: Providing forecasts based on soil, weather, and historical data. Plant Disease Management: Image-based identification and treatment recommendations for plant diseases. Cost Management: A cost calculator for budgeting seeds, fertilizers, equipment, and labor, allowing for precise financial planning.",
    usedTechnologies: [
      { name: "React.js", logo: ReactLogo },
      // Add more technologies if needed
    ],
  },
  {
    id: 2,
    category: "Mobile",
    name: "FitBalance360",
    title: "Wellness App",
    img: Img2,
    link: "https://github.com/nadilliyanage/FitBalance",
    description:
      "Developed a comprehensive wellness app with a focus on fitness tracking, sleep monitoring, and relaxation techniques. Designed and implemented the BMI (Body Mass Index) calculating feature, providing personalized exercises recommendations based on user’s BMI result. Integrated stress rate questionnaires to track user stress levels and deliver customized relaxation exercises, including guided meditation and breathing techniques.",
    usedTechnologies: [
      { name: "React Native", logo: ReactLogo },
      // Add more technologies if needed
    ],
  },
  {
    id: 3,
    category: "Web",
    name: "FreshRoute",
    title: "Fruit Distributing System",
    img: Img3,
    link: "https://github.com/AKALANKA28/Freshroute-Fruit_Collecting_and_Distribution_Management_System",
    description:
      "Simplifies fruit distribution between purchasers and farmers through a store-less platform. Ensures quality with predefined standards and trained controllers. Reduces costs and promotes sustainability with a store-less approach. Uses predictive analysis for efficient order fulfillment. Provides technical assistance to farmers to improve practices.",
    usedTechnologies: [
      { name: "Node.js", logo: ReactLogo }, // Replace with appropriate logo
      // Add more technologies if needed
    ],
  },
];
