import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header =(props)=>{
  return <h1>{props.course.name}</h1>
}
const Content = (props)=>{
  let item ='';
  return(<>
  {props.course.parts.map((item,index)=>{
    return <p key={index}>{item.name}{item.exercises}</p>
  })}
  </>)
}
const Total =(props)=>{
  let sum = 0;
  props.course.parts.forEach((item) => {
     sum +=item.exercises
  });
  return(
    <p>Number of exercises {sum}</p>
  )
}

const App =()=>{
  const course = {
  name: 'Half Stack application development',
  parts : [
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
 return(
      <div>
        <Header course={course}/>
        <Content course={course}/>
        <Total course={course}/>
      </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));
