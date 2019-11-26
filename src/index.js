import Project from './project';
import Task from './tasks';
import './style/style.css';

// Task inputs
const taskTitle = document.querySelector('#task-title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
let priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');
const submitTask = document.querySelector('#submit');

// General elements
const clear = document.querySelector('#clear');
const display = document.querySelector('#display');

// Project inputs
const projectTitle = document.querySelector('.project-title');
const submitProject = document.querySelector('#submit-project');
const cancelProject = document.querySelector('#cancel-project');
// const newProjectForm = document.querySelector('.new-project');

// newProjectForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   addProject();
// });



function addProject() {
  if (!projectTitle.value) return alert('Title must be provided!');
  const project = Project(projectTitle.value);
  console.log(project.title);

  // project.addTask(Task('Task 1', 'Description'));
  // project.addTask(Task('Task 2', 'Description 2'));
  // localStorage.setItem(project.title, JSON.stringify(project.tasks));
  // const showTask = JSON.parse(localStorage.getItem(project.title));

  // showTask.forEach(task => {
  //   console.log(task);
  //   display.innerHTML += `
  //     ${task.title}<br>
  //     ${task.description}<br>
  //     ${task.date}<br>
  //     ${task.priority}
  //   `;
  // });
}

function clearLocalStore() {
  localStorage.clear();
  console.log(localStorage);
}


submitProject.addEventListener('click', addProject);
// submitTask.addEventListener('click', handleClick);
clear.addEventListener('click', clearLocalStore);

// showProjectsList();


