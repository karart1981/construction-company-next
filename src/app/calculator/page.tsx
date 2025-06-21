'use client';

import { useState } from 'react';

export default function LoanCalculator() {
  const [price, setPrice] = useState('');
  const [prepayment, setPrepayment] = useState('0');
  const [creditTerm, setCreditTerm] = useState('240');
  const [interestRate, setInterestRate] = useState('13');
  const [scheme, setScheme] = useState<'Annuity' | 'Differentiated'>('Annuity');
  const [result, setResult] = useState<null | {
    monthlyPayment: number;
    totalPayment: number;
    overpayment: number;
    schedule: { month: number; payment: number; principal: number; interest: number; balance: number }[];
  }>(null);

  // Input value getter
  const getValue = (label: string) => {
    switch (label) {
      case 'Price':
        return price;
      case 'Prepayment':
        return prepayment;
      case 'Credit term':
        return creditTerm;
      case 'Interest rate':
        return interestRate;
      default:
        return '';
    }
  };

  // Setter function getter
  const getSetter = (label: string) => {
    switch (label) {
      case 'Price':
        return setPrice;
      case 'Prepayment':
        return setPrepayment;
      case 'Credit term':
        return setCreditTerm;
      case 'Interest rate':
        return setInterestRate;
      default:
        return () => {};
    }
  };

  // Fetch calculation
  const handleCalculate = async () => {
    try {
      const url = new URL('http://localhost:4000/calculations');
      url.searchParams.set('price', price);
      url.searchParams.set('prepayment', prepayment);
      url.searchParams.set('creditTerm', creditTerm);
      url.searchParams.set('interestRate', interestRate);
      url.searchParams.set('scheme', scheme);

      const res = await fetch(url.toString());
      if (!res.ok) throw new Error('Failed to fetch from server.');

      const data = await res.json();
      if (data.length > 0) {
        setResult(data[0].result);
      } else {
        alert('No matching data found.');
        setResult(null);
      }
    } catch (error) {
      console.error(error);
      alert('Error fetching calculation. Please check the server and inputs.');
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow max-w-4xl mx-auto my-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Loan Calculator</h2>

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
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        onClick={handleCalculate}
      >
        Calculate
      </button>

      {result && (
        <div className="mt-8">
          <div className="flex flex-wrap gap-6 justify-center text-lg">
            <div><strong>Monthly Payment:</strong> {result.monthlyPayment.toLocaleString()} ֏</div>
            <div><strong>Overpayment:</strong> {result.overpayment.toLocaleString()} ֏</div>
            <div><strong>Total:</strong> {result.totalPayment.toLocaleString()} ֏</div>
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
                    <td className="border">{row.payment.toLocaleString()}</td>
                    <td className="border">{row.principal.toLocaleString()}</td>
                    <td className="border">{row.interest.toLocaleString()}</td>
                    <td className="border">{row.balance.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}



