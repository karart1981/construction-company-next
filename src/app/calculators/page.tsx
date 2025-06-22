import React from 'react'
import LoanCalculator from '../../components/loanCalculator/LoanCalculator'
import BuildingCostCalculator from '../../components/buildingCostCalculator/BuildingCostCalculator'

const Calculators = () => {
  return (
    <div className="bg-[#d7e8ea] pb-2">
      <h2 className="mb-[70px] pt-16 text-center text-[45px] font-bold text-black text-shadow-md">Calculators</h2>
      <BuildingCostCalculator />
      <LoanCalculator />
    </div>
  )
}

export default Calculators;

