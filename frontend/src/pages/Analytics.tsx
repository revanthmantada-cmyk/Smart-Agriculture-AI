import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const productionData = [
  { month: 'Jan', production: 120 },
  { month: 'Feb', production: 180 },
  { month: 'Mar', production: 150 },
  { month: 'Apr', production: 220 },
  { month: 'May', production: 190 },
  { month: 'Jun', production: 260 },
];

const cropData = [
  { name: 'Wheat', value: 35 },
  { name: 'Rice', value: 30 },
  { name: 'Cotton', value: 20 },
  { name: 'Other', value: 15 },
];

const COLORS = ['#16a34a', '#65a30d', '#eab308', '#0ea5e9'];

function Analytics() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Agricultural Analytics
        </h1>
        <p className="text-gray-500 mt-1">
          View agricultural statistics and production trends.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

        {[
          { title: 'Crop Production', value: '1,120 kg', description: 'Sample data' },
          { title: 'Crop Types', value: '4', description: 'Sample categories' },
          { title: 'Disease Reports', value: '12', description: 'Sample data' },
          { title: 'Soil Records', value: '25', description: 'Sample data' },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow-sm p-5"
          >
            <p className="text-sm text-gray-500">{item.title}</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {item.value}
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              {item.description}
            </p>
          </div>
        ))}

      </div>

      {/* Production Chart */}
      <div className="bg-white rounded-xl border shadow-sm p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Monthly Crop Production
        </h2>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar
                dataKey="production"
                fill="#16a34a"
                radius={[6, 6, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Crop Distribution Chart */}
      <div className="bg-white rounded-xl border shadow-sm p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Crop Distribution
        </h2>

        <div className="h-72">

          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={cropData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {cropData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>

        </div>

      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
        <h3 className="font-semibold text-yellow-800 mb-2">
          Demo Data Notice
        </h3>

        <p className="text-sm text-yellow-700">
          The charts and statistics currently use sample data for
          demonstration. They are not actual farm measurements.
          Real analytics will be connected to the application database later.
        </p>
      </div>

    </div>
  );
}

export default Analytics;