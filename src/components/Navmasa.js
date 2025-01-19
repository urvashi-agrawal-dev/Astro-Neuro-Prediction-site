import React, { useState } from 'react';
import { Clock } from 'lucide-react';

const Card = ({ children }) => (
  <div className="border rounded shadow-sm p-4 bg-white">
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const Navmasa = () => {
  const [formData, setFormData] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: 0,
    latitude: 17.38333,
    longitude: 78.4666,
    timezone: 5.5,
    settings: {
      observation_point: 'topocentric',
      ayanamsha: 'lahiri'
    }
  });

  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      const numericFields = ['year', 'month', 'date', 'hours', 'minutes', 'seconds', 'latitude', 'longitude', 'timezone'];
      setFormData(prev => ({
        ...prev,
        [name]: numericFields.includes(name) ? Number(value) : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://json.freeastrologyapi.com/navamsa-chart-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'yCJRJk7aBd7brxE9vfmsW7p93EsBjcm04lU0xK6q'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setResults(data.output);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fae9d5]">
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <Clock className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold">Navamsa Chart Calculator</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Birth Date Inputs */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Year</label>
                  <input
                    type="number"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Month (1-12)</label>
                  <input
                    type="number"
                    name="month"
                    min="1"
                    max="12"
                    value={formData.month}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Date (1-31)</label>
                  <input
                    type="number"
                    name="date"
                    min="1"
                    max="31"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                {/* Time Inputs */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Hours (0-23)</label>
                  <input
                    type="number"
                    name="hours"
                    min="0"
                    max="23"
                    value={formData.hours}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Minutes (0-59)</label>
                  <input
                    type="number"
                    name="minutes"
                    min="0"
                    max="59"
                    value={formData.minutes}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Seconds (0-59)</label>
                  <input
                    type="number"
                    name="seconds"
                    min="0"
                    max="59"
                    value={formData.seconds}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                {/* Location Inputs */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Latitude</label>
                  <input
                    type="number"
                    name="latitude"
                    step="0.0001"
                    value={formData.latitude}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Longitude</label>
                  <input
                    type="number"
                    name="longitude"
                    step="0.0001"
                    value={formData.longitude}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Timezone</label>
                  <input
                    type="number"
                    name="timezone"
                    step="0.5"
                    value={formData.timezone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>

                {/* Settings */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Observation Point</label>
                  <select
                    name="settings.observation_point"
                    value={formData.settings.observation_point}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="topocentric">Topocentric</option>
                    <option value="geocentric">Geocentric</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Ayanamsha</label>
                  <select
                    name="settings.ayanamsha"
                    value={formData.settings.ayanamsha}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="lahiri">Lahiri</option>
                    <option value="sayana">Sayana</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#784585] text-white py-2 px-4 rounded hover:bg-[#673474] disabled:bg-gray-300"
          >
            {loading ? 'Calculating...' : 'Calculate Navamsa Chart'}
          </button>
        </form>

        {error && (
          <div className="mt-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        )}

        {results && (
          <Card className="mt-6">
            <CardContent>
              <h2 className="text-xl font-semibold mb-4">Navamsa Chart Positions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(results).map(([key, planet]) => (
                  <div key={key} className="p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-[#784585]">{planet.name}</h3>
                    <div className="mt-2 space-y-1 text-sm">
                      <p><span className="font-medium">Sign:</span> {planet.current_sign}</p>
                      <p><span className="font-medium">Retrograde:</span> {planet.isRetro === "true" ? "Yes" : "No"}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Navmasa;