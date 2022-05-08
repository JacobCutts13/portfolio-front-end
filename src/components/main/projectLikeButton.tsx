import { useEffect, useState } from "react";
import axios from "axios";
import likeJQuery from "../../jquery/likeJQuery";
import { IProject } from "./Projects";

interface IProps {
  project: IProject;
}

export default function ProjectLikeButton(Props: IProps): JSX.Element {
  const [positiveLike, setpositiveLike] = useState<boolean>(true);
  const [totalLikes, setTotalLikes] = useState<number>(0);

  useEffect(() => {
    likeJQuery(); //run script to animate like button
    const getTotalLikes = async () => {
      axios
        .get(
          "https://jc13-portfolio.herokuapp.com/projects/" +
            Props.project.id +
            "/likes"
        )
        .then((resp) => setTotalLikes(parseInt(resp.data[0].sum)))
        .catch((err) => console.log(err));
    };
    getTotalLikes();
  }, [Props.project.id]);

  const postLike = async () => {
    const ApiUrl =
      "https://jc13-portfolio.herokuapp.com/projects/" +
      Props.project.id +
      "/likes";
    const value = positiveLike ? 1 : -1;
    try {
      axios
        .post(ApiUrl, { value: value })
        .then(() => setTotalLikes(totalLikes + value)) //update likes
        .then(() => setpositiveLike(!positiveLike));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="animated-like-container">
        <button
          id="animated-like"
          className="animated-like-button"
          onClick={postLike}
        ></button>
      </div>
      <p className="like-count">{totalLikes}</p>
    </>
  );
}
