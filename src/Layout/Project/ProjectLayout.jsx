export const ProjectLayout = ({ children }) => {
  return (
    <section className="w-full h-full flex flex-col bg-slate-100">
      <header className="w-full h-32 bg-fuchsia-700 relative overflow-hidden">
        <picture className="absolute w-full h-full top-0 left-0 z-0 blur-sm">
          <img
            src="/Hero-Project.avif"
            className="object-cover w-full h-full"
            alt="background header"
          />
        </picture>
        <div className="relative flex flex-col justify-center h-full px-8 z-20 text-slate-200">
          <p className="text-sm italic text-slate-300">Project</p>
          <p className="font-semibold text-xl">CAMBIAR A DINAMICO</p>
        </div>
      </header>

      <main className="w-full mt-4">
        <div className="w-full flex justify-between px-8">
          <ul className="flex gap-4 [&>li>p]:cursor-pointer [&>li>p]:p-2">
            <li>
              <p>Hacer</p>
            </li>
            <li>
              <p>En curso</p>
            </li>
            <li>
              <p>Terminadas</p>
            </li>
            <li>
              <p>Rechazadas</p>
            </li>
          </ul>
          <button className="btn-primary">
            + Nueva tarea
          </button>
        </div>
        <div className="py-4 px-8">{children}</div>
      </main>
    </section>
  );
};
