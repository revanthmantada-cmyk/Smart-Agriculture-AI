import React, { useState } from 'react';
import API_BASE_URL from '../services/api';

interface SoilResult {
  message: string;
  note: string;
  input: {
    nitrogen: number;
    phosphorus: number;
    potassium: number;
    ph: number;
  };
}

function SoilHealth() {
  const [values, setValues] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    ph: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<SoilResult | null>(null);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setMessage('');
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nitrogen = Number(values.nitrogen);
    const phosphorus = Number(values.phosphorus);
    const potassium = Number(values.potassium);
    const ph = Number(values.ph);

    if (
      !Number.isFinite(nitrogen) ||
      !Number.isFinite(phosphorus) ||
      !Number.isFinite(potassium) ||
      !Number.isFinite(ph) ||
      nitrogen < 0 ||
      phosphorus < 0 ||
      potassium < 0 ||
      ph < 0 ||
      ph > 14
    ) {
      setError('Enter valid values. N, P and K must be non-negative, and pH must be between 0 and 14.');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');
    setResult(null);

    try {
      const response = await fetch(`${API_BASE_URL}/soil/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nitrogen,
          phosphorus,
          potassium,
          ph,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Soil API request failed');
      }

      setResult(data);
      setMessage('Soil values successfully sent to the backend!');

    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to connect to the backend.'
      );
    } finally {
      setLoading(false);
    }
  };

  const fields = [
    { name: 'nitrogen', label: 'Nitrogen (N)', unit: 'mg/kg', placeholder: 'Example: 90' },
    { name: 'phosphorus', label: 'Phosphorus (P)', unit: 'mg/kg', placeholder: 'Example: 42' },
    { name: 'potassium', label: 'Potassium (K)', unit: 'mg/kg', placeholder: 'Example: 43' },
    { name: 'ph', label: 'Soil pH', unit: '0–14', placeholder: 'Example: 6.5' },
  ];

  return (
    <div className="space-y-6">

      <div>
        <p className="text-sm font-medium text-green-700">
          AGRICULTURE / SOIL DIAGNOSTICS
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-800">
          Soil Health Analysis
        </h1>

        <p className="mt-2 text-slate-500">
          Enter soil nutrient values to prepare your soil assessment.
        </p>
      </div>

      <div className="p-5 border border-green-200 bg-green-50 rounded-2xl">
        <h2 className="font-semibold text-green-900">
          🌱 Why soil testing matters
        </h2>

        <p className="mt-2 text-sm leading-6 text-green-800">
          Soil testing helps farmers understand nutrient availability
          and soil acidity or alkalinity before making farming decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm lg:col-span-2"
        >
          <h2 className="text-lg font-bold text-slate-800">
            Enter Soil Parameters
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Enter values from your soil laboratory report or testing device.
          </p>

          <div className="grid grid-cols-1 gap-5 mt-6 sm:grid-cols-2">

            {fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block mb-2 text-sm font-semibold text-slate-700"
                >
                  {field.label}
                </label>

                <div className="relative">
                  <input
                    id={field.name}
                    name={field.name}
                    type="number"
                    step="any"
                    min="0"
                    max={field.name === 'ph' ? '14' : undefined}
                    value={values[field.name as keyof typeof values]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                  <span className="absolute text-xs text-slate-400 right-4 top-4">
                    {field.unit}
                  </span>
                </div>
              </div>
            ))}

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-5 py-3 mt-7 font-semibold text-white transition bg-green-700 rounded-xl hover:bg-green-800 disabled:opacity-50"
          >
            {loading ? 'Submitting...' : 'Submit Soil Values →'}
          </button>

          {message && (
            <p
              role="status"
              className="p-4 mt-4 text-sm leading-6 text-green-800 bg-green-50 border border-green-200 rounded-xl"
            >
              ✅ {message}
            </p>
          )}

          {error && (
            <p
              role="alert"
              className="p-4 mt-4 text-sm leading-6 text-red-700 bg-red-50 border border-red-200 rounded-xl"
            >
              ❌ {error}
            </p>
          )}

        </form>

        <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm">

          <h2 className="text-lg font-bold text-slate-800">
            Soil Parameters
          </h2>

          <div className="mt-5 space-y-5">

            {[
              ['N', 'Nitrogen', 'Supports leaf and plant growth.'],
              ['P', 'Phosphorus', 'Supports root and flower development.'],
              ['K', 'Potassium', 'Supports plant health and water regulation.'],
              ['pH', 'Soil acidity', 'Indicates acidity or alkalinity.'],
            ].map(([symbol, title, description]) => (
              <div key={symbol} className="flex gap-3">
                <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 font-bold text-green-800 bg-green-100 rounded-xl">
                  {symbol}
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {title}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    {description}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>

      <div className="p-6 bg-white border border-slate-200 shadow-sm rounded-2xl">

        <h2 className="font-bold text-slate-800">
          Soil Assessment Result
        </h2>

        {result ? (
          <div className="p-5 mt-4 border border-green-200 bg-green-50 rounded-xl">

            <p className="font-semibold text-green-800">
              ✅ {result.message}
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-4">

              <div>
                <p className="text-xs text-slate-500">Nitrogen</p>
                <p className="font-bold">{result.input.nitrogen}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Phosphorus</p>
                <p className="font-bold">{result.input.phosphorus}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Potassium</p>
                <p className="font-bold">{result.input.potassium}</p>
              </div>

              <div>
                <p className="text-xs text-slate-500">Soil pH</p>
                <p className="font-bold">{result.input.ph}</p>
              </div>

            </div>

            <p className="mt-4 text-sm text-green-800">
              {result.note}
            </p>

          </div>
        ) : (
          <div className="p-5 mt-4 border border-amber-200 bg-amber-50 rounded-xl">

            <p className="font-semibold text-amber-800">
              Awaiting Soil Data
            </p>

            <p className="mt-2 text-sm leading-6 text-amber-700">
              Submit your soil parameters to send them to the Flask backend.
              The current API validates and returns input values; it does not
              perform a scientific soil-health prediction.
            </p>

          </div>
        )}

      </div>

    </div>
  );
}

export default SoilHealth;