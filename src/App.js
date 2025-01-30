import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SimpleShoppingCart from "./components/ProductTable/ProductTable";
import HorizontalLinearStepper from "./components/Stepper/Stepper";

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="body">
      {/* Pass activeStep as a prop to the Stepper */}
      <HorizontalLinearStepper activeStep={activeStep} />

      {/* Render Components Based on Step */}
      {activeStep === 0 && <SimpleShoppingCart />}
      {activeStep === 1 && <ContactForm />}
      {activeStep === 2 && (
        <>
          <SimpleShoppingCart /> <ContactForm />
        </>
      )}

      {/* Buttons to Change Steps */}
      <div className="buttonBody">
        <button disabled={activeStep === 0} onClick={handleBack} className="button">
          {/* Back */}
          {activeStep === 0 ? "Continue Shopping" : "Back"}
        </button>
        <button onClick={handleNext} disabled={activeStep === 2}  className="button">
          {activeStep === 2 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default App;
