import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Signup from './components/Signup'
import BMI from './components/BMI'
import Underweight from './components/homepage/Underweight'
import Healthy from './components/homepage/Healthy'
import Overweight from './components/homepage/Overweight'
import Obese from './components/homepage/Obese'
import Curl from './components/Curl'
import Row from './components/Row'
import Lift from './components/Lift'
import Jack from './components/Jack'
import Raise from './components/Raise'
import Lunge from './components/Lunge'
import Pushup from './components/Pushup'
import Squat from './components/Squat'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/bmi" element={<BMI />} />
          <Route path="/underweight" element={<Underweight />} />
          <Route path="/healthy" element={<Healthy />} />
          <Route path="/overweight" element={<Overweight/>} />
          <Route path="/obese" element={<Obese />} />
          <Route path="/curl" element={<Curl />} />
          <Route path="/row" element={<Row />} />
          <Route path="/lift" element={<Lift />} />
          <Route path="/jack" element={<Jack />} />
          <Route path="/raise" element={<Raise />} />
          <Route path="/lunge" element={<Lunge />} />
          <Route path="/pushup" element={<Pushup />} />
          <Route path="/squat" element={<Squat />} />
        </Routes>     
      </BrowserRouter>
    </div>
  );
}

export default App;
