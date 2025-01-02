import { PracticeAreaAllLawsSection, PracticeAreaExperties } from "../components";

function PracticeArea() {
  return (
    <div className="w-full pb-16">
      <h2 className="text-xl  md:text-3xl font-bold text-center">
        Our team of experienced lawyers is well equipped to advise on:
      </h2>

      <PracticeAreaAllLawsSection />
      <PracticeAreaExperties/>
      {/* <PracticeAreaSection /> */}
    </div>
  );
}

export default PracticeArea;
