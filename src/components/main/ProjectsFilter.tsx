import React from "react";
import { IProject } from "./Projects";

interface IProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  filteredProjects: IProject[];
  projects: IProject[];
  languages: string[];
}

export default function ProjectsFilter(Props: IProps): JSX.Element {
  function languageButtons(): JSX.Element {
    return (
      <>
        {Props.languages.map((language) => (
          <div key={language}>
            <button
              className={Props.filter === language ? "active-button" : ""}
              onClick={() => Props.setFilter(language)}
            >
              {language[0].toUpperCase() + language.slice(1)}
            </button>
          </div>
        ))}
      </>
    );
  }

  return (
    <div className="filter">
      <button
        className={Props.filter === "" ? "active-button" : ""}
        onClick={() => Props.setFilter("")}
      >
        All
      </button>
      {languageButtons()}
    </div>
  );
}
