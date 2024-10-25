import "./styles.css";
const greeting = "Hello! This is my homepage!";
console.log(greeting);

function showProject(project) {
  const projectTag = document.querySelector(project);
  projectTag.addEventListener("click", () => {
    console.log("Hello World!");
  });
}

showProject("book");
