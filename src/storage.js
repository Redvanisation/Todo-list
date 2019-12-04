const storeProject = (projectTitle) => {
  localStorage.setItem(projectTitle, JSON.stringify([]));
};

const getProjects = () => Object.keys(localStorage);

const storeTodo = (project, todo) => {
  localStorage.setItem(project, JSON.stringify(todo));
};

const removeProject = (project) => {
  localStorage.removeItem(project);
};


export {
  storeProject,
  getProjects,
  storeTodo,
  removeProject,
};
