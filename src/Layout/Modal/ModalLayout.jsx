import { cloneElement } from "react";

export const ModalLayout = ({ children, handleModale }) => {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleModale}
      className="fixed top-0 left-0 w-full h-screen bg-gray-800/70 z-50 flex justify-center items-center"
    >
      {cloneElement(children, { stopPropagation: stopPropagation })}
    </div>
  );
};
