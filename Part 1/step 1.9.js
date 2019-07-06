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
    return (
     <div>good    {props.good} //
      neutral {props.neutral} //
      bad     {props.bad} //
      all    {props.bad+props.neutral+props.good} //
      average    {(props.good - props.bad)/(props.bad+props.neutral+props.good)} //
      positive     {(props.good/(props.bad+props.neutral+props.good))* 100} %</div>
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