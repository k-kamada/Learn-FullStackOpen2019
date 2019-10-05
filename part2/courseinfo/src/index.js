import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  );
}

const Content = (props) => {
  const parts = () => props.parts.map(part =>
    <Part
      name={part.name}
      exercises={part.exercises}
      key={part.id}
    />
  );

  return (
    <>
      {parts()}
    </>
  );
}

const Course = ({ course }) => {
  return (
    <> 
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1,
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2,
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3,
      },
    ],
  };

  return (
    <div>
      <Course course={course} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
