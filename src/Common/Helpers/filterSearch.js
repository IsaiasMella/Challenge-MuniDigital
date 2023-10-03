export const filterSearch = (tasks, filterTasks) => {
  if (!Array.isArray(tasks) || tasks.length === 0) return [];

  return filterTasks.search != null && filterTasks.search.length > 0
    ? tasks.filter((task) =>
        task?.title.toLowerCase().includes(filterTasks.search.toLowerCase().trim())
      )
    : tasks;
};
