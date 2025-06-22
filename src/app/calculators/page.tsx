import React from 'react'
import LoanCalculator from '../../components/loanCalculator/LoanCalculator'
import BuildingCostCalculator from '../../components/buildingCostCalculator/BuildingCostCalculator'

const Calculators = () => {
  return (
    <div className="bg-[#d7e8ea] pb-2">
      <BuildingCostCalculator />
      <LoanCalculator />
    </div>
  )
}

export default Calculators;

