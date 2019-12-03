const showForm = (cls) => {
  cls.classList.remove('hidden');
};

const showNewForm = (cls, btn1, btn2) => {
  cls.classList.remove('hidden');
  btn1.classList.remove('hidden');
  btn2.classList.add('hidden');
};

const hideForm = (cls) => {
  cls.classList.add('hidden');
};

const showHide = (cls) => {
  cls.classList.toggle('hidden');
};

const setDoneStyle = (elem) => {
  // elem.style.textDecoration = 'line-through';
  elem.classList.toggle('done-done');
};

const handlePriority = (num) => {
  
  switch (num) {
    case 0:
      num = 'Low';
      break;
    case 1:
      num = 'Normal';
      break;
    case 2:
      num = 'High';
      break;
  }
  // if (num === 0) {
  //   num = 'Low';
  // } else if (num === 1) {
  //   num = 'Normal';
  // } else {
  //   num = 'High';
  // }
  return num;
};

export {
  showForm,
  hideForm,
  showHide,
  showNewForm,
  handlePriority,
  setDoneStyle,
};
