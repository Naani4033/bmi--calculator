import { useState } from 'react'
import './App.css'

function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus,setBmiStatus]=useState("");
  const [errorMessage,SetErrorMessage]=useState("");

    const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight); 
  
 
    if (isValidHeight && isValidWeight) {
      const heightInMeters = parseFloat(height) / 100; 
      const weightInKg = parseFloat(weight);
      const bmiValue = weightInKg / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2)); 
      

      if(bmiValue < 18.5){
      setBmiStatus("under weight");
      }
      else if
      (bmiValue >= 18.5 && bmiValue < 24.9)
      {
      setBmiStatus("Normal weight");
      }
      else if
      (bmiValue >= 25 && bmiValue < 29.9)
      {
      setBmiStatus("Normal weight");
      }
      else{
      setBmiStatus("obese");
      }SetErrorMessage("");
      }else{
        setBmi(null);
        setBmiStatus(" ");
        SetErrorMessage("Please enter vaild numeric values for height and meight.");
      }
    };

   const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
   };

  return (
          <div className="bmi-calc">
          <div className="box"></div>
          <div className="data">
          <h1>BMI CALCULATOR</h1>

          {errorMessage && <p className="error">{errorMessage}</p>}
          
          <div className="intput-con">
            <labal htmlFor ="height">Height(cm) </labal>
            <input type="text"id="height"onChange={(e) => setHeight (e.target.value)}/>
          </div>

          <div className="intput-con">
            <labal htmlFor ="">weight</labal>
            <input type="text"id="weight"onChange={(e) => setWeight (e.target.value)}/>
          </div>

          <button onClick={calculateBmi}>Calculate BMI</button>
          <button className="btn" onClick={clearAll}>Clear</button>

          {bmi !== null && (
          <div className="result">
            <p>Your BMI is {bmi}</p>
            <p>Status: {bmiStatus} </p>
          </div>
          )}
          </div>
        </div>
  );
}
export default App;
