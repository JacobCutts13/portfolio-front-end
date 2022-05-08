import React, { useEffect } from "react";
import { IProject } from "./Projects";
import findUniqueLanguages from "../../utils/uniqueLanguages";
import sortProjects from "../../utils/sortProjects";

interface IProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  setFilteredProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  filteredProjects: IProject[];
  projects: IProject[];
}

export default function ProjectsFilter(Props: IProps): JSX.Element {
  useEffect(() => {
    if (Props.filter === "") {
      Props.setFilteredProjects(
        Props.projects.sort((a, b) => sortProjects(a, b, Props.sort))
      );
      return;
    } else {
      Props.setFilteredProjects(
        Props.projects
          .filter((Project) => Project.language.includes(Props.filter))
          .sort((a, b) => sortProjects(a, b, Props.sort))
      );
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Props.filter]);

  useEffect(() => {
    Props.setFilteredProjects(
      Props.filteredProjects.sort((a, b) => sortProjects(a, b, Props.sort))
    ); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Props.sort]);

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
              {language[0].toUpperCase() + language.slice(1)}
            </button>
          </div>
        ))}
      </>
    );
  }

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

  return (
    <div className="filter-sort-buttons">
      <div className="filter">{sortButtons()}</div>

      <div className="filter">
        <button
          className={Props.filter === "" ? "active-button" : ""}
          onClick={() => Props.setFilter("")}
        >
          All
        </button>
        {languageButtons()}
      </div>
    </div>
  );
}
