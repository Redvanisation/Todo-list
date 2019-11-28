/* eslint-disable */
import { addProject } from './storage';
import { showProjects, submitProject } from './domModule';
import './style/style.css';



// function to clear localStorage
function clearLocalStore() {
  if (localStorage.length == 0) return;
  localStorage.clear();
  lsProjects = [];
  displayProject.innerHTML = '';
  console.log(localStorage);
  showProjects();
}

clear.addEventListener('click', clearLocalStore);

