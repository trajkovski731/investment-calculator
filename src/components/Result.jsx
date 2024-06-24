import '../index.css';

export default function Result({dataToBeDisplayed}) {
    console.log('I am in Result')
    console.log(dataToBeDisplayed)
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
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}