import { IProject } from "../components/Projects";

export default function findUniqueLanguages(projects: IProject[]): string[] {
  const extractLanguages = projects.map(
    (project: IProject) => project.language
  );
  const uniqueLanguages: string[] = [];
  for (const languages of extractLanguages) {
    for (const language of languages) {
      if (!uniqueLanguages.includes(language)) {
        uniqueLanguages.push(language);
      }
    }
  }
  return uniqueLanguages;
}
