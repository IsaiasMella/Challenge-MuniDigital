import { filterSearch } from "../../../Common/Helpers";

describe("filterSearch", () => {
  it("debe devolver un array vacio si task es un array vacio o undefined", () => {

    expect(filterSearch(undefined, {})).toEqual([]);
    expect(filterSearch([], {})).toEqual([]);
  });

  it("debe devolver todas las tareas si la busqueda esta vacia", () => {
    const tasks = [{ title: "Task 1" }, { title: "Task 2" }];

    expect(filterSearch(tasks, { search: "" })).toEqual(tasks);
  });

  it("debe filtrar las tareas segun la busqueda", () => {
    const tasks = [{ title: "Tarea 1" }, { title: "Tarea 2" }, { title: "Tarea 3" }];

    expect(filterSearch(tasks, { search: "tarea" })).toEqual(tasks);
    expect(filterSearch(tasks, { search: "Tarea 2" })).toEqual([{ title: "Tarea 2" }]);
    expect(filterSearch(tasks, { search: "  Tarea  " })).toEqual(tasks);
  });
});
