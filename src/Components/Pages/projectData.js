import { HTML5IconLarge, CSSIcon, ReactIconLarge, NodeIcon, PostgresIcon, ExpressIcon, JavascriptIcon } from "../../assets";
const allProjects = [
  {
    id: 1,
    name: "Dev Jobs",
    desc: "A job board for dev jobs. This project pulls job data from a JSON file and neatly displays information for the user. This site also features a light/dark mode toggle switch.",
    siteLink: "",
    gitLink: "",
    techStack: [
      { name: "HTML5", icon: HTML5IconLarge },
      { name: "CSS3", icon: CSSIcon },
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "React", icon: ReactIconLarge },
    ],
    images: [
      { href: "", alt: "" },
      { href: "", alt: "" },
      { href: "", alt: "" },
    ],
  },
  {
    id: 2,
    name: "E-Commerce Site",
    desc: "An ecommerce site for items",
    siteLink: "",
    gitLink: "",
    techStack: [
      { name: "HTML5", icon: HTML5IconLarge },
      { name: "CSS3", icon: CSSIcon },
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "React", icon: ReactIconLarge },
      { name: "Node.js", icon: NodeIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "Express.js", icon: ExpressIcon },
    ],
    images: [
      { href: "", alt: "" },
      { href: "", alt: "" },
      { href: "", alt: "" },
    ],
  },
];
export default allProjects;
