import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const otsikko1 = 'give feedback'
  const otsikko2 = 'statistics'

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
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
        <div>good    {good}</div>
        <div>neutral {neutral}</div>
        <div>bad     {bad}</div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)