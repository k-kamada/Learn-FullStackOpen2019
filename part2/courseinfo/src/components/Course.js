import React from 'react';

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

  const total = props.parts.reduce((acc, cur) => acc + cur.exercises, 0);

  return (
    <>
      {parts()}
      <b>total of {total} exercises</b>
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

export default Course;
