import { Scale } from "lucide-react";
import { de } from "zod/v4/locales";

const skills: string[] = [
  "Fullstack",
  "UI/UX Design",
  "DSA"
]
export { skills };

const heroBoxes = [
  {
    title: "200+",
    subTitle: "Problem-Solving Exercises",
  },
  {
    title: "1+",
    subTitle: "Year of Consistent Learning",
  },
  {
    title: "5+",
    subTitle: "Hands-on Builds",
  },
  {
    title: "24/7",
    subTitle: "Driven Mindset",
  }
];
export { heroBoxes };

const projects = [
  {
    name: "Get me a Chai",
    description: "A donation platform for artists with auth system to receive support from their fans through small contributions through razorpay integration.",
    imageUrl: "/images/chai.png",
    githubUrl: "https://github.com/rishanksharma09/get-me-a-chai",
    deployed: true,
    liveUrl: "https://get-me-a-chai-alpha-jet.vercel.app/"
  },
    {
      name: "E-Commerce Website (Currently in Development)",
      description: "An e-commerce website built with Next.js and Tailwind CSS, featuring product listings and filtering, shopping cart functionality, and user authentication.",
      imageUrl: "/images/ecommerce.png",
      deployed: false,
      githubUrl: "https://github.com/rishanksharma09/nike-ecommerce",
      liveUrl: "#"
    } ,
  {
    name: "Aaram Haaraam hai",
    description: "A simple productivity app to help users manage tasks effectively with features like adding, editing, deleting, and marking tasks as completed",
    imageUrl: "/images/todo.png",
    githubUrl: "https://github.com/rishanksharma09/To-Do-App",
    deployed: true,
    liveUrl: "https://to-do-app-eosin-pi.vercel.app/"
  }
]
export { projects };
  

const techStack = [
  { name: "REACT", model: "/3d/react.glb",scale:3 },
  
  { name: "TYPESCRIPT", model: "/3d/ts.glb",scale:0.8 },
  
  { name: "NODE-JS", model: "/3d/nodejs.glb",scale:0.8 },
   { name: "MONGODB", model: "/3d/mongodb.glb",scale:0.03 },

  { name: "JAVA", model: "/3d/java-14.glb",scale:0.025 },

  { name: "NEXT.JS", model: "/3d/nextjs.glb",scale:0.025 },
 
]
export { techStack };


const timeline = [
  {
    year: "March 2025",
    title: "Programming Foundations & DSA",
    description:
      "Started with Java to understand core programming concepts such as OOP, data types, and control flow. Transitioned into Data Structures and Algorithms, focusing on problem-solving and logical thinking."
  },
  {
    year: "June 2025",
    title: "Introduction to Web Development",
    description:
      "Entered web development by learning HTML, CSS, and vanilla JavaScript. Built basic UI clone projects to understand layouts, responsiveness, and fundamental DOM manipulation."
  },
  {
    year: "July 2025",
    title: "Frontend Development with React",
    description:
      "Learned React and component-based architecture. Focused on building reusable components, managing state, and creating interactive user interfaces."
  },
  {
    year: "August 2025",
    title: "Advanced Web Development & Frameworks",
    description:
      "Deepened web development knowledge by learning modern frameworks like Next.js. Worked with routing, rendering strategies, and application structure for scalable projects."
  },
  {
    year: "December 2025",
    title: "Backend Concepts & Databases",
    description:
      "Currently learning backend fundamentals, working with ORMs and PostgreSQL. Exploring database design, queries, and integration with full-stack applications."
  }
];


export default timeline;
