import React from 'react';
import LoanCalculator from '../../components/loanCalculator/LoanCalculator';
import BuildingCostCalculator from '../../components/buildingCostCalculator/BuildingCostCalculator';

const Calculators = () => {
  return (
    <div className="bg-[var(--dark-blue)] pb-2">
      <h2 className="mb-[70px] pt-16 text-center text-[45px] font-bold text-white text-shadow-md select-none">
        Calculators
      </h2>

      <div id="building-cost">
        <BuildingCostCalculator />
      </div>

      <div id="loan">
        <LoanCalculator />
      </div>
    </div>
  );
};

export default Calculators;


