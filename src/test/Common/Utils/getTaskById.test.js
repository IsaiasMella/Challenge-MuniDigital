import { getDoc } from "firebase/firestore";
import { getTaskById } from "../../../Common/Utils/getTaskById";

jest.mock("firebase/firestore");

describe('getTaskById', () => {
    it("debera retornar la tarea por su ID", async () => {
        const mockData = { id: "123", name: "prueba en la tarea" };
        const mockTask = {
          data: jest.fn().mockReturnValueOnce(mockData),
        };
        getDoc.mockResolvedValueOnce(mockTask);
    
        const result = await getTaskById("123");
    
        expect(result).toEqual(mockData);
      });
});