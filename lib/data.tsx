import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import accountify from "@/public/accountify.png";
import wordanalyticsImg from "@/public/wordanalytics.png";


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
    title: "React.js / Next.js Developer",
    location: "Connect Solutions",
    description:
      "Developed 5+ projects in short period of time. Writing and maintaining clean, organized, and well-documented\n" +
        "code.",
    icon: React.createElement(FaReact),
    date: "11/2022 - present",
  },
  {
    title: "Front-End Developer",
    location: "Punjab Information Technology Board",
    description:
      "Collaborated with cross-functional teams to gather requirements, design and implement solutions, and test and debug applications",
    icon: React.createElement(CgWorkAlt),
    date: "09/2022 - 10/2022",
  },
  {
    title: "Front End Developer",
    location: "Micro Data Tech",
    description:
      "Gaining proficiency in fundamental concepts of HTML, CSS, JavaScript, and Bootstrap.",
    icon: React.createElement(LuGraduationCap),
    date: "05/2022 - 08/2022",
  },
] as const;

export const projectsData = [
  {
    title: "SmartBooks",
    description:
      "SmartBooks is an accounting software for UAE. It is geared mainly toward small and medium-sized businesses. Till Now more than 230+ Companies uses SmartBooks Product in Dubai. " + "I worked as a react developer on this project for 1.5 years.",
    tags: ["React", "Material UI", "Redux Toolkit", "RESTFul API",  "GraphQL", ".NET"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Accountify",
    description:
      "Accountify is the super-admin of product SmartBooks. I individually completed this project from scratch." +
        " Accountify managing all the product management, permissions, and settings.",
    tags: ["Next.js", "TypeScript", "Material UI", "RESTFul API", "Redux Toolkit"],
    imageUrl: accountify,
  },
  {
    title: "KnowledgeBase",
    description:
      "I've developed a Content Management System (CMS) that allows administrators to create a blogs or user guide in Editor. These uploads are seamlessly integrated into the KnowledgeBase website, creating a dynamic environment for users to access relevant information effortlessly.",
    tags: ["Next.js", "TypeScript", "Material UI", "RESTFul API", ".NET"],
    imageUrl: rmtdevImg,
  },
] as const;

import {ReactIcon} from '../lib/icon'
import {HTMLIcon} from '../lib/icon'
import {CSSIcon} from '../lib/icon'
import {JSIcon} from '../lib/icon'
import {TSIcon} from '../lib/icon'
import {NextIcon} from '../lib/icon'
import {MaterialIcon} from '../lib/icon'
import {ReactStrapIcon} from '../lib/icon'
import {ReduxToolkitIcon} from '../lib/icon'
import {RestFulApiIcon} from '../lib/icon'
import {GraphQlIcon} from '../lib/icon'
import {ApolloIcon} from '../lib/icon'
import {GitIcon} from '../lib/icon'
import {DSAIcon} from '../lib/icon'
import {BootstrapIcon} from '../lib/icon'

export const skillsData = [
  {name: "React", icon: <ReactIcon/>},
  {name: "Next.js", icon: <NextIcon/>},
  {name: "Redux Toolkit", icon: <ReduxToolkitIcon/>},
  {name: "RESTful API", icon: <RestFulApiIcon/>},
  {name: "GraphQL", icon: <GraphQlIcon/>},
  {name: "TypeScript", icon: <TSIcon/>},
  {name: "Material UI", icon: <MaterialIcon/>},
  {name: "ReactStrap", icon: <ReactStrapIcon/>},
  {name: "Apollo", icon: <ApolloIcon/>},
  {name: "Git & GitHub", icon: <GitIcon/>},
  {name: "HTML5", icon: <HTMLIcon/>},
  {name: "CSS3", icon: <CSSIcon/>},
  {name: "Bootstrap", icon: <BootstrapIcon/>},
  {name: "JavaScript ES6", icon: <JSIcon/>},
  {name: "DSA", icon: <DSAIcon/>},
] as const;
