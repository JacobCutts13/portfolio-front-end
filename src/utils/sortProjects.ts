import { IProject } from "../components/main/Projects";
export default function sortProjects(
  a: IProject,
  b: IProject,
  sort: string
): number {
  if (sort === "difficulty") {
    return b.difficulty - a.difficulty;
  }
  if (sort === "likes") {
    return b.likes - a.likes;
  }
  return 0;
}
