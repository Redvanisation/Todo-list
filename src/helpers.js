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
  elem.classList.toggle('done-done');
  elem.classList.toggle('.disabled');
  elem.style.zIndex = 999;
};

const disabledDiv = (one) => {
  setDoneStyle(one.parentNode);
  const children = one.parentNode.childNodes;
  children.forEach((child) => {
    if (child.className === 'submit-btn card-btn' || child.className === 'submit-btn card-btn disabled') {
      child.classList.toggle('disabled');
    }

    if (child.className === 'task-title' || child.className === 'task-title done') {
      child.classList.toggle('done');
    }
  });
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
    default:
      num = 'Normal';
  }
  return num;
};

export {
  showForm,
  hideForm,
  showHide,
  showNewForm,
  handlePriority,
  disabledDiv,
};
