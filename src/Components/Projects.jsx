import projectImage1 from "../assets/StockPhotos/pexels-brett-sayles-1597776.jpg";
import projectImage2 from "../assets/StockPhotos/pexels-dan-cristian-pădureț-1476321.jpg";
import projectImage3 from "../assets/StockPhotos/pexels-jeshootscom-442587.jpg";
import projectImage4 from "../assets/StockPhotos/pexels-johannes-plenio-1105379.jpg";
import projectImage5 from "../assets/StockPhotos/pexels-luis-gomes-546819.jpg";
import projectImage6 from "../assets/StockPhotos/pexels-pixabay-4158.jpg";
import style from "./Projects.module.css";

function Projects() {
  return (
    <div className={style.Projects}>
      <h2>My Projects</h2>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImage1} alt="Project image 1" />
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImage2} alt="Project image 2" />
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImage3} alt="Project image 3" />
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImage4} alt="Project image 4" />
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImage5} alt="Project image 5" />
      </a>
      <a
        className="project"
        href="https://www.w3schools.com"
        target="_blank"
        rel="noreferrer"
      >
        <img src={projectImage6} alt="Project image 6" />
      </a>
    </div>
  );
}

export default Projects;
