import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { LuGamepad } from "react-icons/lu";

import AiPromptsImg from "@/public/AiPrompts.png";
import ThreadsCloneImg from "@/public/ThreadsClone.png";
import CaptureImg from "@/public/Capture.png";
import IslamQuizImg from "@/public/IslamQuiz.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
 
  {
    title: "Graduated Baccalaureate in technical technology",
    location: "Mahmoud messaddi, nabeul",
    description:
      " I gained valuable insights into technical concepts and practical skills, setting a strong foundation for my technical career.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },  
] as const;

export const projectsData = [
  {
    title: "Full Portfolio",
    description:
      "A fully responsive and dynamically animated portfolio website with modern UI design.",
    tags: ["React", "Next.js", "Tailwind", "Resend", "Framer Motion"],
    imageUrl: CaptureImg,
    //url: "https://portfolio-next-js-rho-neon.vercel.app/",
    url: "https://malek-azzouz.vercel.app/"
  },
  
] as const;

export const skillsData = [
  "SolidWorks",
  "C++",
  "Labview",
  "Matlab",
  "HTML",
  "CSS",
  "javascript"
] as const;
