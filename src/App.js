import './App.css';
import { useState } from 'react';

export default function App() {
  
  const[height,setHeight] = useState("");
  const[weight,setWeight] = useState("");
  const [status,setStatus] = useState(null)
  const[bmiResult,setBmiResult] = useState("")


  function calculateBMI() {
    let bmi = Number(weight / (height/100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi)
    setStatus(bmiStatus)

  }

  function getStatus(bmi) {
    if(bmi < 18.5) return "underweight";
    else if(bmi >= 18.5 && bmi <24.9) return "Normal";
    else if(bmi >= 25 && bmi < 29.9) return "Overweight"; 
    else return "Obese"
  }
  return (
    <div className="w-full max-w-xs m-10">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        Height
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Height in cm" type="text" placeholder="Height" value = {height} onChange = {e => setHeight(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Weight
      </label>
      <input className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Weight" type="weight in kg" placeholder="Weight" value = {weight} onChange = {e => setWeight(e.target.value)}/>
    </div>
    <div className="flex items-center justify-center">
      <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={calculateBMI}>
        Calculate BMI
      </button>
      <p> {status} </p>
    </div>
  </form>
</div>
  );
}

