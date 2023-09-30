export const NewTask = () => {
  return (
    <div className="bg-white py-6 px-10 rounded-xl flex flex-col justify-center items-center gap-4">
      <div className="w-full flex flex-col gap-2">
        <div className="flex flex-col gap-1 [&>p]:pl-2">
          <p>Titulo</p>
          <input
            className="w-full outline-none bg-slate-100 rounded-2xl py-1 px-4"
            type="text"
            required
          />
        </div>
        <div className="flex flex-col gap-1 [&>p]:pl-2">
          <p>Descripción</p>
          <textarea
            className="w-full outline-none bg-slate-100 rounded-2xl py-1 px-4"
            name="description"
            id=""
            cols="30"
            rows="10"
            required
          />
        </div>
        <div className="flex flex-col gap-1 [&>p]:pl-2">
          <p>Estado</p>
          <select className="w-full outline-none bg-slate-100 rounded-2xl py-2 px-4" required>
            <option value="Hacer">Hacer</option>
            <option value="En curso">En curso</option>
            <option value="Terminada">Terminada</option>
            <option value="Rechazada">Rechazada</option>
          </select>
        </div>
      </div>
      <button className="btn-primary">Guardar</button>
    </div>
  );
};
