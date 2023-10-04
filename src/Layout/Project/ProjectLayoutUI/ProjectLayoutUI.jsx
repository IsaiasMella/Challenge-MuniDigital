import { columns } from "../../../Common/Constants";

export const ProjectLayoutUI = ({ children }) => {
  return (
    <section className="w-full h-[calc(100vh-75px)] pb-4 flex flex-col bg-white">
      <table className="w-full h-full px-8">
        <thead className=" [&>tr>th]:cursor-default [&>tr]:text-center">
          <tr className="w-11/12 m-auto grid grid-cols-4 gap-4 [&>th]:rounded-t-md mt-2 [&>th]:py-4 [&>th]:px-2 [&>th]:border-b-4">
            {columns.map((col) => (
              <th key={col.name} className={`${col.colorHead}`}>
                {col.name}
              </th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </section>
  );
};
