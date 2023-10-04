import { capitalizedText } from "../../Common/Utils";

export const Card = ({
  title,
  description,
  deleteTask,
  id,
  handleCurrentId,
}) => {
  return (
    <div className="bg-white py-3 px-5 rounded-xl flex flex-col gap-1 cursor-default shadow-md overflow-hidden">
      <h5 className="font-semibold text-center">{title && capitalizedText(title)}</h5>
      <p className="w-full break-words">{description && capitalizedText(description)}</p>
      <div className="flex gap-2">
        <img src="./trash.svg" onClick={() => deleteTask(id)} className=" cursor-pointer text-red-0 stroke-none fill-none"/>
        <img src="./pencil.svg" onClick={() => handleCurrentId(id)} className="cursor-pointer fill-red-500"/>
      </div>
    </div>
  );
};
