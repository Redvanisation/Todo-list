import Project from './projects';
import './style/style.css';

const title = document.querySelector('#title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');
const priority = document.querySelector('#priority');
const notes = document.querySelector('#notes');
const submit = document.querySelector('#submit');
const projects = [];

function handleClick() {

  // if (priority.checked) {

  // }

  projects.push(Project(title.value, description.value, date.value, priority.value, notes.value));
  // return { projects };
  console.log(projects);
}


submit.addEventListener('click', handleClick);
