import React from 'react'
import ReactDOM from 'react-dom'
const Header = ({course}) => {
  return <h1>{course}</h1>
}
const Part = ({name,exercises}) => {
  return(
      <div>
        <p>
          {name}   {exercises}
        </p>
      </div>
    )
}
const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </div>
)

const All = ({sum}) => (
  <div>total of {sum} exercises</div>
)
const Course= ({course}) => {
  let sum = 0;
  course.parts.forEach(part => 
  {sum += part.exercises});
  return (
  <div>
   <Header course = {course.name}/>
   <Content parts = {course.parts}/>
   <All sum = {sum}/>
  </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
