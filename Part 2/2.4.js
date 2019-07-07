import React from 'react'
import ReactDOM from 'react-dom'
const Topheader = () => {
  return <h1>Web development curriculum</h1>
}
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
const Together = ({parts}) => {
    var totalAmount = parts.reduce(function(sum, part){
      return sum + part.exercises
  }, 0)
  return (
    <div>
      <p>
        total of {totalAmount} exercises
      </p>
    </div>
  )
}
const Content = ({parts}) => (
  <div>
    {parts.map(part => <Part key={part.id} part={part}/>)}
  </div>
)


const Course= ({course}) => {
  return(
  <div>
   <Header course = {course.name}/>
   <Content parts = {course.parts}/>
   <Together parts = {course.parts}/>
  </div>)
}

const Courses = ({courses}) => {
  var pituus;
  var i;
  var lista2 = []
  pituus = courses.length;
  for (i=0;i<pituus; i=i+1){
    lista2.push(<Course course = {courses[i]}/>)
  }
  return (lista2)
}
const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <Topheader/>
      <Courses courses={courses} />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))

