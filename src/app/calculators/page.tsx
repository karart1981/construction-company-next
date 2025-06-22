import React from 'react'
import LoanCalculator from '../../components/loanCalculator/LoanCalculator'
import BuildingCostCalculator from '../../components/buildingCostCalculator/BuildingCostCalculator'

const Calculators = () => {
  return (
    <div className="bg-[#26466e] pb-2">
      <h2 className="mb-[70px] pt-16 text-center text-[45px] font-bold text-white text-shadow-md">Calculators</h2>
      <BuildingCostCalculator />
      <LoanCalculator />
    </div>
  )
}

export default Calculators;

