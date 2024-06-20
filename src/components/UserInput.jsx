import React, { useState } from 'react';
import '../index.css';

export default function UserInput(props) {
    // Initialize state for investment data
    const [investmentData, setInvestmentData] = useState({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    // General handler for input changes
    const handleInputChange = (event) => {
        const { name, value } = event.target;

        // Update the state with the new value
        setInvestmentData((prevData) => {
            const newData = { ...prevData, [name]: value };
            props.updateData(newData); // Call the parent update function with the new data
            return newData;
        });
        props.updateData(investmentData);
    };

    return (
        <div>
            <table className='user-input'>
                <tbody>
                <tr>
                    <td>
                        <label htmlFor="initialInvestment">Initial investment</label>
                        <input
                            type="text"
                            id="initialInvestment"
                            name="initialInvestment"
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <label htmlFor="annualInvestment">Annual investment</label>
                        <input
                            type="text"
                            id="annualInvestment"
                            name="annualInvestment"
                            onChange={handleInputChange}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <label htmlFor="expectedReturn">Expected return</label>
                        <input
                            type="text"
                            id="expectedReturn"
                            name="expectedReturn"
                            onChange={handleInputChange}
                        />
                    </td>
                    <td>
                        <label htmlFor="duration">Duration</label>
                        <input
                            type="text"
                            id="duration"
                            name="duration"
                            onChange={handleInputChange}
                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
