import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props)=>{
  const {handleClick,text,setItemVisible}= props
  return(
    <button onClick={()=>{handleClick();setItemVisible()}}>
      {text}
    </button>
  )
}

const Statistics =(props)=>{
  return(
    <p>{props.text}:{props.display}</p>
  )
}

const Visibility =(props)=>{
  const {visibleItem,good,neutral,bad} = props;
  if(visibleItem){
    return(
      <div>
        <Statistics display={good} text="Good"/>
        <Statistics display= {neutral} text="Neutral"/>
        <Statistics display={bad} text="Bad"/>
        <Statistics display={(good+bad+neutral)/3} text="Average"/>
        <Statistics display={(good/(good+bad+neutral))*100} text="Positive Percentage"/>
      </div>
    )
  }
  return(
    <p>No feedback given</p>
  )
}
const App = ()=>{
  const [good,setGood]=useState(0);
  const [neutral,setNeutral]=useState(0);
  const [bad,setBad]=useState(0);
  const [visibleItem,setVisibleItem]=useState(false);

  const setGoodValue=(newValue)=>{
    return setGood(newValue)
  }
  const setNeutralValue=(newValue)=>{
    return setNeutral(newValue)
  }
  const setBadValue=(newValue)=>{
    return setBad(newValue)
  }
  const setItemVisible =(newValue)=>{
    return setVisibleItem(newValue)
  }
  return(
    <div>
      <h2>Give feedback</h2>
      <Button handleClick={()=>{setGoodValue(good+1)}}  text="Good" setItemVisible={()=>{setItemVisible(true)}}/>
      <Button handleClick={()=>{setNeutralValue(neutral+1)}} text="Neutral" setItemVisible={()=>{setItemVisible(true)}}/>
      <Button handleClick={()=>{setBadValue(bad+1)}}  text="Bad" setItemVisible={()=>{setItemVisible(true)}}/>
      <h2>statistics</h2>
      <Visibility visibleItem={visibleItem} good={good} neutral={neutral} bad={bad}/>

    </div>

  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
