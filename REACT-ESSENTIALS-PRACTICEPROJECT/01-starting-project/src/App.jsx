import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialIvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});

function handleChange(inputIdentifier, newValue) {
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: +newValue,
      }
  });
} 

  return (
    <>
    <Header/>
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results input={userInput}/>

    </>

  )
}

export default App
