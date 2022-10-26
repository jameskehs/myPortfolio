import { HTML5Icon, ReactIcon } from "../assets";

const ExplorerBar = ({ pathname }) => {
  return (
    <div id="explorer">
      <div className="explorer-title">
        <p>EXPLORER</p>
      </div>
      <div className="active-page">{renderActiveTab(pathname)}</div>
    </div>
  );
};

function renderActiveTab(pathname) {
  switch (pathname) {
    case "/":
      return (
        <>
          <HTML5Icon />
          <p>index.html</p>
        </>
      );
    case "/about":
      return (
        <>
          <HTML5Icon />
          <p>about_me.html</p>
        </>
      );
    case "/skills":
      return (
        <>
          <HTML5Icon />
          <p>my_skills.html</p>
        </>
      );
    case "/projects/1":
      return (
        <>
          <ReactIcon />
          <p>Project1.jsx</p>
        </>
      );
    case "/projects/2":
      return (
        <>
          <ReactIcon />
          <p>Project2.jsx</p>
        </>
      );
    case "/projects/3":
      return (
        <>
          <ReactIcon />
          <p>Project3.jsx</p>
        </>
      );
    case "/contact":
      return (
        <>
          <HTML5Icon />
          <p>contact.html</p>
        </>
      );
    default:
      return "";
  }
}

export default ExplorerBar;
