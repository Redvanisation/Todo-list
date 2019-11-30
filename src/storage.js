import { projectTitle, showProjects, newTask, lsProjects } from './domModule';
import Project from './project';

function addProject() {
    if (!projectTitle.value) return alert('Title must be provided!');
    const project = Project(projectTitle.value);
  
    lsProjects.push(project);
    
    localStorage.setItem('projects', JSON.stringify(lsProjects));
    return showProjects();
  }

export { addProject };
