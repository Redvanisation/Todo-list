import { projectTitle, showProjects, newTask, lsProjects } from './domModule';
import Project from './project';

function addProject() {
    if (!projectTitle.value) return alert('Title must be provided!');
    const project = Project(projectTitle.value);
  
    lsProjects.push(project);
    
    localStorage.setItem('projects', JSON.stringify(lsProjects));
    return showProjects();
  }

function storeTask(array) {
  localStorage.setItem('projects', JSON.stringify(array));
}

function taskIndex(array, subArr, projectKey, taskKey) {
  array.find((item) => {
    if (item.title === projectKey) subArr = item.tasks;
  });

  subArr.find((task) => {
    if (task.title === taskKey.value) return subArr.indexOf(task);
  });
}

export { addProject, storeTask, taskIndex };
