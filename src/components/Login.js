import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Fixed login credentials
    if (email === "deep@gmail.com" && password === "123") {
      setError("");
      setIsAuthenticated(true); // Set authentication state
      navigate("/chat"); // Redirect to chat route
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-6" style={{ backgroundColor: '#fae9d5' }}>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg overflow-y-auto max-h-full">
        <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#784585' }}>Login</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>Gender</label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              required
            >
              <option value="">Select your gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>State</label>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              placeholder="Enter your state"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>City</label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              placeholder="Enter your city"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" style={{ color: '#784585' }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring"
              style={{ borderColor: '#784585' }}
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-sm font-medium" style={{ color: 'red' }}>{error}</p>}
          <button
            type="submit"
            className="w-full py-2 text-white rounded-md focus:outline-none focus:ring"
            style={{ backgroundColor: '#784585' }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;