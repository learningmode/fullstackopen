import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App =()=>{
  let item ='';
  const course = 'Half Stack application development'
  const parts = [
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
function printMe(item){
  return <p>{item.name}</p>
}
 return(
      <div>
        <h1>{course}</h1>
        <p>{parts[0].name}</p>
        {parts.map(function(item){
           return<p>{item.name}</p>
        })}
        <p>Using ForEach</p>
        {parts.forEach(printMe)}
      </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));
