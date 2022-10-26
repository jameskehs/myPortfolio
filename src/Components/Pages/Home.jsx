import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { EmailIcon, GitHubIcon, LinkedinIcon } from "../../assets";
const Index = () => {
  const [titleText, setTitleTexts] = useState(["Web Wizard", "Web Developer", "Software Engineer"]);
  const [titleTextsIndex, setTitleTextsIndex] = useState(0);
  const contactLinks = [
    { name: "Github", href: "https://www.github.com/jameskehs", icon: GitHubIcon },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/jameskehs/", icon: LinkedinIcon },
    { name: "Email", href: "mailto:jameskehsdev@gmail.com", icon: EmailIcon },
  ];
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (titleTextsIndex === titleText.length - 1) return;
      setTitleTextsIndex((prevState) => prevState + 1);
    }, 1750);
    return () => clearTimeout(timeout);
  }, [titleTextsIndex, titleText]);

  return (
    <section id="home">
      <h1>Hi There. I'm James!</h1>
      <div className="animatedh2">
        <h1>A Full-Stack&nbsp;</h1>
        {titleText.map((text, index) => {
          if (titleTextsIndex === index) return <ChangingText key={index} text={text} />;
          else return "";
        })}
      </div>

      <p>Want to learn more? Navigation to your left!</p>
      <div className="important-links">
        <h2>Important Links</h2>
        <div className="important-links-links-container">
          {contactLinks.map((link, index) => {
            return <ContactLink key={index} name={link.name} href={link.href} icon={link.icon} />;
          })}
        </div>
      </div>
    </section>
  );
};

const ChangingText = ({ text }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.75 }}
      className="changing-word"
    >
      {text}
    </motion.h1>
  );
};

const ContactLink = ({ name, href, icon }) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={href}>
        {React.createElement(icon)}
      </a>
    </div>
  );
};

export default Index;
