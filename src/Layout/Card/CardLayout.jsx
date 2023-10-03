export const CardLayout = ({
  title,
  description,
  deleteTask,
  id,
  handleCurrentId,
}) => {
  return (
    <div className="bg-white py-3 px-5 rounded-xl flex flex-col cursor-pointer">
      <h5>{title && title}</h5>
      <p>{description && description}</p>
      <div className="flex gap-2">
        <button onClick={() => deleteTask(id)} className="btn-primary">
          Borrar
        </button>
        <button onClick={() => handleCurrentId(id)} className="btn-primary">
          Editar
        </button>
      </div>
    </div>
  );
};
