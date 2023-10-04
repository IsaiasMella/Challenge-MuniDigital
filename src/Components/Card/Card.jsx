import { capitalizedText } from "../../Common/Utils";

export const Card = ({
  title,
  description,
  deleteTask,
  id,
  handleCurrentId,
}) => {
  return (
    <div className="bg-white py-3 px-5 rounded-xl flex flex-col gap-1 cursor-pointer shadow-md">
      <h5 className="font-semibold text-center">{title && capitalizedText(title)}</h5>
      <p className="pl-0">{description && capitalizedText(description)}</p>
      <div className="flex gap-2">
        <img src="./trash.svg" onClick={() => deleteTask(id)} className="text-red-0 stroke-none fill-none"/>
        <img src="./pencil.svg" onClick={() => handleCurrentId(id)} className="fill-red-500"/>
      </div>
    </div>
  );
};
