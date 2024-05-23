import { useState } from 'react';
import './App.css';

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => { 
    setCounter(counter + 1);
  };

  const remove = () =>{
    if(counter > 0){
      setCounter(counter -1);
   
    }
    return;
  }


  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={remove}>Remove Value</button>
    </>
  );
}

export default App;
