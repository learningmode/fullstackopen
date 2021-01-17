import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props)=>{
  const {handleClick,text}= props
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const App = ()=>{
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);

  const setGoodValue=(newValue)=>{
    return setGood(newValue)
  }
  const setNeutralValue=(newValue)=>{
    return setNeutral(newValue)
  }
  const setBadValue=(newValue)=>{
    return setBad(newValue)
  }
  return(
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={()=>{setGoodValue(good+1)}} text="Good"/>
      <Button handleClick={()=>{setNeutralValue(neutral+1)}} text="Neutral"/>
      <Button handleClick={()=>{setBadValue(bad+1)}} text="Bad"/>
      <h2>statistics</h2>
      <p>{good}</p>
      <p>{neutral}</p>
      <p>{bad}</p>
    </div>

  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
