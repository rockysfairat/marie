function renderProjectsView(projects, limit) {
  const projectsArray = [];
  for (let i = 0; i < limit; i++) {
    projectsArray.push(projects[i]);
  }
  return projectsArray;
}

export default renderProjectsView;
