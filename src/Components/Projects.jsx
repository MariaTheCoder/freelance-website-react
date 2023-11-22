import style from "./Projects.module.css";

function Projects() {
  return (
    <div className={style.Projects}>
      <h2>Projects</h2>
      <div className={style["projects-container"]}>
        <a
          className={style.project}
          href="https://www.w3schools.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>Category</p>
          <h3>Project name</h3>
          <em>Short summary</em>
          <button>Read more</button>
        </a>
        <a
          className={style.project}
          href="https://www.w3schools.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>Category</p>
          <h3>Project name</h3>
          <em>Short summary</em>
          <button>Read more</button>
        </a>
        <a
          className={style.project}
          href="https://www.w3schools.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>Category</p>
          <h3>Project name</h3>
          <em>Short summary</em>
          <button>Read more</button>
        </a>
        <a
          className={style.project}
          href="https://www.w3schools.com"
          target="_blank"
          rel="noreferrer"
        >
          <p>Category</p>
          <h3>Project name</h3>
          <em>Short summary</em>
          <button>Read more</button>
        </a>
      </div>
    </div>
  );
}

export default Projects;
