import React, { useState } from 'react';

function CropRecommendation() {
  const [values, setValues] = useState({
    nitrogen: '',
    phosphorus: '',
    potassium: '',
    temperature: '',
    humidity: '',
    ph: '',
    rainfall: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    setMessage('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const numbers = Object.values(values).map(Number);

    if (Object.values(values).some(value => value.trim() === '') ||
        numbers.some(value => !Number.isFinite(value) || value < 0)) {
      setMessage('Please enter valid values. All inputs must be non-negative.');
      return;
    }

    const ph = Number(values.ph);
    const humidity = Number(values.humidity);

    if (ph > 14) {
      setMessage('Soil pH must be between 0 and 14.');
      return;
    }

    if (humidity > 100) {
      setMessage('Humidity must be between 0 and 100%.');
      return;
    }

    setMessage(
      'Your input values are ready! The crop recommendation model is not connected yet.'
    );
  };

  const fields = [
    { label: 'Nitrogen (N)', name: 'nitrogen', unit: 'kg/ha' },
    { label: 'Phosphorus (P)', name: 'phosphorus', unit: 'kg/ha' },
    { label: 'Potassium (K)', name: 'potassium', unit: 'kg/ha' },
    { label: 'Temperature', name: 'temperature', unit: '°C' },
    { label: 'Humidity', name: 'humidity', unit: '%' },
    { label: 'Soil pH', name: 'ph', unit: '0–14' },
    { label: 'Rainfall', name: 'rainfall', unit: 'mm' },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Crop Recommendation
        </h1>
        <p className="text-gray-500 mt-1">
          Enter soil and weather details to prepare for crop recommendation.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Enter Agricultural Details
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Provide the following values for your farmland.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {fields.map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                </label>

                <div className="flex items-center border rounded-lg px-3 focus-within:ring-2 focus-within:ring-green-500">
                  <input
                    type="number"
                    step="any"
                    min="0"
                    name={field.name}
                    value={values[field.name as keyof typeof values]}
                    onChange={handleChange}
                    placeholder={`Enter ${field.label}`}
                    className="w-full py-3 outline-none"
                  />

                  <span className="text-sm text-gray-400 ml-2">
                    {field.unit}
                  </span>
                </div>
              </div>
            ))}

          </div>

          <button
            type="submit"
            className="mt-7 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
          >
            Prepare Recommendation
          </button>

        </form>

        {message && (
          <div className="mt-5 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
            {message}
          </div>
        )}

      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-semibold text-blue-800 mb-2">
          About Crop Recommendation
        </h3>

        <p className="text-sm text-blue-700">
          The recommendation system will use nitrogen, phosphorus,
          potassium, temperature, humidity, soil pH and rainfall
          data to suggest suitable crops. The machine learning
          model has not been connected yet.
        </p>
      </div>

    </div>
  );
}

export default CropRecommendation;