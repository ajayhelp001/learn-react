import { useState } from "react";

function App() {
// useState use 
  let [counter, setCounter] = useState(10)

  const addCounter = () =>{
    if(counter < 20){
      setCounter(counter + 1)
      console.log(counter, Math.random());
    }
  }
  const removeCounter = () =>{
    if(counter > 0){
      setCounter(counter - 1)
      console.log(counter, Math.random());
    }
  }

  return (
    <>
      <h1>Hello Vite React App {counter}</h1>
      <h2>tootal counter {counter}</h2>
      <button onClick={addCounter}>Add Counter {counter}</button>
      <button onClick={removeCounter}>Remove Counter {counter}</button>
    </>
  )
}

export default App
