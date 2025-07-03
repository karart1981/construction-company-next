'use client';

import { useState } from 'react';

export default function LoanCalculator() {
  const [price, setPrice] = useState('20000');
  const [prepayment, setPrepayment] = useState('0');
  const [creditTerm, setCreditTerm] = useState('240');
  const [interestRate, setInterestRate] = useState('7');
  const [scheme, setScheme] = useState<'Annuity' | 'Differentiated'>('Annuity');
  const [result, setResult] = useState<null | {
    monthlyPayment: number;
    totalPayment: number;
    overpayment: number;
    schedule: { month: number; payment: number; principal: number; interest: number; balance: number }[];
  }>(null);

  const getValue = (label: string) => {
    switch (label) {
      case 'Price': return price;
      case 'Prepayment': return prepayment;
      case 'Credit term': return creditTerm;
      case 'Interest rate': return interestRate;
      default: return '';
    }
  };

  const getSetter = (label: string): (value: string) => void => {
    switch (label) {
      case 'Price': return setPrice;
      case 'Prepayment': return setPrepayment;
      case 'Credit term': return setCreditTerm;
      case 'Interest rate': return setInterestRate;
      default: return () => {};
    }
  };

  const calculateLoan = () => {
    const loanAmount = parseFloat(price) - parseFloat(prepayment);
    const months = parseInt(creditTerm);
    const rate = parseFloat(interestRate) / 100 / 12;

    if (isNaN(loanAmount) || isNaN(months) || isNaN(rate) || loanAmount <= 0 || months <= 0 || rate < 0) {
      throw new Error('Invalid input');
    }

    if (scheme === 'Annuity') {
      const monthlyPayment =
        (loanAmount * rate) / (1 - Math.pow(1 + rate, -months));
      const schedule = [];
      let balance = loanAmount;

      for (let month = 1; month <= months; month++) {
        const interest = balance * rate;
        const principal = monthlyPayment - interest;
        balance -= principal;
        schedule.push({
          month,
          payment: monthlyPayment,
          principal,
          interest,
          balance: balance < 0.01 ? 0 : balance,
        });
      }

      const totalPayment = monthlyPayment * months;
      const overpayment = totalPayment - loanAmount;

      return { monthlyPayment, totalPayment, overpayment, schedule };
    } else {
      const principalPayment = loanAmount / months;
      const schedule = [];
      let balance = loanAmount;
      let totalPayment = 0;

      for (let month = 1; month <= months; month++) {
        const interest = balance * rate;
        const payment = principalPayment + interest;
        balance -= principalPayment;
        totalPayment += payment;
        schedule.push({
          month,
          payment,
          principal: principalPayment,
          interest,
          balance: balance < 0.01 ? 0 : balance,
        });
      }

      const monthlyPayment = schedule[0].payment;
      const overpayment = totalPayment - loanAmount;

      return { monthlyPayment, totalPayment, overpayment, schedule };
    }
  };

  const handleCalculate = () => {
    try {
      const result = calculateLoan();
      setResult(result);
    } catch (error) {
      console.error(error);
      alert('Error during calculation. Please check your input.');
    }
  };

  return (
    <div className="bg-[url(/banking-bg.jpg)] w-full py-32 max-w-[80%] m-auto mt-[100px] rounded-2xl mb-[100px] select-none">
      <div className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto my-10">
        <h2 className="text-3xl font-bold mb-4 text-center text-black text-shadow-md">Loan Calculator</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['Price', 'Prepayment', 'Credit term', 'Interest rate'].map((label) => (
            <div key={label}>
              <label className="block text-sm font-medium mb-1">{label}</label>
              <input
                type="number"
                value={getValue(label)}
                onChange={(e) => getSetter(label)(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1">Scheme</label>
            <select
              value={scheme}
              onChange={(e) => setScheme(e.target.value as 'Annuity' | 'Differentiated')}
              className="w-full border border-gray-300 rounded px-3 py-2"
            >
              <option value="Annuity">Annuity</option>
              <option value="Differentiated">Differentiated</option>
            </select>
          </div>
        </div>

        <button
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer transition-[var(--transition)]"
          onClick={handleCalculate}
        >
          Calculate (Calculated in dollars)
        </button>

        {result && (
          <div className="mt-8">
            <div className="flex flex-wrap gap-6 justify-center text-lg">
              <div><strong>Monthly Payment:</strong> {result.monthlyPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })} $</div>
              <div><strong>Overpayment:</strong> {result.overpayment.toLocaleString(undefined, { maximumFractionDigits: 2 })} $</div>
              <div><strong>Total:</strong> {result.totalPayment.toLocaleString(undefined, { maximumFractionDigits: 2 })} $</div>
            </div>

            <div className="mt-6 max-h-[300px] overflow-auto">
              <table className="w-full text-sm text-center border">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="py-2 border">Month</th>
                    <th className="border">Payment</th>
                    <th className="border">Principal</th>
                    <th className="border">Interest</th>
                    <th className="border">Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {result.schedule.map((row) => (
                    <tr key={row.month} className="border-t">
                      <td className="py-1 border">{row.month}</td>
                      <td className="border">{row.payment.toFixed(2)}</td>
                      <td className="border">{row.principal.toFixed(2)}</td>
                      <td className="border">{row.interest.toFixed(2)}</td>
                      <td className="border">{row.balance.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
