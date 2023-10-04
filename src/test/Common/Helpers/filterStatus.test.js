import { filterStatus } from "../../../Common/Helpers";

describe("Función filterStatus", () => {
  const tareas = [
    { status: "hacer" },
    { status: "en curso" },
    { status: "terminada" },
    { status: "rechazada" },
  ];

  it("debe devolver todas las tareas si el estado es 'all'", () => {
    expect(filterStatus(tareas, { status: "all" })).toEqual(tareas);
  });

  it("debe filtrar tareas basadas en los estados", () => {
    expect(filterStatus(tareas, { status: "hacer" })).toEqual([
      { status: "hacer" },
    ]);
    expect(filterStatus(tareas, { status: "en curso" })).toEqual([
      { status: "en curso" },
    ]);
    expect(filterStatus(tareas, { status: "terminada" })).toEqual([
      { status: "terminada" },
    ]);
    expect(filterStatus(tareas, { status: "rechazada" })).toEqual([
      { status: "rechazada" },
    ]);
  });
});
