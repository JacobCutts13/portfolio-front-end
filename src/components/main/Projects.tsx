import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import Filter from "./ProjectsFilter";
import { Fade } from "react-awesome-reveal";
import sortProjects from "../../utils/sortProjects";
import ProjectsSort from "./ProjectsSort";
import findUniqueLanguages from "../../utils/uniqueLanguages";

export interface IProject {
  id: number;
  title: string;
  language: string[];
  thumbnail_image: string;
  create_date: string;
  difficulty: number;
  likes: number;
  iframe: string;
  full_image?: string;
  external_url?: string;
}

function Projects(): JSX.Element {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("difficulty");
  const [hoverID, setHoverID] = useState<number>(0);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    fetchProjects(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (filter === "") {
      setFilteredProjects(projects.sort((a, b) => sortProjects(a, b, sort)));
      return;
    } else {
      setFilteredProjects(
        projects
          .filter((Project) => Project.language.includes(filter))
          .sort((a, b) => sortProjects(a, b, sort))
      );
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  useEffect(() => {
    const newProjects = filteredProjects.sort((a, b) =>
      sortProjects(a, b, sort)
    );
    setFilteredProjects([...newProjects]); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort]);

  const fetchProjects = async () => {
    const data = await fetch("https://jc13-portfolio.herokuapp.com/projects");
    const projects: IProject[] = await data.json();
    setProjects(projects);
    setFilteredProjects(projects.sort((a, b) => sortProjects(a, b, sort)));
    setLanguages(findUniqueLanguages(projects));
  };

  return (
    <section id="projects">
      <div className="banner">
        <div className="banner-text">
          <Fade direction="up" duration={2000}>
            <h1>Projects</h1>
            <hr />
          </Fade>
          <Fade direction="up" duration={3000}>
            <p>
              A collection of my projects <br></br> Click to view
            </p>
          </Fade>
        </div>
      </div>

      <div className="projects-main">
        <div className="filter-sort-buttons">
          <ProjectsSort
            sort={sort}
            setSort={setSort}
            setFilteredProjects={setFilteredProjects}
            filteredProjects={filteredProjects}
          />

          <Filter
            filter={filter}
            setFilter={setFilter}
            setFilteredProjects={setFilteredProjects}
            filteredProjects={filteredProjects}
            projects={projects}
            languages={languages}
          />
        </div>
        <motion.div layout className="projects" key="Projects-motion">
          <AnimatePresence>
            {projects.length > 0 &&
              filteredProjects.map((project: IProject) => (
                <div key={project.id}>
                  <Project
                    project={project}
                    hoverID={hoverID}
                    setHoverID={setHoverID}
                  />
                </div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
