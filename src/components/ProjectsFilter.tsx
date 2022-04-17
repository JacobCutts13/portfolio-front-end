import React, { useEffect } from "react";
import { IProject } from "./Projects";

interface IProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  projects: IProject[];
}

export default function ProjectsFilter(Props: IProps): JSX.Element {
  useEffect(() => {
    if (Props.filter === "") {
      Props.setFilteredProjects(Props.projects);
      return;
    } else {
      Props.setFilteredProjects(
        Props.projects.filter((Project) =>
          Project.language.includes(Props.filter)
        )
      );
    }
  }, [Props.filter]);

  return (
    <div className="filter">
      <button
        className={Props.filter === "" ? "active" : ""}
        onClick={() => Props.setFilter("")}
      >
        All
      </button>
      <button
        className={Props.filter === "typescript" ? "active" : ""}
        onClick={() => Props.setFilter("Typescript")}
      >
        Typescript
      </button>
      <button
        className={Props.filter === "python" ? "active" : ""}
        onClick={() => Props.setFilter("python")}
      >
        Python
      </button>
    </div>
  );
}
