import { useState } from "react";
import "./index.css";
import Counter from "./Components/Counter";
import TravelList from "./Components/travelList";
import Tip from "./Components/Tip";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  function handleNext() {
    setStep((prevStep) => {
      if (prevStep < messages.length) {
        return prevStep + 1;
      }
      return prevStep;
    });
  }

  function handlePrevious() {
    setStep((prevStep) => {
      if (prevStep > 1) {
        return prevStep - 1;
      }
      return prevStep;
    });
  }

  return (
    <>
    <Tip/>
   <TravelList/>
    <button className="close" onClick={() => setisOpen(!isOpen)}>&times;</button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
              disabled={step === 1}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    <Counter/> 
    </>
  );
}

export default App;
