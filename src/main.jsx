// src/main.jsx
import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Root from "./pages/Root";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GenerateResume from "./pages/GenerateResume";
import Login from "./components/Login"; // Import the Login component
import Resume from "./components/Resume"; // Import the Resume component
import LandingPage from "./pages/LandingPage"; // Import your LandingPage component
import { Toaster } from "react-hot-toast";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [personalInformation, setPersonalInformation] = useState(null); // State for personal information

  const handleLogin = () => {
    setIsLoggedIn(true); // Set logged-in state to true
    // No user data is set here, as per your request
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set logged-out state
    setPersonalInformation(null); // Clear personal information on logout
  };

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={isLoggedIn ? <LandingPage /> : <Login onLogin={handleLogin} />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="generate-resume" element={<GenerateResume />} />
          <Route path="/resume" element={<Resume data={{ personalInformation }} onLogout={handleLogout} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} /> {/* Ensure the login route is defined */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);