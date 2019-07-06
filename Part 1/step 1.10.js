import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({header}) => ( <h1>{header}</h1> );

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

const Statistics = ({allClicks, good, neutral, bad, average, positive}) => {
  if (allClicks === 0) {
    return (<div>no feedback given</div>);
  } else return (
    <div>
      <Statistic text={'good'} value={good} />
      <Statistic text={'neutral'} value={neutral} />
      <Statistic text={'bad'} value={bad} />
      <Statistic text={'average'} value={average.toFixed(1)} />
      <Statistic text={'positive'} value={positive.toFixed(1) + ' %'} />
    </div>
  );
};

const Statistic = ({text, value}) => ( <div>{text} {value}</div> );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0
    };
  }

  setValue = (value) => () =>
    this.setState({ [value]: this.state[value] + 1 });
  

  render() {
    return (
      <div>
        <Header header={'Give feedback'} />
        <Button handleClick={this.setValue('good')} text={'good'} />
        <Button handleClick={this.setValue('neutral')} text={'neutral'} />
        <Button handleClick={this.setValue('bad')} text={'bad'} />
        <Header otsikko={'statistics'} />
        <Statistics
          allClicks={(this.state.good + this.state.neutral + this.state.bad)}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          average={(this.state.good - this.state.bad) / (this.state.good + this.state.neutral + this.state.bad)}
          positive={this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100}
         />
      </div>
    );
  }
};

ReactDOM.render(<App />,  document.getElementById('root'))
