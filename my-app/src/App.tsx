import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import LandingPage from "./components/landing-page/landingpage";
import Profile from "./components/creator-profile/profile";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
