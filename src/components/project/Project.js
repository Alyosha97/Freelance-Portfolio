import "./style.css";
import { NavLink } from "react-router";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <img className="project__img" src={img} alt="title" />
        <h3 className="project__title">{title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
