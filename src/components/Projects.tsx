import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Project from "./Project";
import Filter from "./ProjectsFilter";
import { Fade } from "react-awesome-reveal";

export interface IProject {
  id: number;
  title: string;
  language: string[];
  summary: string;
  description: string;
  image: string;
  create_date: string;
  difficulty: number;
}

function Projects(): JSX.Element {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);
  const [filter, setFilter] = useState<string>("");
  const [hoverID, setHoverID] = useState<number>(0);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const data = await fetch("https://jc13-portfolio.herokuapp.com/projects");
    const projects: IProject[] = await data.json();
    setProjects(projects);
    setFilteredProjects(projects);
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
            <p>A collection of my projects</p>
          </Fade>
        </div>
      </div>

      <Fade>
        <div className="projects-main">
          <Filter
            filter={filter}
            setFilter={setFilter}
            setFilteredProjects={setFilteredProjects}
            projects={projects}
          />
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
      </Fade>
    </section>
  );
}

export default Projects;
