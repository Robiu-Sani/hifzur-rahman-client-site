import PageBanner from "../../SharedComponent/PageBanner";
import ProgrammCard from "../../SharedComponent/ProgrammCard";

export default function Programmes() {
  return (
    <div className="bg-[#3171703a]">
      <PageBanner Title="Dr: Hifzur Rahman Programmes" />
      <div className="container py-10  mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
        <ProgrammCard></ProgrammCard>
      </div>
    </div>
  );
}
