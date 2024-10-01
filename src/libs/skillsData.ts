import ReactIcon from "../components/icons/ReactIcon.astro";
import SassIcon from "../components/icons/SassIcon.astro";
import TailwindIcon from "../components/icons/TailwindIcon.astro";
import BootstrapIcon from "../components/icons/BootstrapIcon.astro";
import NextjsIcon from "../components/icons/NextjsIcon.astro";
import AstroIcon from "../components/icons/AstroIcon.astro";

import NodejsIcon from "../components/icons/NodejsIcon.astro";
import ExpressIcon from "../components/icons/ExpressIcon.astro";
import MysqlIcon from "../components/icons/MysqlIcon.astro";

import GitIcon from "../components/icons/GitIcon.astro";
import GitHubIcon from "../components/icons/GitHubIcon.astro";
import FigmaIcon from "../components/icons/FigmaIcon.astro";
import PostmanIcon from "../components/icons/PostmanIcon.astro";

export const skills = [
  {
    title: "Frontend",
    items: [
      {
        name: "SASS",
        icon: SassIcon,
      },
      {
        name: "TailwindCSS",
        icon: TailwindIcon,
      },
      {
        name: "Bootstrap",
        icon: BootstrapIcon,
      },
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "NextJS",
        icon: NextjsIcon,
      },
      {
        name: "Astro",
        icon: AstroIcon,
      },
    ],
  },
  {
    title: "Backend",
    items: [
      {
        name: "NodeJS",
        icon: NodejsIcon,
      },
      {
        name: "Express",
        icon: ExpressIcon,
      },
      {
        name: "MySQL",
        icon: MysqlIcon,
      },
    ],
  },
  {
    title: "Otros",
    items: [
      {
        name: "Git",
        icon: GitIcon,
      },
      {
        name: "GitHub",
        icon: GitHubIcon,
      },
      {
        name: "Figma",
        icon: FigmaIcon,
      },
      {
        name: "Postman",
        icon: PostmanIcon,
      }
    ],
  },
];
