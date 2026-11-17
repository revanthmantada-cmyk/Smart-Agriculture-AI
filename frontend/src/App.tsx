import { useState, useEffect } from 'react';
import CropDisease from './pages/CropDisease';
import SoilHealth from './pages/SoilHealth';
import CropRecommendation from './pages/CropRecommendation';
import FarmTracking from './pages/FarmTracking';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import { checkBackendConnection } from './services/api';

const navigation = [
  { name: 'Overview', icon: '▦' },
  { name: 'Crop Disease Detection', icon: '🌿' },
  { name: 'Soil Health Analysis', icon: '🌱' },
  { name: 'Crop Recommendation', icon: '🌾' },
  { name: 'Farm-to-Market Tracking', icon: '🚜' },
  { name: 'Analytics', icon: '📊' },
  { name: 'Settings', icon: '⚙' },
];

const stats = [
  { title: 'Crop Health', value: 'Not analyzed', icon: '🌿', color: 'bg-green-100', text: 'text-green-700' },
  { title: 'Soil Health', value: 'Not analyzed', icon: '🌱', color: 'bg-blue-100', text: 'text-blue-700' },
  { title: 'Disease Detection', value: '0', icon: '🔬', color: 'bg-orange-100', text: 'text-orange-700' },
  { title: 'Farm Tracking', value: '0', icon: '🚜', color: 'bg-purple-100', text: 'text-purple-700' },
];

