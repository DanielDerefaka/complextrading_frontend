// PaidPlan.js
import React from "react";
import MecuryPlan from "./MecuryPlan";
import Standardlan from "./Standardlan";
import Professionalplan from "./Professionalplan";
import PremiumPlan from "./PremiumPlan";
import BasicPlan from "./BasicPlan";

const PaidPlan = () => {
  return (
    <div className="grid grid-cols-3 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-1 w-full  gap-10">
      {/* Mecury  */}
      <MecuryPlan/>
      <Standardlan/>
      <Professionalplan/>
      <PremiumPlan/>
      <BasicPlan/>
      <Professionalplan/>

    </div>
  );
};

export default PaidPlan;
