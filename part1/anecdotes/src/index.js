import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App =(props)=>{
  const [selected,setSelected]=useState(0);
  const [vote,setVote]=useState([]);
  const {anecdotes} = props;
  const voteCopy = [...vote];
   for(let i=0;i<anecdotes.length;i++){
       voteCopy.push(0);
   }

  const getRandomNumber = (max,min)=>{
    return Math.floor( Math.random()*(max-min)+min);
  }
  const randomAnecdote=()=>{
    let maxLength = anecdotes.length;
    let newAnecdote = getRandomNumber(maxLength,0);
    return setSelected(newAnecdote)
  }
   const upVote=(index)=>{
     voteCopy[index]+=1;
     return setVote([...voteCopy]);
   }
  return(
      <div>
        {props.anecdotes[selected]}
        has{vote[selected]}
        <div>
          <button onClick={randomAnecdote}>next anecdote</button>
          <button onClick={()=>upVote(selected)}>vote</button>
        </div>
      </div>
  );
}


const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(<App anecdotes={anecdotes}/>,document.getElementById('root'));
