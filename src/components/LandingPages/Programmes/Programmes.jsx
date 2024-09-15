import useProgramms from "../../customHooks/useProgramms";
import PageBanner from "../../SharedComponent/PageBanner";
import ProgramCard from "../../SharedComponent/ProgramCard";

export default function Programmes() {
  const { programms } = useProgramms();
  return (
    <div className="bg-[#3171703a]">
      <PageBanner Title="Dr: Hefzur Rahman's Programme" />
      <div className="container mx-auto z-10 px-2 grid grid-cols-1 py-10  md:grid-cols-2 gap-5">
        {programms.map((item, idx) => (
          <ProgramCard key={idx} program={item}></ProgramCard>
        ))}
      </div>
    </div>
  );
}
