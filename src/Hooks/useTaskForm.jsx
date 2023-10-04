import { useState, useEffect, useRef } from "react";

import { addDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../Data/Firebase";

import { initialTask } from "../Common/Constants";
import { getTaskById } from "../Common/Utils";

export const useTaskForm = (
  currentId,
  handleModale,
  handleCurrentId,
  taskCollection
) => {
  const [newTask, setNewTask] = useState(initialTask);
  const modifiedFieldsRef = useRef({});
  const updatedTaskRef = useRef({});

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
      updatedTaskRef.current = {
        ...newTask,
        lastUpdate: serverTimestamp(),
        history: [...newTask.history, modifiedFieldsRef.current],
      };
      await updateDoc(doc(db, "tasks", currentId), updatedTaskRef.current);
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
        setNewTask(initialTask);
      }
    };
    fetchTask();
    return () => {
      setNewTask(initialTask);
      handleCurrentId("");
    };
  }, [currentId]);

  return { newTask, handleChange, handleSubmit };
};
