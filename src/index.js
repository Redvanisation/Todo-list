/* eslint-disable */
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
const displayProject = document.querySelector('#display-project');

// Project inputs
const projectTitle = document.querySelector('#project-title');
const submitProject = document.querySelector('#submit-project');
const cancelProject = document.querySelector('#cancel-project');
// const newProjectForm = document.querySelector('.new-project');

// newProjectForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   addProject();
// });

function addTask() {
  console.log('AddTask');
}

function showTasks(elem){
  const key = elem.dataset.name;
  const containerTasks = document.querySelector('#display-tasks');
  const projectTasks = JSON.parse(localStorage.getItem(key));

  containerTasks.innerHTML = '';

  const btnNewTask = document.createElement('button');
  btnNewTask.innerHTML = 'New Task';
  btnNewTask.addEventListener('click', addTask);
  containerTasks.appendChild(btnNewTask);
  
  projectTasks.forEach((task) => {
    const taskDetails = document.createElement('div');
    taskDetails.innerHTML += ` <h3> ${task.title} </h3>
      <p>Description: ${task.description} </p>
      <p>DueDate: ${task.dueDate} </p>
      <p>Priority: ${task.priority} </p>
      <p>Notes: ${task.notes} </p>`;

    

    containerTasks.appendChild(taskDetails);
    
  });

}

// filling display-project div
function showProjects(){
  const ptStore = Object.keys(localStorage);
  displayProject.innerHTML = ''; // clear div
  for (const title of ptStore) {
    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'project-title');
    h2.setAttribute('data-name', title );
    h2.innerHTML = title;
    displayProject.appendChild(h2);
  }
  const projectH2 = document.querySelectorAll('.project-title');
  projectH2.forEach((elem) => {
    elem.addEventListener('click', () => showTasks(elem));
  })
}

function addProject() {
  if (!projectTitle.value) return alert('Title must be provided!');
  const project = Project(projectTitle.value);

  project.addTask(Task('Task 1', 'Description'));
  project.addTask(Task('Task 2', 'Description 2'));

  localStorage.setItem(project.title, JSON.stringify(project.tasks));
  
  showProjects();
  // localStorage.setItem('p2', project.tasks);
  // 
  // 
  // 

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


