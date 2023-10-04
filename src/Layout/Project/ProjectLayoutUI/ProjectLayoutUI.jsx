export const ProjectLayoutUI = ({ children}) => {
  return (
    <section className="w-full h-screen flex flex-col bg-white">
        <table className="w-full px-8">
          <thead className=" [&>tr>th]:cursor-pointer [&>tr]:text-center">
            <tr className="w-11/12 m-auto grid grid-cols-4 gap-4 [&>th]:rounded-t-md mt-2 [&>th]:py-4 [&>th]:px-2 [&>th]:border-b-4">
              <th className="border-indigo-600/30">Hacer</th>
              <th className="border-amber-400/30">En curso</th>
              <th className="border-emerald-400/30">Terminadas</th>
              <th className="border-rose-400/30">Rechazadas</th>
            </tr>
          </thead>
          {children}
        </table>
    </section>
  );
};