function App() {
  const [activePage, setActivePage] = useState('Overview');
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    checkBackendConnection()
      .then(() => setBackendStatus('Connected'))
      .catch(() => setBackendStatus('Disconnected'));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 md:flex">

      {/* SIDEBAR */}
      <aside className="w-full bg-white border-r border-slate-200 md:w-64 md:min-h-screen">
        <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-100">
          <div className="flex items-center justify-center w-11 h-11 text-2xl bg-green-100 rounded-xl">
            🌱
          </div>
          <div>
            <h1 className="text-lg font-bold text-green-800">AgriSmart AI</h1>
            <p className="text-xs text-slate-500">Smart Farming Platform</p>
          </div>
        </div>

        <nav className="p-4 space-y-2">
          <p className="px-3 py-3 text-xs font-semibold tracking-wider text-slate-400 uppercase">
            Main Menu
          </p>

          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`flex items-center w-full gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                activePage === item.name
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-slate-600 hover:bg-green-50 hover:text-green-800'
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 mt-4">
          <div className="p-4 bg-green-50 border border-green-100 rounded-2xl">
            <div className="text-2xl">🌍</div>
            <h3 className="mt-2 font-semibold text-green-900">Smart Farming</h3>
            <p className="mt-1 text-xs leading-5 text-green-700">
              Technology for better agricultural decisions.
            </p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 min-w-0">

        {/* TOP HEADER */}
        <header className="flex flex-col justify-between gap-4 px-5 py-5 bg-white border-b border-slate-200 sm:flex-row sm:items-center sm:px-8">
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              {activePage === 'Overview' ? 'Dashboard Overview' : activePage}
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Smart Agriculture AI Management System
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-3 py-2 text-xs font-semibold rounded-lg bg-green-50">
              Backend:{' '}
              <span className={backendStatus === 'Connected' ? 'text-green-700' : 'text-red-600'}>
                {backendStatus}
              </span>
            </div>

            <div className="hidden px-4 py-2 text-sm border rounded-lg md:block border-slate-200 bg-slate-50">
              🔍 Search...
            </div>

            <button className="relative p-2 text-xl rounded-lg hover:bg-slate-100">
              🔔
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 font-bold text-green-800 bg-green-100 rounded-full">
                R
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold">Farmer</p>
                <p className="text-xs text-slate-500">User Account</p>
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-5 space-y-6 sm:p-8">

          {activePage === 'Overview' ? (
            <>
              {/* WELCOME SECTION */}
              <section className="relative p-7 overflow-hidden bg-gradient-to-r from-green-800 to-green-600 rounded-2xl text-white">
                <div className="relative z-10 max-w-xl">
                  <p className="mb-2 text-sm text-green-100">
                    WELCOME TO AGRISMART AI
                  </p>

                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                    Smart Agriculture Dashboard
                  </h1>

                  <p className="mt-3 text-sm leading-6 text-green-100">
                    Monitor your agricultural activities, understand soil
                    conditions and make informed farming decisions with AI.
                  </p>

                  <button
                    onClick={() => setActivePage('Crop Disease Detection')}
                    className="px-5 py-3 mt-5 font-semibold text-green-800 transition bg-white rounded-lg hover:bg-green-50"
                 >
                    Explore Crop Analysis →
                  </button>
                </div>

                <div className="absolute text-9xl opacity-10 right-8 bottom-0">
                  🌾
                </div>
              </section>

              {/* STATISTICS */}
              <section>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold">Farm Overview</h2>
                  <span className="text-xs text-slate-500">
                    Current application status
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.title}
                      className="p-5 transition bg-white border border-slate-100 shadow-sm rounded-2xl hover:shadow-md"
                    >
                      <div className="flex items-center justify-between">
                        <div className={`flex items-center justify-center w-12 h-12 text-2xl rounded-xl ${stat.color}`}>
                          {stat.icon}
                        </div>
                        <span className="text-xs text-slate-400">Overview</span>
                      </div>

                      <p className="mt-5 text-sm text-slate-500">{stat.title}</p>
                      <h3 className={`mt-1 text-2xl font-bold ${stat.text}`}>
                        {stat.value}
                      </h3>
                    </div>
                  ))}
                </div>
              </section>

              {/* CHARTS */}
              <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

                <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                  <h3 className="font-bold text-slate-800">Agricultural Insights</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Illustrative crop distribution — demonstration data
                  </p>

                  <div className="flex items-end justify-around h-48 gap-5 mt-6 border-b border-slate-200">
                    {[65, 85, 45, 75, 55, 90].map((height, index) => (
                      <div key={index} className="flex flex-col items-center justify-end h-full gap-2">
                        <div
                          className="w-8 bg-green-600 rounded-t-md"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-slate-500">
                          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                  <h3 className="font-bold text-slate-800">Quick Actions</h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Explore agriculture modules
                  </p>

                  <div className="mt-5 space-y-3">
                    {[
                      ['🌿', 'Detect Crop Disease', 'Crop Disease Detection'],
                      ['🌱', 'Analyze Soil Health', 'Soil Health Analysis'],
                      ['🌾', 'Get Crop Recommendations', 'Crop Recommendation'],
                      ['🚜', 'Track Farm Products', 'Farm-to-Market Tracking'],
                    ].map(([icon, label, page]) => (
                      <button
                        key={page}
                        onClick={() => setActivePage(page)}
                        className="flex items-center w-full gap-3 p-3 text-left transition border rounded-xl border-slate-100 hover:bg-green-50 hover:border-green-200"
                      >
                        <span className="text-2xl">{icon}</span>
                        <span className="flex-1 text-sm font-medium">{label}</span>
                        <span className="text-green-700">→</span>
                      </button>
                    ))}
                  </div>
                </div>
              </section>

              {/* ACTIVITY */}
              <section className="p-6 bg-white border border-slate-100 shadow-sm rounded-2xl">
                <h3 className="font-bold">Recent Activity</h3>
                <p className="mt-2 text-sm text-slate-500">
                  No farming activities recorded yet. Start by exploring one
                  of the agriculture modules.
                </p>
              </section>

              <p className="text-xs text-center text-slate-400">
                Demonstration interface · No real AI predictions or farmer
                records are available yet.
              </p>
            </>
) : activePage === 'Crop Disease Detection' ? (
  <CropDisease />
) : activePage === 'Soil Health Analysis' ? (
  <SoilHealth />
) : activePage === 'Crop Recommendation' ? (
  <CropRecommendation />
) : activePage === 'Farm-to-Market Tracking' ? (
  <FarmTracking />
) : activePage === 'Analytics' ? (
  <Analytics />
) : activePage === 'Settings' ? (
  <Settings />
) : (
            <section className="p-8 bg-white border border-slate-100 shadow-sm rounded-2xl">
              <div className="flex items-center justify-center w-16 h-16 mb-5 text-3xl bg-green-100 rounded-2xl">
                {navigation.find((item) => item.name === activePage)?.icon}
              </div>

              <h1 className="text-2xl font-bold text-green-800">
                {activePage}
              </h1>

              <p className="max-w-xl mt-3 leading-7 text-slate-500">
                This module is part of the Smart Agriculture AI platform.
                Its functionality will be implemented in the upcoming
                development phases.
              </p>

              <div className="p-5 mt-6 border border-green-100 bg-green-50 rounded-xl">
                <p className="font-semibold text-green-800">
                  Module development pending
                </p>
                <p className="mt-1 text-sm text-green-700">
                  No real analysis or AI predictions are available in this
                  module yet.
                </p>
              </div>

              <button
                onClick={() => setActivePage('Overview')}
                className="px-5 py-3 mt-6 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-800"
              >
                ← Back to Dashboard
              </button>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;