export default function projectNameToPath(name: string): string {
  if (name === "") {
    return name;
  } else {
    const nameArray = name.split(" ");
    const nameArrayCapitals = nameArray.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );
    const path = nameArrayCapitals.join("-");
    return path;
  }
}
