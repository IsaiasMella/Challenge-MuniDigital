export const NavBar = ({ handleChange, handleModale }) => {
  return (
    <nav className="flex justify-between gap-4 bg-white py-4 px-8">
      <p className="font-bold text-3xl">
        to<span className="text-violet-600">do.</span>
      </p>
      <div className="flex flex-1 justify-center gap-10">
        <input
          className="outline-none bg-slate-100 rounded-2xl w-1/3 py-1 px-4 placeholder:text-slate-400 "
          type="text"
          name="search"
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Buscar"
        />
        <select
          className="select-none outline-none border-b-[2px] border-slate-200 rounded-md  px-2"
          name="status"
          onChange={(e) => {
            handleChange(e);
          }}
        >
          <option value="all">Todas</option>
          <option value="hacer">Hacer</option>
          <option value="en curso">En curso</option>
          <option value="terminada">terminadas</option>
          <option value="rechazada">Rechazadas</option>
        </select>
      </div>
      <button onClick={handleModale} className="btn-primary flex-2">
        + Nueva tarea
      </button>
    </nav>
  );
};
