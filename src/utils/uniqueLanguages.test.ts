import findUniqueLanguages from "./uniqueLanguages";

const projectsExample = [
  {
    id: 1,
    title: "Galaxy Simulation",
    language: ["python", "c++"],
    thumbnail_image: "galaxy-sim-preview",
    create_date: "2021-05-01T23:00:00.000Z",
    difficulty: 8,
    likes: 0,
    iframe: "str",
  },
  {
    id: 2,
    title: "Galaxy Sim",
    language: ["typescript", "python"],
    summary: "Simulating galaxy collisions using runge-kata methods",
    description: "Simulating galaxy collisions using runge-kata methods",
    thumbnail_image: "galaxy-sim-preview",
    create_date: "2021-05-01T23:00:00.000Z",
    difficulty: 8,
    likes: 0,
    iframe: "str",
  },
];

test("FindUniqueLanguages takes an array or arrays of languages and returns all unique languages", () => {
  expect(findUniqueLanguages(projectsExample)).toStrictEqual([
    "python",
    "c++",
    "typescript",
  ]);
});
