import React, { useEffect } from "react";
import { IProject } from "./Projects";

interface IProps {
  filter: number;
  setFilter: React.Dispatch<React.SetStateAction<number>>;
  setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  popProjects: IProject[];
}

export default function ProjectsFilter(Props: IProps): JSX.Element {
  useEffect(() => {
    if (Props.filter === 0) {
      Props.setFilteredProjects(Props.popProjects);
      return;
    } else {
      Props.setFilteredProjects(
        Props.popProjects.filter((Project) =>
          Project.genre_ids.includes(Props.filter)
        )
      );
    }
  }, [Props.filter]);

  return (
    <div className="filter">
      <button
        className={Props.filter === 0 ? "active" : ""}
        onClick={() => Props.setFilter(0)}
      >
        All
      </button>
      <button
        className={Props.filter === 45 ? "active" : ""}
        onClick={() => Props.setFilter(35)}
      >
        Comedy
      </button>
      <button
        className={Props.filter === 28 ? "active" : ""}
        onClick={() => Props.setFilter(28)}
      >
        Action
      </button>
    </div>
  );
}
