import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({text ,value}) => {
  const terminalChar = (text === 'positive') ? '%' : '';
  return (
    <>
      {text} {value} {terminalChar} <br />
    </>
  );
};

const Statistics = ({ feedbacks }) => {
  if (feedbacks.all === 0)
    return (<p>No feedback given</p>);
  return (
    <>
      <Statistic text='good' value={feedbacks.good} />
      <Statistic text='neutral' value={feedbacks.neutral} />
      <Statistic text='bad' value={feedbacks.bad} />
      <Statistic text='all' value={feedbacks.all} />
      <Statistic text='average' value={feedbacks.average} />
      <Statistic text='positive' value={feedbacks.positive} />
    </>
  );
};

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const average = (good - bad) / all;

  const handleClick = (onClick, value) => {
    return () => {
      setAll(all + 1);
      onClick(value + 1);
    };
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleClick(setGood, good)} text='good' />
      <Button onClick={handleClick(setNeutral, neutral)} text='neutral' />
      <Button onClick={handleClick(setBad, bad)} text='bad' />
      <h1>statistics</h1>
      <p>
        <Statistics feedbacks={{
          good: good,
          bad: bad,
          neutral: neutral,
          all: all,
          average: average,
          positive: (good / all * 100),
        }} />
      </p>
    </div>
  );
};

ReactDOM.render(<App />,
  document.getElementById('root')
);
