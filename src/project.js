const Project = (title, tasks = []) => {
  const addTask = (task) => tasks.push(task);
  const hasTasks = () => tasks.length > 0 ? true : false;
  return {
    title, tasks, addTask, hasTasks,
  };
};

export default Project;
