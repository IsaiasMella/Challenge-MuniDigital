import { useState, useContext, useEffect } from "react";
import { addDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../../Data/Firebase";
import { tasksContext } from "../../Context/TasksProvider";
import { getTaskById } from "../../Common/Utils";
import { useRef } from "react";

const initialState = {
  title: "",
  description: "",
  status: "hacer",
  history: [],
  created: serverTimestamp(),
  lastUpdate: serverTimestamp(),
};

export const TaskForm = ({
  handleModale,
  stopPropagation,
  currentId,
  handleCurrentId,
}) => {
  const [newTask, setNewTask] = useState(initialState);
  const modifiedFieldsRef = useRef({});
  const pruebaRef = useRef({});

  const { taskCollection } = useContext(tasksContext);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskWithTimestamp = {
      ...newTask,
      created: serverTimestamp(),
    };

    handleModale();

    if (currentId) {
      pruebaRef.current = {
        ...newTask,
        lastUpdate: serverTimestamp(),
        history: [...newTask.history, modifiedFieldsRef.current],
      };
      await updateDoc(doc(db, "tasks", currentId), pruebaRef.current);
    } else {
      await addDoc(taskCollection, taskWithTimestamp);
    }
  };

  useEffect(() => {
    const fetchTask = async () => {
      if (currentId) {
        const taskData = await getTaskById(currentId);
        modifiedFieldsRef.current = taskData;
        setNewTask(taskData);
      } else {
        setNewTask(initialState);
      }
    };
    fetchTask();
    return () => {
      setNewTask(initialState);
      handleCurrentId("");
    };
  }, [currentId]);

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      onClick={stopPropagation}
      className="bg-white w-2/6 py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-4"
    >
      <div className="relative flex justify-center items-center w-full">
        <h3 className="font-bold text-2xl">
          {currentId ? "Editar tarea" : "Nueva Tarea"}
        </h3>
        <img
          src="./close.svg"
          alt="close"
          onClick={() => handleModale()}
          className="w-8 absolute z-50 top-1 right-0 cursor-pointer font-2xl"
        />
      </div>
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1 [&>p]:pl-2">
          <p>Titulo</p>
          <input
            onChange={(e) => handleChange(e)}
            className="w-full outline-none bg-slate-100 rounded-xl py-2 px-4"
            type="text"
            name="title"
            value={newTask.title}
            required
          />
        </div>
        <div className="flex flex-col gap-1 [&>p]:pl-2">
          <p>Descripción</p>
          <textarea
            onChange={(e) => handleChange(e)}
            className="w-full max-h-40 outline-none bg-slate-100 rounded-xl py-2 px-4 resize-none"
            name="description"
            rows="10"
            value={newTask.description}
            required
          />
        </div>
        <div className="flex flex-col gap-1 [&>p]:pl-2">
          <p>Estado</p>
          <select
            onChange={handleChange}
            className="w-full outline-none bg-slate-100 rounded-xl py-2 px-4"
            name="status"
            value={newTask.status}
          >
            <option value="hacer">Hacer</option>
            <option value="en curso">En curso</option>
            <option value="terminada">Terminada</option>
            <option value="rechazada">Rechazada</option>
          </select>
        </div>
      </div>
      <button className="btn-primary">Guardar</button>
    </form>
  );
};
