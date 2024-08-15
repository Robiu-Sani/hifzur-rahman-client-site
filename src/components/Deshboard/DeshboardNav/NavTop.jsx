import { NavLink } from "react-router-dom";

export default function NavTop() {
  return (
    <div className="w-full py-2 pr-2 pl-[60px] h-[50px] shadow-md bg-gradient  flex justify-between items-center gap-1">
      <h3 className="text-gradient font-bold">Welcome to Deshboard</h3>
      <div className="flex ">
        <NavLink to={`/`} className={`text-gradient`}>
          Home
        </NavLink>
      </div>
    </div>
  );
}
