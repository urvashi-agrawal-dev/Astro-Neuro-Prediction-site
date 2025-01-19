// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import Chat from './components/Chat';
// import Login from './components/Login';
// import Signup from './components/Signup';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Tracks authentication state

//   const login = () => setIsAuthenticated(true);
//   const logout = () => setIsAuthenticated(false);

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/login" element={<Login onLogin={login} />} />
//         <Route path="/signup" element={<Signup />} />
//         {/* Protect the /chat route */}
//         <Route
//           path="/chat"
//           element={
//             isAuthenticated ? <Chat /> : <Navigate to="/login" replace />
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Chat from "./components/Chat";
import HomeTab from "./components/HomeTab";
import ChatAisection from "./components/ChatAisection";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchBar from "./components/SearchBar";
import Announcement from "./components/Announcement";
import Planets from "./components/Planets";
import Expla from "./components/Expla";
import Navmasa from "./components/Navmasa";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />

        {/* Login Page */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/home" element={<HomeTab />} />
        <Route path="/aichat" element={<ChatAisection />} />
        <Route path="/search" element={<SearchBar />} />
        <Route path="/anc" element={<Announcement />} />
        <Route path="/pla" element={<Planets />} />
        <Route path="/epla" element={<Expla />} />
        <Route path="/Navmasa" element={<Navmasa />} />
     


        {/* Protected Chat Route */}
        <Route
          path="/chat"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Chat />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
