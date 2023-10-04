import { renderHook, act } from "@testing-library/react";
import { addDoc } from "firebase/firestore";
import { useTaskForm } from "../../Hooks/useTaskForm";

jest.mock("firebase/firestore");

describe("useTaskForm", () => {
  const handleModaleMock = jest.fn();
  const handleCurrentIdMock = jest.fn();
  const taskCollectionMock = {};

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("debe manejar los cambios en el formulario", () => {
    const { result } = renderHook(() =>
      useTaskForm(
        null,
        handleModaleMock,
        handleCurrentIdMock,
        taskCollectionMock
      )
    );

    act(() => {
      result.current.handleChange({
        target: { name: "title", value: "prueba en la tarea" },
      });
    });

    expect(result.current.newTask.title).toEqual("prueba en la tarea");
  });

  it("debe enviar la tarea nueva", async () => {
    const { result } = renderHook(() =>
      useTaskForm(
        null,
        handleModaleMock,
        handleCurrentIdMock,
        taskCollectionMock
      )
    );

    act(() => {
      result.current.handleChange({
        target: { name: "title", value: "prueba en la tarea" },
      });
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: jest.fn() });
    });

    expect(addDoc).toHaveBeenCalledWith(
      taskCollectionMock,
      expect.objectContaining({ title: "prueba en la tarea" })
    );
  });
});
