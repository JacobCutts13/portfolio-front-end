import { IProject } from "./Projects";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectNameToPath from "../../utils/projectNameToPath";

interface IProps {
  project: IProject;
  hoverID: number;
  setHoverID: React.Dispatch<React.SetStateAction<number>>;
}

export default function Project(Props: IProps): JSX.Element {
  const opacityPerm = Props.hoverID === Props.project.id ? 0.6 : 1;
  const path = ProjectNameToPath(Props.project.title);

  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="project"
        key={Props.project.id.toString()}
      >
        <div className="project-img" key={Props.project.id.toString() + "img"}>
          <motion.div animate={{ opacity: opacityPerm }}>
            <Link to={path} onClick={() => window.scrollTo(0, 0)}>
              <img
                src={"/images/" + Props.project.image}
                alt=""
                id={Props.project.id.toString()}
                onMouseOver={(e) =>
                  Props.setHoverID(parseInt(e.currentTarget.id))
                }
                onMouseOut={() => Props.setHoverID(0)}
              />
            </Link>
          </motion.div>

          {Props.hoverID === Props.project.id && (
            <>
              <div className="bottom-left">
                <h1>{Props.project.title}</h1>
              </div>
              {/* <div className="bottom-left"><p>{Props.project.summary}</p></div> */}
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
