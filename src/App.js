import React, { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [error, setError] = useState('');

  const calculateBMI = () => {
let newError = {}
if(!height) newError.height ='enter the correct height'
if(!weight) newError.weight ='enter the correct weight '
if(Object.keys(newError).length>0){
  setError(newError)
}
else(
  setError('')
)
    // let heightError = "", weightError = "";

    // if (!height) {
    //   heightError = "Please enter your height";
    // }
    // if (!weight) {
    //   weightError = "Please enter your weight";
    // }

    // Set errors if any
    // setError({ height: heightError, weight: weightError });

    if (height && weight) {
      const heightInMeter = height / 100;
      const bmivalue = weight / (heightInMeter * heightInMeter);
      setBmi(bmivalue);
      if (bmi < 18) {
        setBmiStatus("under weight");
      } else if (bmi > 18 && bmi < 24) {
        setBmi("good weight");
      } else if (bmi > 24 && bmi < 29) {
        setBmiStatus("overWeight");
      } else {
        setBmiStatus("obesity");
      }
    } 
    else{
      setBmi(null);
      setBmiStatus("");
    }
  };

  return (
    <>
      <h1>BMI calculator</h1>
      <label>Height</label> <br></br>
      <input
        type="number"
        placeholder="Enter your height"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      
      <br></br>
      {error.height && <div style={{ color: "red" }} >  {error.height}</div>}
      <label>Weight</label> <br></br>
      <input
        type="number"
        placeholder="Enter your Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      
      <br></br>
      {error.weight && <div style={{ color: "red" }}> {error.weight}</div>} <br></br>
      <button onClick={calculateBMI}> Calculate BMI </button>
      {bmi !== null && (
        <div>
          <h4>Your BMI : {bmi.toFixed(2)}</h4>
          <h5>Your BMIStatus : {bmiStatus}</h5>
        </div>
      )}
    </>
  );
};
export default App;
