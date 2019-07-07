import React from 'react'

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
  const Content = ({parts}) => {
    var pituus; 
    var i;
    var lista = []
    var yht = []
    pituus = parts.length; 
    for (i=0; i< pituus; i=i+1){
      lista.push(<Part name = {parts[i].name} exercises = {parts[i].exercises}/>)
      yht.push(parts[i].exercises)
    }
    
    return (lista) 
  }
  
  
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

  export {Courses}