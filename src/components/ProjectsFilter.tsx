import React, { useEffect } from "react";
import { IProject } from "./Projects";
import findUniqueLanguages from "../utils/uniqueLanguages";

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

  const languages: string[] = findUniqueLanguages(Props.projects);
  function languageButtons(): JSX.Element {
    return (
      <>
        {languages.map((language) => (
          <div key={language}>
            <button
              className={Props.filter === language ? "active-button" : ""}
              onClick={() => Props.setFilter(language)}
            >
              {language}
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
