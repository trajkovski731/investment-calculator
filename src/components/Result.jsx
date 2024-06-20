import '../index.css';

export default function Result({dataToBeDisplayed}) {
    console.log('I am in Result')
    console.log(dataToBeDisplayed)
    debugger
    return (
        <table className='result'>
            <tbody>
            <tr>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year)</td>
                <td>Total Interest</td>
                <td>Investment Capital</td>
            </tr>
            {dataToBeDisplayed.map(item => {
                return (
                    <tr className='result-item'>
                        <td>{item.year}</td>
                        <td>{item.valueEndOfYear}</td>
                        <td>{item.interest}</td>
                        <td>{item.annualInvestment}</td>
                        <td>5</td>
                    </tr>
                )
            })}

            {/*<td>
                <text>Year</text>
                <tr>123</tr>

            </td>
            <td>
                <text>Investment Value</text>
                <tr>321</tr>
            </td>
            <td>
                <text>Interest (Year)</text>
                <tr>321</tr>
            </td>
            <td>
                <text>Total Interest</text>
                <tr>321</tr>
            </td>
            <td>
                <text>Investment Capital</text>
                <tr>321</tr>
            </td>*/}
            </tbody>
        </table>
    )
}