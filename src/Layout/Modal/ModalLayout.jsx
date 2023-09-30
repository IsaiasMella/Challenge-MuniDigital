export const ModalLayout = ({ children }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gray-800/70 z-50 flex justify-center items-center">
      {children}
    </div>
  );
};
