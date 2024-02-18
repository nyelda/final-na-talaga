import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import BMI from './components/BMI'
import Homepage from './components/Homepage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;