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

export {
  showForm,
  hideForm,
  showHide,
  showNewForm,
};
