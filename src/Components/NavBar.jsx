import { HTML5Icon, OpenFolderIcon, ReactIcon } from "../assets";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <div className="nav-projectname">THE_PORTFOLIO</div>
      <div className="nav-listitem nav-listitemroot">
        <OpenFolderIcon />
        <p>public</p>
      </div>
      <Link to="/" className="nav-listitem nav-listitem-child1">
        <HTML5Icon />
        <p>index.html</p>
      </Link>
      <Link to="/about" className="nav-listitem nav-listitem-child1">
        <HTML5Icon />
        <p>about_me.html</p>
      </Link>
      <Link to="/skills" className="nav-listitem nav-listitem-child1">
        <HTML5Icon />
        <p>my_skills.html</p>
      </Link>
      <div className="nav-listitem nav-listitem-child1">
        <OpenFolderIcon />
        <p>Projects</p>
      </div>
      <Link to="/projects/1" className="nav-listitem nav-listitem-child2">
        <ReactIcon />
        <p>DevJobs.jsx</p>
      </Link>
      <Link to="/projects/2" className="nav-listitem nav-listitem-child2">
        <ReactIcon />
        <p>PasswordGenerator.jsx</p>
      </Link>
      <Link to="/projects/3" className="nav-listitem nav-listitem-child2">
        <ReactIcon />
        <p>Project3.jsx</p>
      </Link>
      <Link to="/contact" className="nav-listitem nav-listitem-child1">
        <HTML5Icon />
        <p>contact.html</p>
      </Link>
    </nav>
  );
};

export default NavBar;
