import style from "./Projects.module.css";

function Projects() {
  return (
    <div className={style.Projects}>
      <h2>Projects</h2>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <p>1</p>
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <p>2</p>
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <p>3</p>
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <p>4</p>
      </a>
    </div>
  );
}

export default Projects;
