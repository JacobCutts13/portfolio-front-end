import projectNameToPath from "./projectNameToPath";

test("projectNameToPath captilises words in a string and join with dashes", () => {
    expect(projectNameToPath("all lower case")).toStrictEqual("All-Lower-Case");
    expect(projectNameToPath("Mixed case")).toStrictEqual("Mixed-Case");
    expect(projectNameToPath("")).toStrictEqual("");
  });