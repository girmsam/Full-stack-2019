import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.good+props.bad+props.neutral == 0){
    return (
        <div>
          No feedback given
        </div>
      )
}
    return (<table>
  <tr>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>Good</td>
    <td>{props.good}</td>
  </tr>
  <tr>
    <td>Bad</td>
    <td>{props.bad}</td>
  </tr>
  <tr>
    <td>Neutral</td>
    <td>{props.neutral}</td>
  </tr>
  <tr>
    <td>All</td>
    <td>{props.bad+props.neutral+props.good} </td>
  </tr>
  <tr>
    <td>average</td>
    <td> {(props.good - props.bad)/(props.bad+props.neutral+props.good)} </td>
  </tr>
  <tr>
    <td>positive</td>
    <td> {(props.good/(props.bad+props.neutral+props.good))* 100} %</td>
  </tr>
</table>
    )

}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  const otsikko1 = 'give feedback'
  const otsikko2 = 'statistics'

  const handleGoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks + 0)
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks - 1)
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>{otsikko1}</h1>
      <div>
      <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
        </div>
        <h1>{otsikko2}</h1>
        <Statistics bad = {bad} good = {good} neutral = {neutral} />
    </div>
    
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)