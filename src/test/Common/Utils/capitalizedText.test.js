import { capitalizedText } from "../../../Common/Utils";

describe("capitalizedText", () => {
  it("debe retornar la palabra con la primera letra en mayuscula", () => {
    const result = capitalizedText("hola");
    expect(result).toEqual("Hola");
  });

  it("debe retornar la misma frase sin cambios en caso de empezar con un caracter especial o numeros", () => {
    const resultCharacter = capitalizedText("!hola");
    const resultNumbers = capitalizedText("123hola");

    expect(resultCharacter).toEqual("!hola");
    expect(resultNumbers).toEqual("123hola");
  });
});
