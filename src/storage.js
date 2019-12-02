const storeProject = (projectTitle) => {
  localStorage.setItem(projectTitle, JSON.stringify([]));
};

const getProjects = (p) => localStorage.getItem(p);

const storeTodo = (project, todo) => {
  localStorage.setItem(project, JSON.stringify(todo));
};

const storeEditTodos = (project, todo) => {
  localStorage.setItem(project, JSON.stringify(todo));
};

const deleteTodo = () => {
  
};


export {
  storeProject,
  getProjects,
  storeTodo,
  storeEditTodos,
};
