import { Scale } from "lucide-react";

const skills: string[] = [
  "Fullstack",
  "UI/UX Design",
  "DSA"
]
export { skills };

const heroBoxes = [
  {
    title: "200+",
    subTitle: "Dsa Questions Solved",
  },
  {
    title: "5+",
    subTitle: "Projects Completed",
  },
  {
    title: "1+",
    subTitle: "Year Experience",
  },
  {
    title: "24/7",
    subTitle: "Availability",
  }
];
export { heroBoxes };

const projects = [
  {
    name: "Get me a Chai",
    description: "This is a description for project one.",
    imageUrl: "/images/chai.png",
    githubUrl: "https://github.com/username/project1",
    liveUrl: "https://project1.vercel.app"
  },
  {
    name: "Aaram Haaraam hai",
    description: "This is a description for project two.",
    imageUrl: "/images/todo.png",
    githubUrl: "https://github.com/username/project2",
    liveUrl: "https://project2.vercel.app"
  },
  // {
  //   name: "Project Three",
  //   description: "This is a description for project three.",
  //   imageUrl: "/images/image.png",
  //   githubUrl: "https://github.com/username/project3",
  //   liveUrl: "https://project3.vercel.app"
  // }
]
export { projects };
  

const techStack = [
  { name: "REACT", model: "/models/react.glb",scale:3 },
  
  { name: "TYPESCRIPT", model: "/models/ts.glb",scale:0.8 },
  
  { name: "NODE-JS", model: "/models/nodejs.glb",scale:0.8 },
   { name: "MONGODB", model: "/models/mongodb.glb",scale:0.03 },
  
  { name: "JAVA", model: "/models/java-14.glb",scale:0.025 },
  
  { name: "NEXT.JS", model: "/models/nextjs.glb",scale:0.025 },
 
]
export { techStack };


const timeline = [
  {
    year: "2022",
    title: "Started BTech CSE",
    company: "University",
    description: "Built strong CS fundamentals and coding basics."
  },
  {
    year: "2023",
    title: "Frontend Developer",
    company: "Freelance",
    description: "Worked with React, Tailwind, and animations."
  },
  {
    year: "2024",
    title: "Full Stack Developer",
    company: "Personal Projects",
    description: "Next.js, backend APIs, real-world apps."
  }
];

export default timeline;
