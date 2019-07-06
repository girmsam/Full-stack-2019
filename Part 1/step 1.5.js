import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log(props)
  return <h1>{props.course}</h1>
}
const Part = (props) => {
    return ( 
        <div>
            <p>
            {props.name}    {props.exercises}
            </p>
        </div>

    )
} 
const Content = (props) => {
    return (
      <div>
        <Part name = {props.part1.name} exercises = {props.part1.exercises}
        />
        <Part name = {props.part2.name} exercises = {props.part2.exercises}
        />
        <Part name = {props.part3.name} exercises = {props.part3.exercises}
        />
      </div>
    )
  }

const Total= (props1) => {
    return ( 
        <div>
            <p>
            Number of exercises {props1.eka + props1.toka + props1.kolmas}
            </p>
        </div>

    )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


    return (
      <div>
        <Header course = {course.name} />
        <Content part1 = {course.parts[0]} part2 = {course.parts[1]} part3 = {course.parts[2]}/>
        <Total eka = {course.parts[0].exercises} toka = {course.parts[1].exercises} kolmas = {course.parts[2].exercises}/>
      </div>
    )
  }
ReactDOM.render(<App />, document.getElementById('root'))