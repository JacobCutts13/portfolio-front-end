import { IProject } from "./Projects";
import { motion } from "framer-motion";

interface IProps {
  project: IProject;
  hoverID: number;
  setHoverID: React.Dispatch<React.SetStateAction<number>>;
}

export default function Project(Props: IProps): JSX.Element {
  const opacityPerm = Props.hoverID === Props.project.id ? 0.6 : 1;
  return (
    <>
      <motion.div
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="project"
        id={Props.project.id.toString()}
      >
        <h2>{Props.project.title}</h2>
        <div className="project-img" id={Props.project.id.toString() + "img"}>
          <motion.div animate={{ opacity: opacityPerm }}>
            <img
              src={
                "https://image.tmdb.org/t/p/w500" + Props.project.backdrop_path
              }
              alt=""
              id={Props.project.id.toString()}
              onMouseOver={(e) =>
                Props.setHoverID(parseInt(e.currentTarget.id))
              }
              onMouseOut={() => Props.setHoverID(0)}
            />
          </motion.div>

          {Props.hoverID === Props.project.id && (
            <>
              <div className="top-left">{Props.project.title}</div>
              <div className="bottom-left">{Props.project.title}</div>
            </>
          )}
        </div>
      </motion.div>
    </>
  );
}
