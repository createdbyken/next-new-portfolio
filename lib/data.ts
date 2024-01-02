import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
    title: "Software consultant",
    company: "Hewlett Packard Enterprise",
    location: "Santa Fe, Cuajimalpa, Mexico City",
    description:
      "Give high-quality support to customers in production factories which were 24/7. Generate tickets and assign them to other supportive teams. As first level consultant's, we've must resolve any issue that was in scope for our knowledge. ",
    icon: React.createElement(LuGraduationCap),
    date: "Nov. 2015 - May. 2017",
  },
  {
    title: "E-commerce web developer",
    company: "Ergonomía Mexicana",
    location: "Iztapalapa, Mexico City",
    description:
      "Be in charge of the e-commerce strategy, sales for physical stores. Create the Iseating project 100% created in Rails right here. It is a Startup of custom furniture for the client and develop an exclusive sales interface for sellers.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct. 2017 - Abr. 2018",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    company: "Baxten",
    description:
      "Temporary project that was in a need to build urgently. I added this to my profile because it was a project that was involve with fast development in two months. Currently this project has been deployed to production.",
    icon: React.createElement(FaReact),
    date: "Feb. 2019 - Abr. 2019",
  },
  {
    title: "Ruby on Rails | Systems Architect | Devops Engineer",
    location: "Remote",
    company: "Freelance",
    description:
      "Temporary project that was in a need to build urgently. I added this to my profile because it was a project that was involve with fast development in two months. Currently this project has been deployed to production.",
    icon: React.createElement(FaReact),
    date: "May. 2019 - Abr. 2021",
  },
  {
    title: "Ruby on Rails | DevOps Engineer",
    location: "Remote",
    company: "Freelance",
    description:
      "Temporary project that was in a need to build urgently. I added this to my profile because it was a project that was involve with fast development in two months. Currently this project has been deployed to production.",
    icon: React.createElement(FaReact),
    date: "May. 2019 - Abr. 2021",
  }
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;