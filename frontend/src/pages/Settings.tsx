import React, { useState } from 'react';

function Settings() {
  const [name, setName] = useState('Farmer');
  const [email, setEmail] = useState('');
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');
  const [message, setMessage] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    setMessage('Settings saved for this session.');
  };

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Settings
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your profile and application preferences.
        </p>
      </div>

      {/* Profile Settings */}
      <div className="bg-white rounded-xl border shadow-sm p-6">

        <h2 className="text-lg font-semibold text-gray-800 mb-5">
          Profile Information
        </h2>

        <form onSubmit={handleSave}>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

          </div>

          {/* Preferences */}
          <div className="mt-8">

            <h2 className="text-lg font-semibold text-gray-800 mb-5">
              Application Preferences
            </h2>

            <div className="mb-5">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Language
              </label>

              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full md:w-1/2 border rounded-lg p-3"
              >
                <option>English</option>
                <option>Hindi</option>
                <option>Gujarati</option>
                <option>Telugu</option>
              </select>
            </div>

            <div className="flex items-center justify-between border-t pt-5">
              <div>
                <h3 className="font-medium text-gray-800">
                  Notifications
                </h3>

                <p className="text-sm text-gray-500">
                  Enable application notifications.
                </p>
              </div>

              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="w-5 h-5 accent-green-600"
              />
            </div>

          </div>

          <button
            type="submit"
            className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium"
          >
            Save Settings
          </button>

        </form>

        {message && (
          <p className="mt-4 text-sm text-green-700">
            {message}
          </p>
        )}

      </div>

      {/* System Information */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">

        <h3 className="font-semibold text-blue-800 mb-2">
          System Information
        </h3>

        <p className="text-sm text-blue-700">
          Application: Smart Agriculture AI
          <br />
          Version: 1.0.0
          <br />
          Frontend: React + TypeScript
          <br />
          Backend: Python Flask
        </p>

      </div>

      <p className="text-xs text-gray-400">
        Note: Settings currently remain in application memory and
        are not permanently stored.
      </p>

    </div>
  );
}

export default Settings;