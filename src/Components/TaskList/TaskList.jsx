import { cloneElement } from "react";
import { useDragAndDrop } from "../../Hooks";

export const TaskList = ({
  filteredTasks,
  customStyles,
  children,
  statusList,
}) => {
  const { startDrag, draggingOver, onDrop } = useDragAndDrop();

  return (
    <td
      draggable
      onDragOver={(e) => draggingOver(e)}
      onDrop={(e) => onDrop(e, statusList)}
      className={`overflow-y h-full flex flex-col gap-3 p-4 rounded-b-xl ${customStyles}`}
    >
      {filteredTasks &&
        filteredTasks.map((task) => {
          if (task.status === statusList) {
            return (
              <div
                draggable
                onDragStart={(e) => startDrag(e, task)}
                key={task.id}
              >
                {cloneElement(children, {
                  id: task.id,
                  title: task.title,
                  description: task.description,
                  startDrag: startDrag,
                })}
              </div>
            );
          }
        })}
    </td>
  );
};
