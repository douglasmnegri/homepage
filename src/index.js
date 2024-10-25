function showProject(event) {
    const projectTag = event.target;
    const projectClass = projectTag.classList[0];
    const projectContent = document.querySelector(`.${projectClass}-content`);
  
    console.log(projectContent);
    
    if (projectContent) {
      projectContent.style.visibility = projectContent.style.visibility === "hidden" ? "visible" : "hidden";
    }
  }
  