import React,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App =(props)=>{
  const [selected,setSelected]=useState(0);
  const [vote,setVote]=useState([]);
  const [max,setMax]=useState(0);
  const {anecdotes} = props;
  const voteCopy = [...vote];
  // The key index/length of voteCopy array is the same as the key index/length of anecdotes
   for(let i=0;i<anecdotes.length;i++){
       voteCopy.push(0);
   }
  // gets random number within the range starting from min but excluding max
  const getRandomNumber = (max,min)=>{
    return Math.floor( Math.random()*(max-min)+min);
  }
  // Returns random anecdote
  const randomAnecdote=()=>{
    let maxLength = anecdotes.length;
    let newAnecdote = getRandomNumber(maxLength,0);
    return setSelected(newAnecdote)
  }
  // Finds the  Max element in an array
  const findMax = (votes)=>{
     let maxelem = 0;
      for(let i=0;i<votes.length;i++){
         if(votes[maxelem] < votes[i]){
           maxelem = i;
         }
      }
      return maxelem;
  }

  // Increments the vote.
   const upVote=(index)=>{
     voteCopy[index]+=1;
     return setVote([...voteCopy]);
   }

   useEffect(()=>{
          let maxelem = findMax(vote);
          setMax(maxelem);
   },[vote])

  return(
      <div>
        <h2>Anecdote of the day</h2>
        {props.anecdotes[selected]}
         has{vote[selected]}
        <div>
          <button onClick={randomAnecdote}>next anecdote</button>
          <button onClick={()=>upVote(selected)}>vote</button>
        </div>
        <div>
          <h2>Anecdotes with most votes</h2>
          {props.anecdotes[max]}
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
