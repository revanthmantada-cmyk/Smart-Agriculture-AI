import React, { useState } from 'react';

interface CropRecord {
  id: number;
  crop: string;
  quantity: string;
  harvestDate: string;
  status: string;
}

function FarmTracking() {
  const [records, setRecords] = useState<CropRecord[]>([]);
  const [crop, setCrop] = useState('');
  const [quantity, setQuantity] = useState('');
  const [harvestDate, setHarvestDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!crop || !quantity || !harvestDate) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (!Number.isFinite(Number(quantity)) || Number(quantity) <= 0) {
      setMessage('Please enter a valid quantity greater than zero.');
      return;
    }

    const newRecord: CropRecord = {
      id: Date.now(),
      crop,
      quantity,
      harvestDate,
      status: 'Harvested',
    };

    setRecords([...records, newRecord]);

    setCrop('');
    setQuantity('');
    setHarvestDate('');
    setMessage('Crop record added successfully!');
  };

  const updateStatus = (id: number, status: string) => {
    setRecords(records.map(record =>
      record.id === id ? { ...record, status } : record
    ));
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Farm-to-Market Tracking
        </h1>
        <p className="text-gray-500 mt-1">
          Record harvested crops and track their journey to the market.
        </p>
      </div>

      {/* Add Crop Form */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Add Crop Details
        </h2>

        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            <div>
              <label className="block text-sm font-medium mb-2">
                Crop Name
              </label>

              <input
                type="text"
                value={crop}
                onChange={(e) => setCrop(e.target.value)}
                placeholder="Example: Wheat"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quantity (kg)
              </label>

              <input
                type="number"
                min="0"
                step="any"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Harvest Date
              </label>

              <input
                type="date"
                value={harvestDate}
                onChange={(e) => setHarvestDate(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>

          <button
            type="submit"
            className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Add Crop Record
          </button>

        </form>

        {message && (
          <p className="mt-4 text-sm text-green-700">
            {message}
          </p>
        )}

      </div>

      {/* Crop Records */}
      <div className="bg-white rounded-xl shadow-sm border p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Crop Tracking Records
        </h2>

        {records.length === 0 ? (
          <p className="text-gray-500 text-sm">
            No crop records added yet. Add your first crop above.
          </p>
        ) : (

          <div className="overflow-x-auto">

            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-gray-500 text-sm">
                  <th className="py-3">Crop</th>
                  <th className="py-3">Quantity</th>
                  <th className="py-3">Harvest Date</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Update Status</th>
                </tr>
              </thead>

              <tbody>
                {records.map(record => (
                  <tr key={record.id} className="border-b text-sm">

                    <td className="py-4 font-medium">
                      {record.crop}
                    </td>

                    <td className="py-4">
                      {record.quantity} kg
                    </td>

                    <td className="py-4">
                      {record.harvestDate}
                    </td>

                    <td className="py-4">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        {record.status}
                      </span>
                    </td>

                    <td className="py-4">
                      <select
                        value={record.status}
                        onChange={(e) =>
                          updateStatus(record.id, e.target.value)
                        }
                        className="border rounded-lg p-2"
                      >
                        <option value="Harvested">Harvested</option>
                        <option value="In Transit">In Transit</option>
                        <option value="At Market">At Market</option>
                        <option value="Sold">Sold</option>
                      </select>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>

          </div>

        )}

      </div>

      {/* Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
        <h3 className="font-semibold text-blue-800 mb-2">
          Tracking Information
        </h3>

        <p className="text-sm text-blue-700">
          This version stores crop records temporarily in the browser
          session. Permanent database storage and real supply-chain
          tracking will be connected in a later phase.
        </p>
      </div>

    </div>
  );
}

export default FarmTracking;