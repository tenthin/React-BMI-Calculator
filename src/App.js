import './App.css';
import { useState } from 'react';

export default function App() {
  
  const[height,setHeight] = useState(null);
  const[weight,setWeight] = useState(null);
  const [status,setStatus] = useState('')



  return (
    <div class="w-full max-w-xs m-10">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Height
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Height in cm" type="text" placeholder="Height" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Weight
      </label>
      <input class="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Weight" type="weight in kg" placeholder="Weight" />
    </div>
    <div class="flex items-center justify-center">
      <button class="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Calculate BMI
      </button>
    </div>
  </form>
</div>
  );
}

