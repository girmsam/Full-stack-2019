import React from 'react';
import Course from './components/course.js';

const App = ({ courses }) => (
  <div>
    <h1>Web development curriculum</h1>
    {courses.map(courses => <Course key={course.id} course={course} />)}
  </div>
);

export default App;