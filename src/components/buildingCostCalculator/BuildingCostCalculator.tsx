'use client';

import { useState, useMemo } from 'react';

type Mode = 'buy' | 'build';

export default function BuldingCostCalculator() {
  const [mode, setMode] = useState<Mode>('buy');

  const [area, setArea] = useState<number>(100);
  const [pricePerSqM, setPricePerSqM] = useState<number>(1200);
  const [landCost, setLandCost] = useState<number>(20000);
  const [constructionCostPerSqM, setConstructionCostPerSqM] = useState<number>(800);
  const [shape, setShape] = useState<string>('Rectangle');

  // 💡 Dynamic calculation using useMemo
  const totalCost = useMemo(() => {
    if (mode === 'buy') {
      return area * pricePerSqM;
    } else {
      return landCost + area * constructionCostPerSqM;
    }
  }, [mode, area, pricePerSqM, landCost, constructionCostPerSqM]);

  return (
    <div className="bg-[url(/bg-calculator.jpg)] w-full h-auto flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-white text-shadow-md">Building Cost Calculator</h1>

      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setMode('buy')}
          className={`px-4 py-2 rounded ${mode === 'buy' ? 'bg-blue-500 text-white' : 'bg-gray-200'} cursor-pointer`}
        >
          Buy Building
        </button>
        <button
          onClick={() => setMode('build')}
          className={`px-4 py-2 rounded ${mode === 'build' ? 'bg-green-500 text-white' : 'bg-gray-200'} cursor-pointer`}
        >
          Build From Scratch
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <label className="block mb-4">
          Size (in m²):
          <input
            type="number"
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full mt-1 p-2 border rounded"
          />
        </label>

        {mode === 'buy' ? (
          <label className="block mb-4">
            Price per m²:
            <input
              type="number"
              value={pricePerSqM}
              onChange={(e) => setPricePerSqM(Number(e.target.value))}
              className="w-full mt-1 p-2 border rounded"
            />
          </label>
        ) : (
          <>
            <label className="block mb-4">
              Land Cost:
              <input
                type="number"
                value={landCost}
                onChange={(e) => setLandCost(Number(e.target.value))}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>

            <label className="block mb-4">
              Construction Cost per m²:
              <input
                type="number"
                value={constructionCostPerSqM}
                onChange={(e) => setConstructionCostPerSqM(Number(e.target.value))}
                className="w-full mt-1 p-2 border rounded"
              />
            </label>

            <label className="block mb-4">
              Shape:
              <select
                value={shape}
                onChange={(e) => setShape(e.target.value)}
                className="w-full mt-1 p-2 border rounded"
              >
                <option>Rectangle</option>
                <option>Square</option>
                <option>Custom</option>
              </select>
            </label>
          </>
        )}

        <div className="text-xl mt-6 font-semibold">
          💰 Estimated Total Cost: ${totalCost.toLocaleString()}
        </div>
      </div>
    </div>
  );
}




