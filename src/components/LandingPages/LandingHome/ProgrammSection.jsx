import image from "../../../image/bg4.png";
import { Link } from "react-router-dom";
import useProgramms from "../../customHooks/useProgramms";
import ProgramCard from "../../SharedComponent/ProgramCard";

export default function ProgrammSection() {
  const { programms } = useProgramms();
  const lastProgrammes = programms.slice(-2);
  return (
    <div className="w-full bg-[#3171703a] py-10 flex flex-col gap-8 justify-center items-center overflow-hidden relative">
      <img src={image} alt="" className="max-h-[90%] absolute z-0 opacity-40" />
      <h1 className="text-center z-10 text-4xl font-extrabold text-gray-800">
        Programmes
      </h1>

      <div className="container mx-auto z-10 px-2 grid grid-cols-1 md:grid-cols-2 gap-5">
        {lastProgrammes.map((item, idx) => (
          <ProgramCard key={idx} program={item}></ProgramCard>
        ))}
      </div>
      <Link
        to={"/programmes"}
        className="px-5 p-2 rounded hover:scale-110 transform transition duration-300 bg-gradient text-yellow-500 z-10 shadow font-bold"
      >
        See All Books
      </Link>
    </div>
  );
}
