import { HTML5IconLarge, CSSIcon, ReactIconLarge, NodeIcon, PostgresIcon, ExpressIcon, JavascriptIcon } from "../../assets";
import devjobs1 from "../../assets/images/devjobs1.webp";
import devjobs2 from "../../assets/images/devjobs2.webp";
import devjobs3 from "../../assets/images/devjobs3.webp";
import passwordgen1 from "../../assets/images/passwordgen1.webp";
import passwordgen2 from "../../assets/images/passwordgen2.webp";

const allProjects = [
  {
    id: 1,
    name: "Dev Jobs",
    desc: "A job board for dev jobs. This project pulls job data from a JSON file and neatly displays information for the user. This site also features a light/dark mode toggle switch.",
    siteLink: "https://shimmering-paprenjak-1b0297.netlify.app",
    gitLink: "https://github.com/jameskehs/devjobs",
    techStack: [
      { name: "HTML5", icon: HTML5IconLarge },
      { name: "CSS3", icon: CSSIcon },
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "React", icon: ReactIconLarge },
    ],
    images: [
      { src: devjobs1, alt: "" },
      { src: devjobs2, alt: "" },
      { src: devjobs3, alt: "" },
    ],
  },
  {
    id: 2,
    name: "Password Generator",
    desc: "A styled password generator. Choose what characters to include and length of the password. Features a copy button and a password strength meter.",
    siteLink: "https://hilarious-churros-426bd8.netlify.app/",
    gitLink: "https://github.com/jameskehs/password_generator",
    techStack: [
      { name: "HTML5", icon: HTML5IconLarge },
      { name: "CSS3", icon: CSSIcon },
      { name: "JavaScript", icon: JavascriptIcon },
      { name: "React", icon: ReactIconLarge },
    ],
    images: [
      { src: passwordgen1, alt: "" },
      { src: passwordgen2, alt: "" },
    ],
  },
];
export default allProjects;
