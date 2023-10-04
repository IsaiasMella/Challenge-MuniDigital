import { useState, useEffect, createContext } from "react";

import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { db } from "../Data/Firebase";

export const tasksContext = createContext();

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState();

  const taskCollection = collection(db, "tasks");

  if(!taskCollection) throw new Error('No se han conseguido las tareas')

  const orderedTasksCollection = query(taskCollection, orderBy("created"));

  const getTasks = () => {
    const unsubscribe = onSnapshot(orderedTasksCollection, (snapshot) => {
      const tasksData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTasks(tasksData);
    });

    return () => unsubscribe();
  };

  useEffect(() => {
    const unsubscribe = getTasks();

    return () => unsubscribe();
  }, []);

  const values = {
    tasks,
    setTasks,
    taskCollection,
  };

  return (
    <tasksContext.Provider value={values}>{children}</tasksContext.Provider>
  );
};
