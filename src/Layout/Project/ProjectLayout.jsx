import { useState, useMemo, useContext } from "react";

import { tasksContext } from "../../Context/TasksProvider";

import { deleteTask, filterSearch, filterStatus } from "../../Common/Helpers";
import { Card, NavBar, TaskList } from "../../Components";

import { ProjectLayoutUI } from "./ProjectLayoutUI/ProjectLayoutUI";

import { columns, initialStateFilters } from "../../Common/Constants";

export const ProjectLayout = ({ handleModale, handleCurrentId }) => {
  const [filterTasks, setFilterTasks] = useState(initialStateFilters);

  const { tasks } = useContext(tasksContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterTasks({ ...filterTasks, [name]: value });
  };

  const filteredTasksBySearch = useMemo(
    () => filterSearch(tasks, filterTasks),
    [tasks, filterTasks]
  );

  const filteredTasks = useMemo(
    () => filterStatus(filteredTasksBySearch, filterTasks),
    [tasks, filterTasks]
  );

  return (
    <div className="h-full">
      <NavBar handleModale={handleModale} handleChange={handleChange} />
      <ProjectLayoutUI handleChange={handleChange} handleModale={handleModale}>
        <tbody>
          <tr className=" w-11/12 h-full m-auto gap-4 grid grid-cols-4">
            {columns.map((col) => (
              <TaskList
                key={col.name}
                handleCurrentId={handleCurrentId}
                filteredTasks={filteredTasks}
                customStyles={col.colorBody}
                statusList={col.status}
              >
                <Card
                  deleteTask={deleteTask}
                  handleCurrentId={handleCurrentId}
                />
              </TaskList>
            ))}
          </tr>
        </tbody>
      </ProjectLayoutUI>
    </div>
  );
};
