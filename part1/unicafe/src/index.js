import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistics = ({ feedbacks }) => {
  if (feedbacks.all === 0)
    return (<p>No feedback given</p>);
  return (
    <>
      good {feedbacks.good} <br />
      neutral {feedbacks.neutral} <br />
      bad {feedbacks.bad} <br />
      all {feedbacks.all} <br />
      average {feedbacks.average} <br />
      positive {feedbacks.positive} %<br />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const average = (good - bad) / all;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={()=>{setGood(good+1); setAll(all+1)}}>good</button>
      <button onClick={()=>{setNeutral(neutral+1); setAll(all+1)}}>neutral</button>
      <button onClick={()=>{setBad(bad+1); setAll(all+1)}}>bad</button>
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
