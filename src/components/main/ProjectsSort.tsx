import React from "react";
import { IProject } from "./Projects";

interface IProps {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  filteredProjects: IProject[];
  setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
}

export default function ProjectsSort(Props: IProps): JSX.Element {
  function sortButtons(): JSX.Element {
    return (
      <>
        <div>
          <button
            className={Props.sort === "difficulty" ? "active-button" : ""}
            onClick={() => Props.setSort("difficulty")}
          >
            Difficulty
          </button>
        </div>

        <div>
          <button
            className={Props.sort === "likes" ? "active-button" : ""}
            onClick={() => Props.setSort("likes")}
          >
            Likes
          </button>
        </div>
      </>
    );
  }
  return <div className="filter">{sortButtons()}</div>;
}
