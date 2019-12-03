/* eslint-disable arrow-parens */
/* eslint-disable no-alert */
/* eslint-disable no-param-reassign */
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

const showMessage = msg => alert(msg);

export {
  showForm,
  hideForm,
  showNewForm,
  disabledDiv,
  showMessage,
};
