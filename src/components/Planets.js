import React, { useState } from 'react';
import { Clock } from 'lucide-react';

// Define the Card component
const Card = ({ children }) => (
  <div className="border rounded shadow-sm p-4 bg-white">
    {children}
  </div>
);

// Define the CardContent component
const CardContent = ({ children, className }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const Planets = () => {
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
    observation_point: 'topocentric',
    ayanamsha: 'lahiri'
  });

  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const numericFields = ['year', 'month', 'date', 'hours', 'minutes', 'seconds', 'latitude', 'longitude', 'timezone'];
    setFormData(prev => ({
      ...prev,
      [name]: numericFields.includes(name) ? Number(value) : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://json.freeastrologyapi.com/planets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'yCJRJk7aBd7brxE9vfmsW7p93EsBjcm04lU0xK6q'
        },
        body: JSON.stringify({
          year: parseInt(formData.year),
          month: parseInt(formData.month),
          date: parseInt(formData.date),
          hours: parseInt(formData.hours),
          minutes: parseInt(formData.minutes),
          seconds: parseInt(formData.seconds),
          latitude: parseFloat(formData.latitude),
          longitude: parseFloat(formData.longitude),
          timezone: parseFloat(formData.timezone),
          observation_point: formData.observation_point,
          ayanamsha: formData.ayanamsha
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        throw new Error(`API Error: ${errorData || response.statusText}`);
      }

      const data = await response.json();
      
      if (data.output && Array.isArray(data.output)) {
        setResults(data.output[1]);
      } else {
        throw new Error('Invalid response format from API');
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch planetary positions');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#fae9d5]">
      <div className="flex items-center gap-2 mb-6">
        <Clock className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold">Birth Chart Calculator</h1>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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

              <div className="space-y-2">
                <label className="block text-sm font-medium">Latitude</label>
                <input
                  type="number"
                  name="latitude"
                  step="0.000001"
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
                  step="0.000001"
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

              <div className="space-y-2">
                <label className="block text-sm font-medium">Observation Point</label>
                <select
                  name="observation_point"
                  value={formData.observation_point}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="topocentric">Topocentric</option>
                  <option value="geocentric">Geocentric</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium">Ayanamsha</label>
                <select
                  name="ayanamsha"
                  value={formData.ayanamsha}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                  required
                >
                  <option value="lahiri">Lahiri</option>
                  <option value="raman">Raman</option>
                  <option value="krishnamurti">Krishnamurti</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        <button
        style={{ backgroundColor: '#784585' }}
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-blue-300"
        >
          {loading ? 'Calculating...' : 'Calculate Birth Chart'}
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
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Planetary Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(results).map(([planet, data]) => (
                <div key={planet} className="p-4 bg-gray-50 rounded-lg">
                  <h3 style={{ text: '#784585' }} className="font-semibold text-blue-600">{planet}</h3>
                  <div className="mt-2 space-y-1">
                    <p><span className="font-medium">Sign:</span> {data.current_sign}</p>
                    <p><span className="font-medium">Degree:</span> {data.normDegree.toFixed(2)}°</p>
                    <p><span className="font-medium">Retrograde:</span> {data.isRetro === "true" ? "Yes" : "No"}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default Planets;