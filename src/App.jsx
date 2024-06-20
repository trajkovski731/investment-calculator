import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Result from "./components/Result.jsx";
import {useState} from "react";
import {calculateInvestmentResults} from './util/investment.js';

function App() {

    const [annualData, setAnnualData] = useState([]);


    function onDataChanged(enteredData) {
        console.log("I am in App in method on Data changed")
        let newAnnualData = calculateInvestmentResults(enteredData);
        setAnnualData(newAnnualData);
    }

    return (
        <div>
            <Header/>
            <UserInput updateData={onDataChanged}/>
            <Result dataToBeDisplayed={annualData}/>
        </div>

    )
}

export default App
