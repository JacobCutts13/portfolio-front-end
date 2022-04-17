import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import Filter from "./ProjectsFilter";

export interface IProject {
  title: string;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
}

function Projects(): JSX.Element {
  const [popProjects, setPopProjects] = useState<IProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
  const [filter, setFilter] = useState<number>(0); //0=all 28=action 35=comedy
  const [hoverID, setHoverID] = useState<number>(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=43b6b5ee0e7f808c5d3d5f89eb9f269d&language=en-US&page=1"
    );
    const projectsObj = await data.json();
    const projects: IProject[] = projectsObj.results;
    setPopProjects(projects);
    setFilteredProjects(projects);
  };

  return (
    <div className="app">
      <h1>Projects</h1>
      <Filter
        filter={filter}
        setFilter={setFilter}
        setFilteredProjects={setFilteredProjects}
        popProjects={popProjects}
      />
      <motion.div layout className="projects" key="Projects-motion">
        <AnimatePresence>
          {popProjects.length > 1 &&
            filteredProjects.map((project: IProject) => (
              <div key={project.title}>
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
  );
}

export default Projects;
