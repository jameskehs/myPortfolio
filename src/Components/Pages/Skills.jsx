import React from "react";
import {
  CSSIcon,
  ExpressIcon,
  GitHubIconLarge,
  HTML5IconLarge,
  JavascriptIcon,
  NodeIcon,
  NPMIcon,
  PostgresIcon,
  ReactIconLarge,
  ReduxIcon,
  SassIcon,
  TypeScriptIcon,
} from "../../assets";
import { motion } from "framer-motion";
const mySkills = [
  { name: "HMTL5", icon: HTML5IconLarge },
  { name: "CSS3", icon: CSSIcon },
  { name: "JavaScript", icon: JavascriptIcon },
  { name: "React", icon: ReactIconLarge },
  { name: "Node.js", icon: NodeIcon },
  { name: "Express.js", icon: ExpressIcon },
  { name: "PostgreSQL", icon: PostgresIcon },
  { name: "TypeScript", icon: TypeScriptIcon },
  { name: "SASS", icon: SassIcon },
  { name: "Git", icon: GitHubIconLarge },
  { name: "Redux", icon: ReduxIcon },
  { name: "NPM", icon: NPMIcon },
];

const Skills = () => {
  return (
    <section id="skills">
      <h1>What do I know?</h1>
      <div className="all-skills-container">
        {mySkills.map((skill, index) => {
          return (
            <motion.div className="skill" initial={{ scale: 0 }} animate={{ scale: 1 }} key={index}>
              {React.createElement(skill.icon)}
              <p>{skill.name}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
