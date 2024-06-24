import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function App() {

    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    const inputIsValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput(prevData => {
            return {
                ...prevData,
                [inputIdentifier]: +newValue
            }
        })
    }

    return (
        <>
            <Header/>
            <UserInput onChange={handleChange} userInput={userInput}/>
            {!inputIsValid && <p className="center">Please input valid year</p>}
            {inputIsValid && <Results userInput={userInput}></Results>}
        </>
    )
}

export default App
