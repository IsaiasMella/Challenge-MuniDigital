export const ProjectLayoutUI = ({ children, handleModale, handleChange }) => {
  return (
    <section className="w-full min-h-[calc(100vh-68px)] flex flex-col bg-slate-100">
      {/* <header className="w-full h-32 bg-fuchsia-700 relative overflow-hidden">
      <picture className="absolute w-full h-full top-0 left-0 z-0 blur-sm">
        <img
          src="/Hero-Project.avif"
          className="object-cover w-full h-full"
          alt="background header"
        />
      </picture>
      <div className="relative flex flex-col justify-center h-full px-8 z-20 text-slate-200">
        <p className="text-sm italic text-slate-300">Project</p>
        <p className="font-semibold text-xl">{tasks ? tasks[0].title : ""}</p>
      </div>
    </header> */}
      <div className="flex justify-end gap-4 bg-white py-2 px-4">
        <input
          className="outline-none bg-slate-100 rounded-2xl w-1/3 py-1 px-4 text-slate-500"
          type="text"
          name="search"
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Buscar"
        />
        <select
          name="status"
          onChange={(e) => {
            handleChange(e);
          }}
          id=""
        >
          <option value="all">Todas</option>
          <option value="hacer">Hacer</option>
          <option value="en curso">En curso</option>
          <option value="rechazada">Rechazadas</option>
        </select>
        <button onClick={handleModale} className="btn-primary">
          + Nueva tarea
        </button>
      </div>

      <main className="w-full mt-4">
        <table className="w-full px-8">
          <thead className="w-full [&>tr>th]:cursor-pointer [&>tr>th]:p-2 [&>tr]:text-center">
            <tr className="w-full grid grid-cols-4">
              <th>Hacer</th>
              <th>En curso</th>
              <th>Terminadas</th>
              <th>Rechazadas</th>
            </tr>
          </thead>
          {children}
        </table>
      </main>
    </section>
  );
};
